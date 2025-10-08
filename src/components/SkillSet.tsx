import { useAppState } from "~/AppContext";
import { For } from "solid-js";
import Rust from "./icons/Rust";
import TypeScript from "./icons/TypeScript";
import Golang from "./icons/Golang";
import Python from "./icons/Python";
import JavaScript from "./icons/JavaScript";
import PHP from "./icons/PHP";
import PostgreSQL from "./icons/PostgreSQL";
import MySQL from "./icons/MySQL";
import Linux from "./icons/Linux";
import React from "./icons/React";
import Solid from "./icons/Solid";
import Laravel from "./icons/Laravel";
import Wasm from "./icons/Wasm";
import N8n from "./icons/N8n";
import Java from "./icons/Java";
import SpringBoot from "./icons/SpringBoot";
import Next from "./icons/Next";
import SQLite from "./icons/SQLite";
import Git from "./icons/Git";
import ReactRouter from "./icons/ReactRouter";
import TailwindCSS from "./icons/TailwindCSS";
import Shadcn from "./icons/Shadcn";
import { cn } from "~/lib/utills";

const marquees = [
  [
    { Icon: TypeScript, label: "TypeScript" },
    { Icon: JavaScript, label: "JavaScript" },
    { Icon: Wasm, label: "WebAssembly" },
    { Icon: Golang, label: "Golang" },
    { Icon: Rust, label: "Rust" },
    { Icon: Java, label: "Java" },
    { Icon: PHP, label: "PHP" },
    { Icon: Python, label: "Python" },
  ],
  [
    { Icon: React, label: "React" },
    { Icon: Solid, label: "SolidJS" },
    { Icon: Laravel, label: "Laravel" },
    { Icon: Next, label: "Next.js" },
    { Icon: TailwindCSS, label: "Tailwind CSS" },
    { Icon: Shadcn, label: "Shadcn" },
    { Icon: ReactRouter, label: "React Router" },
    { Icon: SpringBoot, label: "Spring Boot" },
  ],
  [
    { Icon: PostgreSQL, label: "PostgreSQL" },
    { Icon: MySQL, label: "MySQL" },
    { Icon: SQLite, label: "SQLite" },
    { Icon: Git, label: "Git" },
    { Icon: Linux, label: "Linux" },
    { Icon: N8n, label: "n8n" },
  ],
];

export default function Skillset() {
  const { translation } = useAppState();
  return (
    <section class="pt-20 h-screen" id="skill-set">
      <h2 class="text-5xl font-bold text-center lg:text-start">
        <a href="/#skill-set">{translation.headers.skillSet()}</a>
      </h2>
      <div class="mt-8 space-y-8">
        <For each={marquees}>
          {(marquee, index) => (
            <div
              class={cn(
                "marquee marquee__hover_pause",
                index() !== 1 && "marquee__reverse"
              )}
            >
              <div class="marquee__content">
                <For each={marquee}>
                  {(item) => (
                    <div class="flex flex-col items-center justify-center gap-2 px-4">
                      <item.Icon height={50} />
                      <h2 class="font-semibold">{item.label}</h2>
                    </div>
                  )}
                </For>
              </div>
              <div class="marquee__content" aria-hidden>
                <For each={marquee}>
                  {(item) => (
                    <div class="flex flex-col items-center justify-center gap-2 px-4">
                      <item.Icon height={50} />
                      <h2 class="font-semibold">{item.label}</h2>
                    </div>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
