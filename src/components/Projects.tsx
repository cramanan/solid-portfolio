import { For } from "solid-js";
import { useAppState } from "~/AppContext";

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
        <section class="py-12 bg-gray-50 dark:bg-gray-900" id="projects">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-8 dark:text-white">
                    {t("Projects")}
                </h2>
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <For each={projects}>
                        {(project) => (
                            <li class="overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
                                <h2>{project.title}</h2>
                                <p class="text-sm text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>
                                <div class="flex justify-between py-4">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                                    >
                                        <svg
                                            role="img"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="fill-black dark:fill-white"
                                        >
                                            <title>GitHub</title>
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                        Source Code
                                    </a>
                                </div>
                            </li>
                        )}
                    </For>
                    {/* {projects.map((project) => (
                        <Card
                            key={project.id}
                        >
                            <CardHeader class="p-0">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    class="w-full h-48 object-cover"
                                />
                            </CardHeader>
                            <CardContent class="p-4">
                                <CardTitle class="mb-2">
                                    {project.title}
                                </CardTitle>
                                <p>
                                    {project.description}
                                </p>
                            </CardContent>
                            <CardFooter class="flex justify-between p-4">
                                <Button variant="outline" size="sm" asChild>
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink class="mr-2 h-4 w-4" />
                                        View Project
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github  />
                                        Source Code
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))} */}
                </ul>
            </div>
        </section>
    );
}
