"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Microscope,
  Atom,
  Dna,
  Terminal,
  FlaskConical,
  Sprout,
} from "lucide-react";
import Highlight from "./Highlight";

const expertiseAreas: {
  icon: React.ReactNode;
  accent: string;
  title: string;
  description: React.ReactNode;
}[] = [
  {
    icon: <Microscope className="w-6 h-6 text-emerald-600" />,
    accent: "bg-emerald-100",
    title: "Soil Microbial Ecology",
    description:
      "Microbial community structure, microbial activity, soil biological processes, and interactions between microorganisms and agricultural management.",
  },
  {
    icon: <Atom className="w-6 h-6 text-blue-600" />,
    accent: "bg-blue-100",
    title: "Nitrogen Cycling & Soil Biogeochemistry",
    description:
      "Microbial nitrogen transformations, carbon and nitrogen cycling, nutrient availability, labile carbon and nitrogen pools, and extracellular enzyme activity.",
  },
  {
    icon: <Dna className="w-6 h-6 text-purple-600" />,
    accent: "bg-purple-100",
    title: "Molecular Approaches",
    description:
      "DNA extraction, qPCR, amplicon sequencing, and functional-gene approaches for investigating microbial communities and nutrient-cycling processes.",
  },
  {
    icon: <Terminal className="w-6 h-6 text-slate-600" />,
    accent: "bg-slate-100",
    title: "Bioinformatics & Data Analysis",
    description: (
      <>
        Developing expertise in microbial sequence analysis, computational
        biology,{" "}
        <Highlight>
          R, Python, QIIME2, and reproducible data-analysis workflows
        </Highlight>
        .
      </>
    ),
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-amber-600" />,
    accent: "bg-amber-100",
    title: "Soil Health Assessment",
    description: (
      <>
        Experience with biological and biochemical soil health indicators
        including{" "}
        <Highlight>
          POXC, mineralizable carbon, PMN, soil enzymes, ACE soil protein, PLFA,
          soil organic carbon, and total nitrogen
        </Highlight>
        .
      </>
    ),
  },
  {
    icon: <Sprout className="w-6 h-6 text-green-600" />,
    accent: "bg-green-100",
    title: "Sustainable Agriculture",
    description:
      "Research involving cover crops, organic agriculture, conservation practices, soil management, and agricultural resilience.",
  },
];

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Research Expertise &amp; Developing Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 ${area.accent} rounded-full flex items-center justify-center mb-4`}
                >
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
