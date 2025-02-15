import { For } from "solid-js";
import { useAppState } from "~/AppContext";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";

const links = [
    {
        href: "https://github.com/cramanan",
        Icon: Github,
    },
    {
        href: "https://linkedin.com/in/cyrilram",
        Icon: LinkedIn,
    },
];

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
                        <For each={links}>
                            {(item) => (
                                <a href={item.href} target="_blank">
                                    <item.Icon
                                        width={44}
                                        class="fill-foreground"
                                    />
                                </a>
                            )}
                        </For>
                    </div>
                </div>
                <img
                    src="picture.webp"
                    alt="Picture of Cyril Ram."
                    class="my-10 h-52 w-52 rounded-full border lg:h-96 lg:w-96"
                />
            </div>
        </section>
    );
}
