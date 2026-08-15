"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass } from "lucide-react";
import Highlight from "./Highlight";

export default function ResearchVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Research Vision
            </h2>
            <h3 className="text-2xl font-semibold text-emerald-700">
              Bridging Microbial Ecology and Sustainable Agriculture
            </h3>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Compass className="w-7 h-7" />
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                My long-term research goal is to understand how microorganisms
                regulate{" "}
                <Highlight onDark>
                  soil fertility, nutrient cycling, greenhouse gas emissions,
                  and ecosystem resilience
                </Highlight>
                .
              </p>
              <p>
                I am particularly interested in developing research that links
                molecular indicators of microbial function with practical
                measurements of soil health.
              </p>
              <p>
                By connecting{" "}
                <Highlight onDark>
                  microbial communities, functional genes, metabolites, and soil
                  processes
                </Highlight>
                , I hope to better understand how agricultural management
                influences nitrogen availability and environmental nitrogen
                losses.
              </p>
              <p className="font-semibold bg-white/10 backdrop-blur-sm rounded-lg p-4">
                Ultimately, I aim to contribute to scientifically grounded
                management strategies that help agricultural systems maintain
                productive soils, use nutrients efficiently, reduce
                environmental impacts, and remain resilient under changing
                environmental conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
