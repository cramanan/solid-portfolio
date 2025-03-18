import Home from "lucide-solid/icons/home";
import Ghost from "lucide-solid/icons/ghost";
import { useAppState } from "~/AppContext";

export default function NotFound() {
    const { translation } = useAppState();
    return (
        <div class="flex flex-col items-center justify-center min-h-screen px-4">
            <Ghost class="w-24 h-24 mb-8" />
            <h1 class="text-2xl lg:text-4xl font-bold mb-4">
                404 - {translation.pageNotFound()}
            </h1>
            <a href="/">
                <div class="flex items-center gap-x-2">
                    <Home class="w-6 h-6" />
                    <span class="text-lg underline">
                        {translation.returnHome()}
                    </span>
                </div>
            </a>
        </div>
    );
}
