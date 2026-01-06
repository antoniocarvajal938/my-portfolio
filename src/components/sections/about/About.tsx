import IntroSection from "./IntroSection";
import SkillsSection from "./SkillsSection";
import BeyondTheCode from "./BeyondTheCode";

export default function About() {
  return (
    <section
      id="about"
      className="bg-transparent text-white py-24 px-6 md:px-16 relative z-0 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <IntroSection />
        <SkillsSection />
        <BeyondTheCode />
      </div>
    </section>
  );
}