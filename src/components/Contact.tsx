import Mail from "lucide-solid/icons/mail";
import MapPin from "lucide-solid/icons/map-pin";
import { For } from "solid-js";
import LinkedIn from "./icons/LinkedIn";
import Instagram from "./icons/Instagram";
import { useAppState } from "~/AppContext";

const email = "contact@example.com";

const informations = [
    {
        href: `mailto:${email}`,
        label: email,
        Icon: MapPin,
    },
    {
        href: "https://www.google.com/maps/place/Rouen",
        label: "76000 ROUEN, FRANCE",
        Icon: Mail,
    },
];

const socials = [
    {
        href: "https://www.linkedin.com/in/cyrilram",
        Icon: LinkedIn,
    },
    {
        href: "https://www.instagram.com/0cyrilram",
        Icon: Instagram,
    },
];

export default function Contact() {
    const { t } = useAppState();
    return (
        <section id="contact" class="py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    Contact
                </h2>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/2 px-4">
                        <div class="rounded-lg shadow-md p-6">
                            <h3 class="text-lg font-semibold mb-2">
                                {t("Informations")}
                            </h3>
                            <div class="gap-y-2">
                                <For each={informations}>
                                    {(item) => (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            class="w-fit flex items-center underline font-semibold hover:text-blue-600"
                                        >
                                            <item.Icon class="mr-2" size={24} />
                                            {item.label}
                                        </a>
                                    )}
                                </For>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4">
                        <div class="rounded-lg shadow-md p-6">
                            <h3 class="text-lg font-semibold mb-2">
                                {t("Socials")}
                            </h3>
                            <div class="flex gap-x-2">
                                <For each={socials}>
                                    {(item) => (
                                        <a href={item.href} target="_blank">
                                            <item.Icon width={24} />
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
