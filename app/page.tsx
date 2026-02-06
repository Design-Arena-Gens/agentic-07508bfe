import HeroSection from "./sections/HeroSection";
import QuestionWorkshop from "./sections/QuestionWorkshop";
import ScenarioGrid from "./sections/ScenarioGrid";
import ToolkitSection from "./sections/ToolkitSection";
import FAQSection from "./sections/FAQSection";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <HeroSection />
      <QuestionWorkshop />
      <ScenarioGrid />
      <ToolkitSection />
      <FAQSection />
    </main>
  );
}
