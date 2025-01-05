import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
    return (
        <nav>
            <LocaleSwitcher />
            <ThemeToggle />
        </nav>
    );
}
