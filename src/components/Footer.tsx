import { useAppState } from "~/AppContext";

export default function Footer() {
    const { t } = useAppState();
    return (
        <footer class="text-center py-1.5 h-12 border-t [border-image:linear-gradient(90deg,#0000_30%,#c8c8c880_50%,#0000_70%)_100]">
            Cyril Ram. © 2025 | {t("copyrights")}.
        </footer>
    );
}
