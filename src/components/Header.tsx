import { createSignal, For } from "solid-js";
import LocaleSelect from "./LocaleSelect";
import ThemeToggle from "./ThemeToggle";
import { useAppState } from "~/AppContext";
import Menu from "lucide-solid/icons/menu";
import X from "lucide-solid/icons/menu";

const navigation = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
] as const;

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);
    const { t } = useAppState();
    return (
        <header class="fixed w-screen z-10 font-asap">
            <nav
                class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div class="flex lg:flex-1">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Cyril Ram.</span>
                        <span class="text-2xl font-bold">Cyril Ram.</span>
                    </a>
                </div>
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
                <nav class="hidden lg:flex lg:gap-x-24 italic">
                    <For each={navigation}>
                        {(item) => (
                            <a href={item.href} class="text-xl leading-6 ">
                                {t(item.name)}
                            </a>
                        )}
                    </For>
                </nav>

                <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3 items-center">
                    <LocaleSelect />
                    <ThemeToggle />
                    <a
                        onClick={() => setMobileMenuOpen(false)}
                        class="outline outline-2 p-1 rounded-lg"
                        href="/#contact"
                    >
                        {t("ContactMe")}
                    </a>
                </div>
            </nav>
            {/* Mobile menu, show/hide based on menu open state. */}
            <div
                class={`lg:hidden ${mobileMenuOpen() ? "" : "hidden"}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div class="fixed inset-0 z-50"></div>
                <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                            <div class="space-y-2 py-6">
                                <For each={navigation}>
                                    {(item) => (
                                        <a
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            href={item.href}
                                            class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7"
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
            </div>
        </header>
    );
}
