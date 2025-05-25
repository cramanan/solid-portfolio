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
        <section id="contact" class="lg:h-screen lg:p-20">
            <h2 class="text-5xl font-bold text-center lg:text-start mb-8">
                <a href="/#contact">{translation.headers.contact()}</a>
            </h2>
            <div>
                <div>
                    <div>
                        <h3>{translation.informations()}</h3>
                        <div>
                            <For each={informations}>
                                {(item) => (
                                    <a href={item.href} target="_blank">
                                        <item.Icon size={24} />
                                        {item.label}
                                    </a>
                                )}
                            </For>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>{translation.socials()}</h3>
                        <div>
                            <For each={socials}>
                                {(item) => (
                                    <a href={item.href} target="_blank">
                                        <item.Icon width={24} />
                                        <span>{item.label}</span>
                                    </a>
                                )}
                            </For>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
