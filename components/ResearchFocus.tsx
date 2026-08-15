"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Microscope,
  Atom,
  Sprout,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import Highlight from "./Highlight";

const focusAreas = [
  {
    icon: <Microscope className="w-7 h-7 text-emerald-600" />,
    title: "Soil Microbial Ecology",
    description:
      "Understanding the structure, function, and responses of soil microbial communities to agricultural management and environmental change.",
    accent: "bg-emerald-100",
  },
  {
    icon: <Atom className="w-7 h-7 text-blue-600" />,
    title: "Nitrogen & Carbon Cycling",
    description:
      "Investigating microbial processes involved in nutrient transformations and their connections to soil fertility, nutrient availability, and greenhouse gas emissions.",
    accent: "bg-blue-100",
  },
  {
    icon: <Sprout className="w-7 h-7 text-green-600" />,
    title: "Soil Health & Sustainable Agriculture",
    description:
      "Connecting microbial and biogeochemical processes with practical soil health indicators and management strategies for resilient agricultural systems.",
    accent: "bg-green-100",
  },
];

export default function ResearchFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Research Focus */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Research Focus
            </h2>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
              Connecting Soil Health with Microbial Function
            </h3>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                My research interests center on understanding how{" "}
                <Highlight>
                  soil microbial communities influence nitrogen and carbon
                  cycling, soil fertility, greenhouse gas emissions, and overall
                  soil health
                </Highlight>
                .
              </p>
              <p>
                I am particularly interested in connecting traditional soil
                health measurements with molecular and functional approaches to
                better understand not only{" "}
                <Highlight>
                  how soils respond to agricultural management, but why those
                  responses occur at the microbial level
                </Highlight>
                .
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg"
              >
                <div
                  className={`w-14 h-14 ${area.accent} rounded-full flex items-center justify-center mb-4`}
                >
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {area.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Current Position */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Current Position
            </h2>

            <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Ph.D. Student &amp; Graduate Teaching Assistant
                  </h3>
                  <p className="text-emerald-600 font-semibold">
                    Department of Biology | Saint Louis University
                  </p>
                  <p className="text-gray-600">
                    Huang Microbial Ecology Lab | 2026–Present
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I am currently pursuing my{" "}
                  <Highlight>Ph.D. in Biology at Saint Louis University</Highlight>{" "}
                  in{" "}
                  <Highlight>Dr. Laibin Huang's Microbial Ecology Lab</Highlight>
                  .{" "}
                  <a
                    href="https://seahuanglaibin.wixsite.com/sluhuang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-medium hover:text-emerald-900 underline inline-flex items-center gap-1"
                  >
                    Dr. Huang Microbial Ecology Lab | Nitrogen
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </p>
                <p>
                  My doctoral training builds upon my previous research in soil
                  health and sustainable agriculture by moving toward a more
                  mechanistic understanding of the microorganisms responsible
                  for nutrient transformations in soil.
                </p>
                <p>
                  My research interests include{" "}
                  <Highlight>
                    soil microbial ecology, microbial nitrogen cycling, carbon
                    cycling, soil health, and greenhouse gas emissions
                  </Highlight>
                  . I am developing experience with molecular and computational
                  approaches that can be integrated with soil biogeochemical
                  measurements to investigate microbial community structure and
                  function.
                </p>
                <p>
                  As a <Highlight>Graduate Teaching Assistant</Highlight>, I
                  teach{" "}
                  <Highlight>
                    BIOL 1245 – Principles of Biology I Laboratory
                  </Highlight>
                  , where I guide
                  undergraduate students through laboratory activities,
                  reinforce fundamental biological concepts, assist with
                  experimental techniques and data interpretation, and promote
                  safe laboratory practices.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
