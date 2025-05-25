import { For } from "solid-js";
import { useAppState } from "~/AppContext";

export default function About() {
    const { translation } = useAppState();
    return (
        <section id="about" class="flex flex-col pt-20 lg:h-screen">
            <h2 class="text-5xl font-bold text-center lg:text-start">
                <a href="/#about">{translation.headers.about()}</a>
            </h2>
            <div class="flex flex-col items-center">
                <img
                    alt=""
                    src="/assets/images/presentation-800x800.webp"
                    class="w-52 m-6"
                />
                <p class="px-10">{translation.about.paragraph()}</p>
            </div>
        </section>
    );
}
