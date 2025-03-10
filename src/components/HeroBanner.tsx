import { useAppState } from "~/AppContext";
import Github from "./icons/Github";
import FileUser from "lucide-solid/icons/file-user";

export default function HeroBanner() {
    const { t } = useAppState();
    return (
        <section class="relative mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between">
                <div class="max-w-xl text-center sm:text-left">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Cyril Ram.
                        <strong class="block font-extrabold">
                            {t("FullstackDev")}
                        </strong>
                    </h1>
                    <div class="mt-3 flex gap-4 justify-center sm:justify-start">
                        <a
                            href="#"
                            target="_blank"
                            class="flex items-center gap-2 border-3 rounded-full px-4 py-2 font-semibold text-xl"
                        >
                            <FileUser />
                            {t("Resume")}
                        </a>
                        <a href="https://github.com/cramanan" target="_blank">
                            <Github width={44} />
                        </a>
                    </div>
                </div>
                <img
                    src="picture.webp"
                    alt="Picture of Cyril Ram."
                    class="my-10 h-52 w-52 rounded-full border backdrop-blur-2xl lg:h-96 lg:w-96"
                />
            </div>
        </section>
    );
}
