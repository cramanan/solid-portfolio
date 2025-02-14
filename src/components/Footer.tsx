import { useAppState } from "~/AppContext";

export default function Footer() {
    const { t } = useAppState();
    return (
        <footer class="text-center py-1">
            Cyril Ram. © 2025 | {t("copyrights")}.
        </footer>
    );
}
