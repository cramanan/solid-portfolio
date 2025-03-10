import { useAppState } from "~/AppContext";

export default function Footer() {
    const { t } = useAppState();
    return (
        <footer class="text-center h-12">
            Cyril Ram. © 2025 | {t("copyrights")}.
        </footer>
    );
}
