import { useAppState } from "~/AppContext";
import { For } from "solid-js";
import Rust from "./icons/Rust";
import Golang from "./icons/Golang";
import React from "./icons/React";
import Solid from "./icons/Solid";
import TypeScript from "./icons/TypeScript";
import Tauri from "./icons/Tauri";
import Bullseye from "./icons/Bullseye";

function Window() {
    return (
        <div class="h-full rounded-2xl border-1 overflow-hidden">
            <div class="pt-5 border-b-2"></div>
        </div>
    );
}

const icons = [
    {
        icons: [
            { title: "Rust", Icon: Rust },
            { title: "Golang", Icon: Golang },
        ],
    },
    {
        Component: Window,
        icons: [
            { title: "React", Icon: React },
            { title: "Solid", Icon: Solid },
            { title: "TypeScript", Icon: TypeScript },
        ],
    },
    { icons: [{ title: "Tauri", Icon: Tauri }] },
];

const cards = [{ label: "Precision", Icon: Bullseye }];

export default function Skills() {
    const { t } = useAppState();
    return (
        <section class="lg:h-screen py-14" id="skills">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    {t("Skills")}
                </h2>
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <For each={icons}>
                        {(item) => (
                            <li class="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-4">
                                <div class="h-40 p-3">
                                    {item.Component && <item.Component />}
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Alias iste voluptates
                                    ducimus.
                                </p>
                                <div class="flex gap-2 mt-2.5">
                                    <For each={item.icons}>
                                        {({ title, Icon }) => (
                                            <div class="flex flex-col items-center justify-center">
                                                <Icon width={44} height={44} />
                                                <div>{title}</div>
                                            </div>
                                        )}
                                    </For>
                                </div>
                            </li>
                        )}
                    </For>
                </ul>
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <For each={cards}>
                        {(item) => (
                            <li class="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-4">
                                <item.Icon width={50} />
                                <h1>{item.label}</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Suscipit animi repudiandae
                                    voluptate fuga.
                                </p>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </section>
    );
}
