import * as i18n from "@solid-primitives/i18n";
import * as storage from "@solid-primitives/storage";
import {
    ParentComponent,
    Suspense,
    createContext,
    createEffect,
    createResource,
    onMount,
    startTransition,
    useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import { Meta, Title } from "@solidjs/meta";

// en dictionary is loaded by default
import { dict as fr_dict } from "~/i18n/fr";

type RawDictionary = typeof fr_dict;

export type Locale = "en" | "fr";

/*
for validating of other dictionaries have same keys as en dictionary
some might be missing, but the shape should be the same
*/
type DeepPartial<T> = T extends Record<string, unknown>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const raw_dict_map: Record<
    Locale,
    () => Promise<{ dict: DeepPartial<RawDictionary> }>
> = {
    fr: () => null as any, // en is loaded by default
    en: () => import("~/i18n/en"),
};

export type Dictionary = i18n.Flatten<RawDictionary>;

const fr_flat_dict: Dictionary = i18n.flatten(fr_dict);

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    if (locale === "fr") return fr_flat_dict;

    const { dict } = await raw_dict_map[locale]();
    const flat_dict = i18n.flatten(dict) as RawDictionary;
    return { ...fr_flat_dict, ...flat_dict };
}

const toLocale = (string: string): Locale | undefined =>
    string in raw_dict_map ? (string as Locale) : undefined;

interface Settings {
    locale: Locale;
    dark: boolean;
}

function initialLocale(): Locale {
    let locale: Locale | undefined;

    locale = toLocale(navigator.language.slice(0, 2));
    if (locale) return locale;

    locale = toLocale(navigator.language.toLocaleLowerCase());
    if (locale) return locale;

    return "fr";
}

function initialSettings(): Settings {
    return {
        locale: initialLocale(),
        dark: false,
    };
}

function deserializeSettings(value: string): Settings {
    const parsed = JSON.parse(value) as unknown;
    if (!parsed || typeof parsed !== "object") return initialSettings();

    return {
        locale:
            ("locale" in parsed &&
                typeof parsed.locale === "string" &&
                toLocale(parsed.locale)) ||
            initialLocale(),
        dark:
            "dark" in parsed && typeof parsed.dark === "boolean"
                ? parsed.dark
                : false,
    };
}

interface AppState {
    locale: () => Locale;
    setLocale(value: Locale): void;
    t: i18n.Translator<Dictionary>;

    isDark: () => boolean;
    setDark(value: boolean): void;
}

const AppContext = createContext<AppState>({} as AppState);

export const useAppState = () => useContext(AppContext);

export const AppContextProvider: ParentComponent = (props) => {
    const now = new Date();
    const cookieOptions: storage.CookieOptions = {
        expires: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
    };

    const [settings, set] = storage.makePersisted(
        createStore(initialSettings()),
        {
            storageOptions: cookieOptions,
            storage: storage.cookieStorage,
            deserialize: (value) => deserializeSettings(value),
        }
    );

    const locale = () => settings.locale;

    const isDark = () => settings.dark;

    const [dict] = createResource(locale, fetchDictionary, {
        initialValue: fr_flat_dict,
    });

    const t = i18n.translator(dict, i18n.resolveTemplate);

    const state: AppState = {
        locale,
        setLocale(value) {
            void startTransition(() => {
                set("locale", value);
            });
        },
        t,

        isDark,
        setDark(value) {
            void startTransition(() => {
                set("dark", value);
            });
        },
    };

    createEffect(() => (document.documentElement.lang = settings.locale));

    createEffect(() => {
        if (settings.dark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    });

    return (
        <Suspense>
            <AppContext.Provider value={state}>
                <Title>{t("title")}</Title>
                <Meta name="lang" lang={locale()} />
                {props.children}
            </AppContext.Provider>
        </Suspense>
    );
};
