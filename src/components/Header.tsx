import { createSignal, For, Show } from "solid-js";
import LocaleSelect from "./LocaleSelect";
import ThemeToggle from "./ThemeToggle";
import { useAppState } from "~/AppContext";
import Menu from "lucide-solid/icons/menu";
import X from "lucide-solid/icons/x";
import Phone from "lucide-solid/icons/phone";

const navigation = [
    { key: "home", href: "/#" },
    { key: "about", href: "/#about" },
    { key: "skills", href: "/#skills" },
    { key: "projects", href: "/#projects" },
] as const;

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);
    const closeMenu = () => setMobileMenuOpen(false);
    const { translation } = useAppState();
    return (
        <header class="fixed z-10 w-screen sm:saturate-100 sm:backdrop-blur-lg border-b [border-image:linear-gradient(90deg,#0000_30%,#c8c8c880_50%,#0000_70%)_700] select-none px-4 lg:px-20">
            <nav
                class="flex items-center lg:justify-between py-3"
                aria-label="Global"
            >
                <div class="flex w-full justify-end lg:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-30"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        <span class="sr-only">Open main menu</span>
                        <Show
                            when={!mobileMenuOpen()}
                            fallback={<X class="h-6 w-6" size={24} />}
                        >
                            <Menu class="h-6 w-6" size={24} />
                        </Show>
                    </button>
                </div>
                <nav class="hidden lg:flex lg:gap-x-12">
                    <For each={navigation}>
                        {(item) => (
                            <a
                                href={item.href}
                                class="relative group text-2xl leading-6"
                            >
                                {translation.headers[item.key]()}
                                <span class="absolute bottom-0 left-0 w-full h-[0.1em] bg-black opacity-0 transition-opacity duration-300 transform group-hover:opacity-100"></span>
                            </a>
                        )}
                    </For>
                </nav>

                <div class="hidden items-center lg:flex lg:flex-1 lg:justify-end lg:gap-4">
                    <LocaleSelect />
                    <ThemeToggle />
                    <a
                        class="flex items-center gap-2 rounded-lg p-1 outline-2 text-lg font-medium px-2 py-1"
                        href="/#contact"
                    >
                        <Phone class="h-6 w-6" width={24} />
                        {translation.headers.contact()}
                    </a>
                </div>
            </nav>
            <Show when={mobileMenuOpen()}>
                <div
                    role="dialog"
                    aria-modal="true"
                    class="fixed inset-y-0 right-0 z-20 w-full p-3 backdrop-blur-sm sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                    <a href="/" class="-m-1.5 p-1.5" onClick={closeMenu}>
                        <span class="text-2xl font-bold">Cyril Ram.</span>
                    </a>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="py-6">
                                <For each={navigation}>
                                    {(item) => (
                                        <a
                                            onClick={closeMenu}
                                            href={item.href}
                                            class="block rounded-lg px-3 py-2 text-2xl leading-7 "
                                        >
                                            {translation.headers[item.key]()}
                                        </a>
                                    )}
                                </For>
                            </div>
                            <div class="flex gap-3 py-6">
                                <LocaleSelect />
                                <ThemeToggle />
                                <a
                                    class="flex items-center gap-2 rounded-lg p-1 outline-2 text-lg font-medium px-2 py-1"
                                    href="/#contact"
                                >
                                    <Phone class="h-6 w-6" width={24} />
                                    {translation.headers.contact()}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Show>
        </header>
    );
}
