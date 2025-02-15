import { For } from "solid-js";
import { useAppState } from "~/AppContext";
import Github from "./icons/Github";

type Project = {
    title: string;
    description: string;
    projectUrl: string;
};

const projects: Project[] = [
    {
        title: "Social-Network",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, repudiandae aspernatur possimus unde ab aliquam consectetur sed excepturi doloremque ipsum ratione similique fugiat?",
        projectUrl: "https://github.com/cramanan/Social-Network-01",
    },
    {
        title: "My-Own-React",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, repudiandae aspernatur possimus unde ab aliquam consectetur sed excepturi doloremque ipsum ratione similique fugiat?",
        projectUrl: "https://github.com/cramanan/my-own-react",
    },
    {
        title: "Go-Types",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, repudiandae aspernatur possimus unde ab aliquam consectetur sed excepturi doloremque ipsum ratione similique fugiat?",
        projectUrl: "https://github.com/cramanan/go-types",
    },
];

export default function Projects() {
    const { t } = useAppState();
    return (
        <section class="lg:h-screen py-14" id="projects">
            <div class="container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center lg:text-start mb-8">
                    {t("Projects")}
                </h2>
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <For each={projects}>
                        {(project) => (
                            <li class="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-4">
                                <h2 class="text-lg font-semibold">
                                    {project.title}
                                </h2>
                                <p class="text-sm">{project.description}</p>
                                <div class="flex justify-between py-4">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-9 rounded-md px-3"
                                    >
                                        <Github width={20} />
                                        <span>Source Code</span>
                                    </a>
                                </div>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </section>
    );
}
