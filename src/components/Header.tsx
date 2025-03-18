import { createSignal, For, Show } from "solid-js";
import LocaleSelect from "./LocaleSelect";
import ThemeToggle from "./ThemeToggle";
import { useAppState } from "~/AppContext";
import Menu from "lucide-solid/icons/menu";
import X from "lucide-solid/icons/x";
import Phone from "lucide-solid/icons/phone";

const navigation = [
    { name: "Home", href: "/#" },
    { name: "AboutMe", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
] as const;

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);
    const { t } = useAppState();
    return (
        <header class="fixed z-10 w-screen sm:saturate-100 sm:backdrop-blur-lg border-b [border-image:linear-gradient(90deg,#0000_30%,#c8c8c880_50%,#0000_70%)_700] select-none px-4 lg:px-20">
            <nav
                class="flex items-center lg:justify-between py-3"
                aria-label="Global"
            >
                <div class="flex lg:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span class="sr-only">Open main menu</span>
                        <Menu class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <nav class="hidden lg:flex lg:gap-x-12">
                    <For each={navigation}>
                        {(item) => (
                            <a
                                href={item.href}
                                class="relative group text-2xl leading-6"
                            >
                                {t(item.name)}
                                <span class="absolute bottom-0 left-0 w-full h-[0.1em] bg-black opacity-0 transition-opacity duration-300 transform group-hover:opacity-100"></span>
                            </a>
                        )}
                    </For>
                </nav>

                <div class="hidden items-center lg:flex lg:flex-1 lg:justify-end lg:gap-4">
                    <LocaleSelect />
                    <ThemeToggle />
                    <a
                        onClick={() => setMobileMenuOpen(false)}
                        class="flex items-center gap-2 rounded-lg p-1 outline-2 text-lg font-medium px-2 py-1"
                        href="/#contact"
                    >
                        <Phone class="h-6 w-6" width={24} />
                        {t("ContactMe")}
                    </a>
                </div>
            </nav>
            <Show when={mobileMenuOpen()}>
                <div
                    role="dialog"
                    aria-modal="true"
                    class="fixed inset-y-0 right-0 z-50 w-full p-3 backdrop-blur-sm sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                    <div class="flex items-center justify-between">
                        <a
                            href="/"
                            class="-m-1.5 p-1.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span class="sr-only">Cyril Ram.</span>
                            <span class="text-2xl font-bold">Cyril Ram.</span>
                        </a>
                        <button
                            type="button"
                            class="-m-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span class="sr-only">Close menu</span>
                            <X class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="py-6">
                                <For each={navigation}>
                                    {(item) => (
                                        <a
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            href={item.href}
                                            class="block rounded-lg px-3 py-2 text-base leading-7"
                                        >
                                            {t(item.name)}
                                        </a>
                                    )}
                                </For>
                            </div>
                            <div class="flex gap-3 py-6">
                                <LocaleSelect />
                                <ThemeToggle />
                                <a
                                    onClick={() => setMobileMenuOpen(false)}
                                    href="/#contact"
                                >
                                    {t("ContactMe")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Show>
        </header>
    );
}
