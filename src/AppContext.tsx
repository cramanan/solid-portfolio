import * as i18n from "@solid-primitives/i18n";
import * as storage from "@solid-primitives/storage";
import {
    ParentComponent,
    Suspense,
    createContext,
    createEffect,
    createResource,
    startTransition,
    useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import { Meta, MetaProvider, Title } from "@solidjs/meta";

// fr dictionary is loaded by default
import fr_dict from "~/i18n/fr.json";

type RawDictionary = typeof fr_dict;

export type Locale = "en" | "fr";

const initialLocale: Locale = "fr";

/*
for validating of other dictionaries have same keys as en dictionary
some might be missing, but the shape should be the same
*/
type DeepPartial<T> = T extends Record<string, unknown>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const raw_dict_map: Record<Locale, () => Promise<DeepPartial<RawDictionary>>> =
    {
        fr: async () => fr_dict,
        en: () => import("~/i18n/en.json"),
    };

export type Dictionary = i18n.Flatten<RawDictionary>;

const fr_flat_dict: Dictionary = i18n.flatten(fr_dict);

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    if (locale === "fr") return fr_flat_dict;
    const dict = await raw_dict_map[locale]();
    const flat_dict = i18n.flatten(dict) as RawDictionary;
    return { ...fr_flat_dict, ...flat_dict };
}

const toLocale = (string: string): Locale | undefined =>
    string in raw_dict_map ? (string as Locale) : undefined;

interface Settings {
    locale: Locale;
    dark: boolean;
}

function initialSettings(): Settings {
    return {
        locale: initialLocale,
        dark: false,
    };
}

function deserialize(value: string): Settings {
    const parsed = JSON.parse(value) as unknown;
    if (!parsed || typeof parsed !== "object") return initialSettings();

    return {
        locale:
            ("locale" in parsed &&
                typeof parsed.locale === "string" &&
                toLocale(parsed.locale)) ||
            initialLocale,
        dark:
            "dark" in parsed && typeof parsed.dark === "boolean"
                ? parsed.dark
                : false,
    };
}

interface AppState {
    locale: () => Locale;
    setLocale(value: Locale): void;
    translation: i18n.ChainedTranslator<Dictionary>;

    isDark: () => boolean;
    setDark(value: boolean): void;
}

const AppContext = createContext<AppState>({} as AppState);

export const useAppState = () => useContext(AppContext);

export const AppContextProvider: ParentComponent = (props) => {
    const now = new Date();
    const expires = new Date(
        now.getFullYear() + 1,
        now.getMonth(),
        now.getDate()
    );
    const storageOptions = { expires };

    const [settings, set] = storage.makePersisted(
        createStore(initialSettings()),
        {
            name: "settings",
            storageOptions,
            storage: storage.cookieStorage,
            deserialize,
        }
    );

    const locale = () => settings.locale;

    const isDark = () => settings.dark;

    const [dict] = createResource(locale, fetchDictionary, {
        initialValue: fr_flat_dict,
    });

    const t = i18n.translator(dict);

    const translation = i18n.chainedTranslator(dict(), t);

    const state: AppState = {
        locale,
        setLocale: (value) => startTransition(() => set("locale", value)),
        translation,
        isDark,
        setDark: (value) => startTransition(() => set("dark", value)),
    };

    createEffect(() => (document.documentElement.lang = settings.locale));

    createEffect(() =>
        settings.dark
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")
    );

    return (
        <MetaProvider>
            <AppContext.Provider value={state}>
                <Title>{translation.title()}</Title>
                <Meta name="lang" lang={locale()} />
                <Meta name="author" content="Cyril Ramananjaona" />
                <Meta name="description" content={translation.description()} />
                <Meta
                    name="keywords"
                    content="portfolio, dev, SolidJS, React, Rust, Golang, Vite, SQL, SQLite, HTML, CSS, JavaScript, JS"
                />
                <Meta name="generator" content="vite" />

                <Suspense>{props.children}</Suspense>
            </AppContext.Provider>
        </MetaProvider>
    );
};
