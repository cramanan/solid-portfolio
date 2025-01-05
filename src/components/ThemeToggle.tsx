import { Show, VoidComponent } from "solid-js";
import { useAppState } from "~/AppContext";

// TODO: Add title ans sr-only title
export const ThemeToggle: VoidComponent = () => {
    const { isDark, setDark } = useAppState();
    return (
        <button
            type="button"
            onClick={() => setDark(!isDark())}
            class="text-solid-medium dark:brightness-150 focus:color-red-500 bg-no-repeat bg-center hover:border-gray-500 cursor-pointer dark:border-gray-600 dark:hover:border-gray-500 px-3 ml-2 rounded-md h-10 border border-solid-100"
            // classList={{
            //     "hover:bg-gray-300 dark:hover:text-black focus:outline-none focus:highlight-none active:highlight-none focus:ring-0 active:outline-none":
            //         isDark(),
            // }}
        >
            {isDark() ? "Sun" : "Moon"}
            <span class="text-xs sr-only">{}</span>
        </button>
    );
};

export default ThemeToggle;
