import { useAppState } from "~/AppContext";
import { For } from "solid-js";
import Rust from "./icons/Rust";
import Golang from "./icons/Golang";
import React from "./icons/React";
import Solid from "./icons/Solid";
import TypeScript from "./icons/TypeScript";
import Tauri from "./icons/Tauri";
import Wasm from "./icons/Wasm";

function Bar() {
    return <>Bar</>;
}

function Tabs() {
    return (
        <div class="w-full h-full flex items-center justify-center">
            <div class="rounded-[6px] border-[1.5px] w-[200px] h-full">
                <div class="flex border-b-1 h-3 items-center gap-1 px-1">
                    <span class="h-1.5 w-1.5 border-1 rounded-full bg-green-400"></span>
                    <span class="h-1.5 w-1.5 border-1 rounded-full bg-red-400"></span>
                    <span class="h-1.5 w-1.5 border-1 rounded-full bg-yellow-400"></span>
                </div>
                <div class="p-1 relative"></div>
            </div>
            {/* <div class="rounded-[6px] border-[1.5px] w-[50px] h-[80px]">
                <div class="p-1 relative"></div>
            </div> */}
        </div>
    );
}

function Baz() {
    return <>Baz</>;
}

const icons = [
    {
        Component: Tabs,
        icons: [
            { title: "React", Icon: React },
            { title: "SolidJS", Icon: Solid },
            { title: "TypeScript", Icon: TypeScript },
        ],
    },
    {
        Component: Bar,
        icons: [
            { title: "Rust", Icon: Rust },
            { title: "Golang", Icon: Golang },
            { title: "WebAssembly", Icon: Wasm },
        ],
    },
    {
        Component: Baz,
        icons: [{ title: "Tauri", Icon: Tauri }],
    },
];

export default function Skills() {
    const { translation } = useAppState();
    return (
        <section class="lg:h-screen py-20" id="skills">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    {translation.headers.skills()}
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
            </div>
        </section>
    );
}
