import { useAppState } from "~/AppContext";
import Github from "./icons/Github";
import FileUser from "lucide-solid/icons/file-user";
import wavingHand from "../assets/waving-hand.png";

export default function HeroBanner() {
    const { t } = useAppState();
    return (
        <section class="px-4 lg:flex lg:h-screen lg:items-center lg:px-20">
            <div class="flex flex-col-reverse items-center lg:flex-row w-full lg:justify-between">
                <div class="text-center sm:text-left">
                    <div class="font-extrabold text-7xl">
                        <div class="flex items-center gap-4">
                            <h1>Cyril Ram.</h1>
                            <img src={wavingHand} alt="" width={60} />
                        </div>
                        <strong class="block font-extrabold">
                            {t("FullstackDev")}
                        </strong>
                    </div>
                    <div class="mt-3 flex gap-4 justify-center sm:justify-start">
                        <a
                            href="#"
                            target="_blank"
                            class="flex items-center gap-2 border-3 rounded-full px-4 py-2 font-semibold text-2xl"
                        >
                            <FileUser size={30} />
                            {t("Resume")}
                        </a>
                        <a href="https://github.com/cramanan" target="_blank">
                            <Github width={50} />
                        </a>
                    </div>
                </div>
                <img
                    src="picture.webp"
                    alt="Picture of Cyril Ram."
                    class="my-10 h-52 w-52 lg:h-[600px] lg:w-[600px]"
                />
            </div>
        </section>
    );
}
