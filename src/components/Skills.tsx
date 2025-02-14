import { useAppState } from "~/AppContext";

export default function Skills() {
    const { t } = useAppState();
    return (
        <section id="skills" class="h-screen">
            {t("Skills")}
        </section>
    );
}
