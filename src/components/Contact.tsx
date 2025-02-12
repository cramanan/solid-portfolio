import Mail from "lucide-solid/icons/mail";
import MapPin from "lucide-solid/icons/map-pin";
import { For } from "solid-js";
import LinkedIn from "./icons/LinkedIn";
import Instagram from "./icons/Instagram";
import { useAppState } from "~/AppContext";

const email = "contact@example.com";
const socials = [
    {
        href: "#",
        Icon: LinkedIn,
    },
    {
        href: "#",
        Icon: Instagram,
    },
];

export default function Contact() {
    const { t } = useAppState();
    return (
        <section id="contact" class="py-16">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-8">Contact</h2>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full md:w-1/2 px-4">
                        <div class="rounded-lg shadow-md p-6">
                            <div class="space-y-4">
                                <a
                                    href={`mailto:${email}`}
                                    class="flex items-center hover:text-blue-500 hover:fill-blue-500"
                                >
                                    <Mail class="mr-2" size={20} />
                                    {email}
                                </a>
                                <a
                                    href="https://www.google.com/maps/place/Rouen"
                                    target="_blank"
                                    class="flex items-center hover:text-blue-500 hover:fill-blue-500"
                                >
                                    <MapPin class="mr-2" size={20} />
                                    76000 ROUEN, FRANCE
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4">
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h4 class="text-lg font-semibold mb-2">
                                {t("Socials")}
                            </h4>
                            <div class="flex space-x-4">
                                <For each={socials}>
                                    {(item) => (
                                        <a
                                            href={item.href}
                                            class="text-gray-600 hover:text-blue-500 hover:fill-blue-500"
                                        >
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
