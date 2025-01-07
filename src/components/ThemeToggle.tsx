import Sun from "lucide-solid/icons/sun";
import Moon from "lucide-solid/icons/moon";

import { Show, VoidComponent } from "solid-js";
import { useAppState } from "~/AppContext";

// TODO: Add title and sr-only title
export const ThemeToggle: VoidComponent = () => {
    const { isDark, setDark } = useAppState();

    return (
        <button type="button" onClick={() => setDark(!isDark())}>
            <Show when={isDark()}>
                <Sun />
            </Show>
            <Show when={!isDark()}>
                <Moon />
            </Show>
            <span class="text-xs sr-only">{}</span>
        </button>
    );
};

export default ThemeToggle;
