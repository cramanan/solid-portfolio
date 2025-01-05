import { useAppState } from "~/AppContext";

export default function LocaleSwitcher() {
    const { locale, setLocale } = useAppState();
    return (
        <button onClick={() => setLocale(locale() === "fr" ? "en" : "fr")}>
            {locale()}
        </button>
    );
}
