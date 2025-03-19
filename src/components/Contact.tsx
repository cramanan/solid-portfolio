import Mail from "lucide-solid/icons/mail";
import MapPin from "lucide-solid/icons/map-pin";
import { For } from "solid-js";
import LinkedIn from "./icons/LinkedIn";
import Instagram from "./icons/Instagram";
import { useAppState } from "~/AppContext";

const email = "cramananjaonapro@gmail.com";

const informations = [
    {
        href: `mailto:${email}`,
        label: email,
        Icon: Mail,
    },
    {
        href: "https://www.google.com/maps/place/Rouen",
        label: "76000 ROUEN, FRANCE",
        Icon: MapPin,
    },
];

const socials = [
    {
        href: "https://www.linkedin.com/in/cyrilram",
        label: "LinkedIn",
        Icon: LinkedIn,
    },
    {
        href: "https://www.instagram.com/0cyrilram",
        label: "Instagram",
        Icon: Instagram,
    },
];

export default function Contact() {
    const { translation } = useAppState();
    return (
        <section id="contact" class="px-4 py-20">
            <div class="mx-auto px-4">
                <h2 class="text-5xl font-bold text-center lg:text-start mb-8">
                    {translation.headers.contact()}
                </h2>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full h-full md:w-1/2 px-4">
                        <div class="rounded-lg shadow-md p-6">
                            <h3 class="text-xl lg:text-2xl text-center lg:text-start font-semibold mb-2">
                                {translation.informations()}
                            </h3>
                            <div class="gap-y-2">
                                <For each={informations}>
                                    {(item) => (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            class="w-fit flex items-center hover:text-blue-600 text-xl "
                                        >
                                            <item.Icon class="mr-2" size={24} />
                                            {item.label}
                                        </a>
                                    )}
                                </For>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-full md:w-1/2 px-4">
                        <div class="rounded-lg shadow-md p-6">
                            <h3 class="text-xl lg:text-2xl font-semibold mb-2">
                                {translation.socials()}
                            </h3>
                            <div class="flex flex-col gap-2">
                                <For each={socials}>
                                    {(item) => (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            class="flex gap-1"
                                        >
                                            <item.Icon width={24} />
                                            <span class="text-xl">
                                                {item.label}
                                            </span>
                                        </a>
                                    )}
                                </For>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
