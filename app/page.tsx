"use client";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ResearchFocus from "../components/ResearchFocus";
import CurrentResearch from "../components/CurrentResearch";
import Research from "../components/Research";
import Expertise from "../components/Expertise";
import Teaching from "../components/Teaching";
import ResearchVision from "../components/ResearchVision";
import Conferences from "../components/Conferences";
import DataVisualization from "../components/DataVisualization";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ExperienceModal from "../components/ExperienceModal";

export default function Home() {
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navigation onExperienceClick={() => setIsExperienceModalOpen(true)} />
      <Hero />
      <ResearchFocus />
      <CurrentResearch />
      <Research />
      <Expertise />
      <Teaching />
      <ResearchVision />
      <Conferences />
      <Footer />
      <ExperienceModal
        isOpen={isExperienceModalOpen}
        onClose={() => setIsExperienceModalOpen(false)}
      />
    </main>
  );
}
