import { For } from "solid-js";
import Bullseye from "./icons/Bullseye";
import Gauge from "./icons/Gauge";
import { useAppState } from "~/AppContext";

export default function About() {
    const { translation } = useAppState();
    return (
        <section id="about" class="lg:h-screen py-20 px-4">
            <div class="mx-auto px-4">
                <h2 class="text-5xl font-bold text-center lg:text-start mb-8">
                    {translation.headers.about()}
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto dicta itaque modi magni. Nemo quaerat harum
                    tenetur quidem. Id ad hic et eligendi quisquam, quasi
                    deleniti repudiandae maiores modi perspiciatis!
                </p>
            </div>
        </section>
    );
}
