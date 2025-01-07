import Home from "lucide-solid/icons/home";
import Ghost from "lucide-solid/icons/ghost";
import { useAppState } from "~/AppContext";

export default function NotFound() {
    const { t } = useAppState();
    return (
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
            <Ghost class="w-24 h-24 text-gray-400 dark:text-gray-600 mb-8" />
            <h1 class="text-2xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 ">
                404 - {t("PageNotFound")}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center">
                Oops! It seems like you've ventured into uncharted territory.
            </p>
            <a href="/">
                <div class="flex items-center space-x-2">
                    <Home class="w-4 h-4" />
                    <span>{t("ReturnHome")}</span>
                </div>
            </a>
        </div>
    );
}
