import Skills from "~/components/Skills";
import Contact from "~/components/Contact";
import HeroBanner from "~/components/HeroBanner";
import Projects from "~/components/Projects";
import About from "~/components/About";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}
