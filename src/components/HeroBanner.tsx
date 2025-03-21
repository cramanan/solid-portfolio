import { useAppState } from "~/AppContext";
import Github from "./icons/Github";
import FileUser from "lucide-solid/icons/file-user";
import wavingHand from "../assets/images/waving-hand.png";

export default function HeroBanner() {
    const { translation } = useAppState();
    return (
        <section class="px-4 py-11 lg:flex lg:h-screen lg:items-center h-screen lg:px-20">
            <div class="flex flex-col-reverse justify-center items-center lg:flex-row w-full lg:justify-between h-full">
                <div class="text-center sm:text-left">
                    <div class="text-3xl lg:text-7xl font-bold">
                        <div class="flex items-center justify-center lg:justify-start gap-2">
                            <h1>Cyril Ram.</h1>
                            <img
                                src={wavingHand}
                                alt="A waving hand"
                                width={64}
                                height={64}
                                class="w-10 h-10 lg:h-16 lg:w-16 lg:hover:animate-wave select-none"
                            />
                        </div>
                        <h2>{translation.fullstackDev()}</h2>
                    </div>
                    <div class="mt-3 flex gap-4 justify-center lg:justify-start">
                        <a
                            href="/assets/cv-cyril-ram.pdf"
                            target="_blank"
                            class="flex items-center gap-2 border-3 rounded-full px-2 lg:px-4 lg:py-1 lg:text-2xl"
                        >
                            <FileUser size={30} />
                            {translation.resume()}
                        </a>
                        <a href="https://github.com/cramanan" target="_blank">
                            <Github width={50} />
                        </a>
                    </div>
                </div>
                <img
                    src="/assets/images/picture.webp"
                    alt="Picture of Cyril Ram."
                    fetchpriority="high"
                    class="mb-4 h-52 w-52 sm:h-64 sm:w-64 lg:h-[500px] lg:w-[500px] border rounded-full"
                />
            </div>
        </section>
    );
}
