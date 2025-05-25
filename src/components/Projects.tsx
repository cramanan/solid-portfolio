import { For } from "solid-js";
import { useAppState } from "~/AppContext";
import Github from "./icons/Github";
import Golang from "./icons/Golang";
import React from "./icons/React";
import JavaScript from "./icons/JavaScript";
import SQLite from "./icons/SQLite";

const projects = [
    {
        title: "Social-Network-01",
        techs: [Golang, React, SQLite],
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, repudiandae aspernatur possimus unde ab aliquam consectetur sed excepturi doloremque ipsum ratione similique fugiat?",
        projectUrl: "https://github.com/cramanan/Social-Network-01",
    },
    {
        title: "My-Own-React",
        techs: [JavaScript],
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, repudiandae aspernatur possimus unde ab aliquam consectetur sed excepturi doloremque ipsum ratione similique fugiat?",
        projectUrl: "https://github.com/cramanan/my-own-react",
    },
    {
        title: "Go-Types",
        techs: [Golang],
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, repudiandae aspernatur possimus unde ab aliquam consectetur sed excepturi doloremque ipsum ratione similique fugiat?",
        projectUrl: "https://github.com/cramanan/go-types",
    },
];

export default function Projects() {
    const { translation } = useAppState();
    return (
        <section class="pt-20 lg:h-screen" id="projects">
            <h2 class="text-5xl font-bold text-center lg:text-start mb-8">
                <a href="/#projects">{translation.headers.projects()}</a>
            </h2>
            <ul>
                <For each={projects}>
                    {(project) => (
                        <li>
                            <div>
                                <h2>{project.title}</h2>
                                <div>
                                    <For each={project.techs}>
                                        {(Component) => (
                                            <Component class="w-7" width={40} />
                                        )}
                                    </For>
                                </div>
                            </div>
                            <p>{project.description}</p>
                            <div>
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github width={20} />
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </li>
                    )}
                </For>
            </ul>
        </section>
    );
}
