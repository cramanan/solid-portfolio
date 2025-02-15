import { For } from "solid-js";
import Rust from "./icons/Rust";
import React from "./icons/React";
import Solid from "./icons/Solid";
import Golang from "./icons/Golang";
import { useAppState } from "~/AppContext";

const icons = [{ icons: [Rust, Golang] }, { icons: [React, Solid] }];

export default function Skills() {
    const { t } = useAppState();
    return (
        <section class="lg:h-screen py-14" id="skills">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    {t("Skills")}
                </h2>
                <For each={icons}>
                    {(item) => (
                        <For each={item.icons}>
                            {(Icon) => <Icon width={44} />}
                        </For>
                    )}
                </For>
            </div>
        </section>
    );
}
