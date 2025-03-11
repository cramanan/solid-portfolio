import { Locale, useAppState } from "~/AppContext";
import Languages from "./icons/Languages";

export default function LocaleSwitcher() {
    const { locale, setLocale } = useAppState();
    return (
        <div class="relative w-7 h-7">
            <Languages class="absolute w-7 h-7" />
            <select
                class="bg-transparent outline-none appearance-none opacity-0 w-full"
                onChange={(e) => setLocale(e.currentTarget.value as Locale)}
            >
                <option value="en" selected={locale() === "en"}>
                    🇺🇸 English
                </option>
                <option value="fr" selected={locale() === "fr"}>
                    🇫🇷 Français
                </option>
            </select>
        </div>
    );
}
