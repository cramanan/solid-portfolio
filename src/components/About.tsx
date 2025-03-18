import { For } from "solid-js";
import Bullseye from "./icons/Bullseye";
import Gauge from "./icons/Gauge";
import { useAppState } from "~/AppContext";

const cards = [
    { Icon: Bullseye, label: "precise" },
    { Icon: Gauge, label: "efficient" },
] as const;

export default function About() {
    const { translation } = useAppState();
    return (
        <section id="about" class="py-20 px-4 lg:h-screen">
            <div class="mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    {translation.headers.about()}
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Tenetur tempore ea quis suscipit repudiandae sed molestias
                    repellendus consequatur veniam commodi ipsum, ratione
                    consectetur beatae tempora. Architecto reprehenderit dolores
                    consectetur quas!
                </p>
                <ul class="flex flex-col lg:flex-row lg:justify-evenly py-5">
                    <For each={cards}>
                        {(item) => (
                            <li class="lg:w-1/3">
                                <div class="flex items-center gap-2 justify-center m-1.5">
                                    <item.Icon width={50} />
                                    <h1 class="text-3xl font-semibold">
                                        {translation[item.label]()}
                                    </h1>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Eos eum illum illo magnam
                                    in aspernatur animi, earum itaque
                                    repudiandae ducimus ullam saepe iure ut
                                    laborum adipisci quidem at maiores ex?
                                </p>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </section>
    );
}
