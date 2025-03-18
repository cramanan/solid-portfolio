import { For } from "solid-js";
import Bullseye from "./icons/Bullseye";
import Gauge from "./icons/Gauge";
import { useAppState } from "~/AppContext";

const cards = [
    { Icon: Bullseye, label: "precision" },
    { Icon: Gauge, label: "efficiency" },
] as const;

export default function About() {
    const { translation } = useAppState();
    return (
        <section id="about" class="py-20 px-4 lg:h-screen">
            <div class="mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    {translation.headers.about()}
                </h2>
                <ul class="flex flex-col lg:flex-row lg:justify-evenly py-5">
                    <For each={cards}>
                        {(item) => (
                            <li class="lg:w-1/3">
                                <div class="flex items-center gap-2 justify-center m-1.5">
                                    <item.Icon width={50} />
                                    <h1 class="text-3xl font-semibold">
                                        {translation.skills[item.label].title()}
                                    </h1>
                                </div>
                                <p>
                                    {translation.skills[
                                        item.label
                                    ].description()}
                                </p>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </section>
    );
}
