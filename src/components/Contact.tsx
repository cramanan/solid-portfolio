import Mail from "lucide-solid/icons/mail";
import MapPin from "lucide-solid/icons/map-pin";

const email = "";

export default function Contact() {
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
                                    contact@example.com
                                </a>
                                {/* <a
                                    href={`tel:${tel}`}
                                    class="flex items-center hover:text-blue-500 hover:fill-blue-500"
                                >
                                    <Phone class="mr-2" size={20} />
                                    +1 (234) 567-890
                                </a> */}
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
                            <h4 class="text-lg font-semibold mb-2">Socials </h4>
                            <div class="flex space-x-4">
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-blue-500"
                                >
                                    <Mail size={24} />
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-blue-500"
                                >
                                    <Mail size={24} />
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-blue-500"
                                >
                                    <Mail size={24} />
                                </a>
                                <a
                                    href="#"
                                    class="text-gray-600 hover:text-blue-500"
                                >
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
