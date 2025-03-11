import Skills from "~/components/Skills";
import Contact from "~/components/Contact";
import HeroBanner from "~/components/HeroBanner";
import Projects from "~/components/Projects";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}
