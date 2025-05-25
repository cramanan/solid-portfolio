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
    { key: "skillSet", href: "/#skill-set" },
    { key: "projects", href: "/#projects" },
] as const;

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);
    const closeMenu = () => setMobileMenuOpen(false);
    const { translation } = useAppState();
    return (
        <header class="fixed z-10 w-screen saturate-100 backdrop-blur-lg border-b [border-image:linear-gradient(90deg,#0000_30%,#c8c8c880_50%,#0000_70%)_700] select-none px-4 lg:px-20">
            <nav
                class="flex items-center justify-end lg:justify-between py-3"
                aria-label="Global"
            >
                <nav class="hidden lg:flex lg:gap-x-12">
                    <For each={navigation}>
                        {(item) => (
                            <a
                                href={item.href}
                                class="group text-2xl leading-6"
                            >
                                {translation.headers[item.key]()}
                            </a>
                        )}
                    </For>
                </nav>
                <div class="items-center flex justify-end gap-4 z-30">
                    <LocaleSelect />
                    <ThemeToggle />
                    <a
                        class="hidden lg:flex items-center gap-2 rounded-lg p-1 outline-2 text-lg font-medium px-2 py-1"
                        href="/#contact"
                    >
                        <Phone class="h-6 w-6" width={24} />
                        {translation.headers.contact()}
                    </a>
                    <button
                        type="button"
                        class="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
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
            </nav>
            <Show when={mobileMenuOpen()}>
                <div
                    role="dialog"
                    aria-modal="true"
                    class="fixed inset-y-0 right-0 z-20 w-full h-screen p-3 saturate-100 backdrop-blur-sm lg:hidden"
                >
                    <a href="/" class="-m-1.5 p-1.5" onClick={closeMenu}>
                        <span class="text-2xl font-bold">Cyril Ram.</span>
                    </a>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="flex flex-col gap-2 pt-2">
                                <For each={navigation}>
                                    {(item) => (
                                        <a
                                            onClick={closeMenu}
                                            href={item.href}
                                            class="text-2xl"
                                        >
                                            {translation.headers[item.key]()}
                                        </a>
                                    )}
                                </For>
                                <a
                                    onClick={closeMenu}
                                    href="/#contact"
                                    class="text-2xl"
                                >
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
