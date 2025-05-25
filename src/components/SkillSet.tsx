import { useAppState } from "~/AppContext";
import { For } from "solid-js";
import Rust from "./icons/Rust";
import Golang from "./icons/Golang";
import React from "./icons/React";
import Solid from "./icons/Solid";
import TypeScript from "./icons/TypeScript";
import Wasm from "./icons/Wasm";

const icons = [
    {
        icons: [
            { title: "Rust", Icon: Rust },
            { title: "Golang", Icon: Golang },
            { title: "WebAssembly", Icon: Wasm },
        ],
    },
    {
        icons: [
            { title: "React", Icon: React },
            { title: "SolidJS", Icon: Solid },
            { title: "TypeScript", Icon: TypeScript },
        ],
    },
];

export default function Skillset() {
    const { translation } = useAppState();
    return (
        <section class="pt-20 lg:h-screen" id="skill-set">
            <h2 class="text-5xl font-bold text-center lg:text-start">
                <a href="/#skill-set">{translation.headers.skillSet()}</a>
            </h2>
            <ul class="flex flex-col items-center justify-center gap-6 my-7">
                <For each={icons}>
                    {(item) => (
                        <div>
                            <p>Lorem, ipsum dolor sit amet.</p>
                            <div class="flex gap-4">
                                <For each={item.icons}>
                                    {({ title, Icon }) => (
                                        <div>
                                            <Icon width={44} height={44} />
                                            <div>{title}</div>
                                        </div>
                                    )}
                                </For>
                            </div>
                        </div>
                    )}
                </For>
            </ul>
        </section>
    );
}
