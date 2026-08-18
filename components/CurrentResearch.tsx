"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Atom } from "lucide-react";

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

          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
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
                agricultural management influences nitrogen-cycling
                microorganisms, functional genes, nutrient transformations, and
                greenhouse gas emissions. I am particularly interested in
                microbial processes such as nitrogen fixation, mineralization,
                nitrification, denitrification, DNRA, and other microbial
                nitrogen transformations. My doctoral training integrates
                approaches such as soil biogeochemical measurements, DNA
                extraction, quantitative PCR (qPCR), amplicon sequencing,
                greenhouse gas measurements, bioinformatics, and omics-based
                approaches.
              </p>

              <p className="font-semibold text-emerald-700">
                My long-term goal is to connect changes in microbial communities
                and functional pathways with measurable changes in soil nitrogen
                availability, soil health, and ecosystem function.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
