import IntroSection from "./about/IntroSection";
import SkillsSection from "./about/SkillsSection";
import BeyondTheCode from "./about/BeyondTheCode";

export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent text-white py-24 px-6 md:px-16 relative z-0"
    >
      <div className="max-w-7xl mx-auto">
        <IntroSection />
        <SkillsSection />
        <BeyondTheCode />
      </div>
    </section>
  );
}