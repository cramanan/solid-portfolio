import { useAppState } from "~/AppContext";
import { For } from "solid-js";
import Rust from "./icons/Rust";
import Golang from "./icons/Golang";
import React from "./icons/React";
import Solid from "./icons/Solid";
import TypeScript from "./icons/TypeScript";
import Tauri from "./icons/Tauri";
import Bullseye from "./icons/Bullseye";
import Gauge from "./icons/Gauge";

function Tabs() {
    return (
        <div class="w-full h-full relative">
            <div class="absolute rounded-sm border-[1.5px] w-[209px] h-full">
                <div class="flex border-b-1 h-3 items-center justify-end gap-1 px-1">
                    <span class="h-2 w-2 border-1 rounded-full bg-green-400"></span>
                    <span class="h-2 w-2 border-1 rounded-full bg-yellow-400"></span>
                    <span class="h-2 w-2 border-1 rounded-full bg-red-400"></span>
                </div>
                <div class="p-1">
                    <div class="border w-10 h-10 mx-1.5"></div>
                </div>
            </div>
        </div>
    );
}

const icons = [
    {
        Component: Tabs,
        icons: [
            { title: "Rust", Icon: Rust },
            { title: "Golang", Icon: Golang },
        ],
    },
    {
        Component: Tabs,
        icons: [
            { title: "React", Icon: React },
            { title: "Solid", Icon: Solid },
            { title: "TypeScript", Icon: TypeScript },
        ],
    },
    { Component: Tabs, icons: [{ title: "Tauri", Icon: Tauri }] },
];

const cards = [
    { Icon: Bullseye, label: "Precision" },
    { Icon: Gauge, label: "Efficiency" },
] as const;

export default function Skills() {
    const { t } = useAppState();
    return (
        <section class="lg:h-screen py-14" id="skills">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    {t("Skills")}
                </h2>
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
                    <For each={icons}>
                        {(item) => (
                            <li class="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-4">
                                <div class="h-40 p-3">
                                    <item.Component />
                                </div>
                                <h2 class="text-2xl font-semibold">Title</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Alias iste voluptates
                                    ducimus.
                                </p>
                                <div class="flex items-center justify-evenly mt-4">
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
                <ul class="flex flex-col lg:flex-row lg:justify-evenly py-5">
                    <For each={cards}>
                        {(item) => (
                            <li class="lg:w-1/3">
                                <div class="flex items-center gap-2 justify-center m-1.5">
                                    <item.Icon width={50} />
                                    <h1 class="text-3xl font-semibold">
                                        {t(item.label)}
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
