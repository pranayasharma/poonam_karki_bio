"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  Linkedin,
  Microscope,
  Leaf,
  GraduationCap,
  FlaskConical,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-emerald-50 via-blue-50 to-green-100 pt-32 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
                Poonam Karki
              </h1>
              <p className="text-xl md:text-2xl mb-2 text-emerald-600 font-semibold">
                Ph.D. Student | Soil Microbial Ecology
              </p>
              <p className="text-lg mb-4 text-gray-800 font-medium">
                Saint Louis University
              </p>
              <p className="text-lg mb-2 text-gray-700 italic font-medium">
                Exploring the microbial processes that regulate soil health,
                nutrient cycling, and ecosystem function
              </p>
              <p className="text-base text-gray-600">
                My research bridges{" "}
                <strong className="font-bold text-gray-800">
                  soil science, microbial ecology, and sustainable agriculture
                </strong>{" "}
                to understand how microorganisms regulate nitrogen
                transformations in agricultural ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#research-direction"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
              >
                View My Research
              </a>
              <a
                href="/resume/CV_PoonamKarki.pdf"
                target="_blank"
                className="bg-white/70 backdrop-blur-sm border border-white/40 hover:bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors flex items-center gap-2"
              >
                <FileText size={18} />
                View CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-6"
            >
              <a
                href="https://www.linkedin.com/in/poonam-karki-56585b1b4/"
                className="text-emerald-600 hover:text-emerald-800 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:poonam.karki@slu.edu"
                className="text-emerald-600 hover:text-emerald-800 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Quick Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Quick Profile
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Current Position
                      </h4>
                      <p className="text-sm text-gray-600">
                        Ph.D. Student &amp; Graduate Teaching Assistant, Saint
                        Louis University
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FlaskConical className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Research Focus
                      </h4>
                      <p className="text-sm text-gray-600">
                        Soil microbial ecology &amp; nitrogen cycling
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Teaching</h4>
                      <p className="text-sm text-gray-600">
                        BIOL 1245 – Principles of Biology I Laboratory
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
