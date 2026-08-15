"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import Highlight from "./Highlight";

export default function Teaching() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="teaching"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-emerald-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Teaching
          </h2>

          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  BIOL 1245 – Principles of Biology I Laboratory
                </h3>
                <p className="text-blue-600 font-semibold">
                  Graduate Teaching Assistant | Saint Louis University
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As a Graduate Teaching Assistant, I teach{" "}
                <Highlight>
                  BIOL 1245 – Principles of Biology I Laboratory
                </Highlight>
                .
              </p>
              <p>
                My teaching responsibilities include guiding undergraduate
                students through laboratory exercises, explaining fundamental
                biological concepts, assisting with experimental procedures and
                data interpretation, reinforcing laboratory safety, and helping
                students develop confidence in scientific observation and
                experimentation.
              </p>
              <p>
                Teaching allows me to complement my research training by
                developing skills in{" "}
                <Highlight>
                  scientific communication, mentorship, and undergraduate
                  education
                </Highlight>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
