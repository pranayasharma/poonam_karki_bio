"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Atom, Route, ArrowRight } from "lucide-react";
import Highlight from "./Highlight";

const nitrogenProcesses = [
  "Nitrogen Fixation",
  "Mineralization",
  "Nitrification",
  "Denitrification",
  "DNRA",
  "Other Microbial Nitrogen Transformations",
];

const approaches = [
  "Soil biogeochemical measurements",
  "DNA extraction",
  "Quantitative PCR (qPCR)",
  "Amplicon sequencing",
  "Greenhouse gas measurements",
  "Bioinformatics",
  "Omics-based approaches",
];

const journeyChain = [
  "Agricultural Management",
  "Microbial Communities",
  "Functional Processes",
  "Nutrient Cycling",
  "Soil Health",
];

export default function CurrentResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="research-direction"
      className="py-20 bg-gradient-to-br from-white via-emerald-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Current Research Direction */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Current Research Direction
            </h2>
            <h3 className="text-2xl font-semibold text-emerald-700">
              Microbial Nitrogen Cycling &amp; Soil Health
            </h3>
          </div>

          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Atom className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Nitrogen availability in agricultural soils is controlled by a
                complex network of microbial processes. Understanding these
                processes is essential for improving nutrient-use efficiency,
                maintaining soil fertility, and reducing environmental nitrogen
                losses.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                My current research interests focus on understanding how
                agricultural management influences{" "}
                <Highlight>
                  nitrogen-cycling microorganisms, functional genes, nutrient
                  transformations, and greenhouse gas emissions
                </Highlight>
                .
              </p>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  I am particularly interested in microbial processes such as:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {nitrogenProcesses.map((process) => (
                    <span
                      key={process}
                      className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {process}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  My doctoral training integrates approaches such as:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {approaches.map((approach) => (
                    <span
                      key={approach}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {approach}
                    </span>
                  ))}
                </div>
              </div>

              <p>
                My long-term goal is to connect changes in microbial communities
                and functional pathways with measurable changes in{" "}
                <Highlight>
                  soil nitrogen availability, soil health, and ecosystem
                  function
                </Highlight>
                .
              </p>
            </div>
          </div>

          {/* My Research Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                My Research Journey
              </h2>
              <h3 className="text-2xl font-semibold text-emerald-700">
                From Soil Health Indicators to Microbial Mechanisms
              </h3>
            </div>

            <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Route className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-gray-700">
                    My research journey began with a fundamental question:
                  </p>
                  <p className="text-xl font-semibold text-emerald-700 italic mt-2">
                    How can agricultural management improve soil health?
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  During my master's research and subsequent work as a Soil
                  Health Research Specialist at Lincoln University of Missouri,
                  I investigated this question using biological and biochemical
                  indicators of soil health.
                </p>
                <p>
                  My work included measurements of{" "}
                  <Highlight>
                    soil organic carbon, total nitrogen, mineralizable carbon,
                    potentially mineralizable nitrogen, permanganate oxidizable
                    carbon (POXC), extracellular enzyme activities, soil
                    protein, and microbial community characteristics
                  </Highlight>
                  .
                </p>
                <p>
                  These indicators helped reveal how agricultural management
                  influences biologically active pools of carbon and nitrogen.
                </p>

                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    However, they also led me to a deeper question:
                  </p>
                  <p className="text-lg font-semibold text-blue-800 italic">
                    Which microorganisms and microbial processes are responsible
                    for the changes we observe in soil?
                  </p>
                </div>

                <p>
                  My Ph.D. training at Saint Louis University represents the
                  next stage of that journey. I am now expanding from measuring
                  soil health responses toward understanding the{" "}
                  <Highlight>
                    microbial mechanisms underlying carbon and nitrogen cycling
                  </Highlight>
                  .
                </p>
                <p>
                  By integrating soil health measurements with molecular
                  microbial ecology and bioinformatics, I hope to better
                  connect:
                </p>

                <div className="flex flex-wrap items-center gap-2 py-2">
                  {journeyChain.map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                        {step}
                      </span>
                      {index < journeyChain.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <p>
                  Ultimately, my goal is to bridge fundamental microbial ecology
                  with applied soil science to contribute to more{" "}
                  <Highlight>
                    productive, resilient, and environmentally sustainable
                    agricultural systems
                  </Highlight>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
