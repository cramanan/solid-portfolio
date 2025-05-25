import HeroBanner from "~/components/HeroBanner";
import SkillSet from "~/components/SkillSet";
import Contact from "~/components/Contact";
import Projects from "~/components/Projects";
import About from "~/components/About";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <About />
            <SkillSet />
            <Projects />
            <Contact />
        </>
    );
}
