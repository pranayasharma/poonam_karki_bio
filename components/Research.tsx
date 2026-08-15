"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Microscope,
  Leaf,
  Sun,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import Highlight from "./Highlight";

const researchImages = [
  {
    src: "/image/organic.JPG",
    alt: "Organic Transition Project Research",
    title: "Project 1: Organic Transition",
    icon: <Leaf className="w-5 h-5 text-emerald-600" />,
    color: "emerald",
  },

  {
    src: "/image/solar_corridor_2.JPG",
    alt: "Laboratory Analysis and Data Processing",
    title: "Project 2: Solar Corridor System",
    icon: <Sun className="w-5 h-5 text-amber-600" />,
    color: "blue",
  },
  {
    src: "/image/solar_corridor_1.JPG",
    alt: "Solar Corridor Cropping System Research",
    title: "Cmin-24 experiment in the laboratory",
    icon: <Sun className="w-5 h-5 text-amber-600" />,
    color: "amber",
  },
];

function ResearchImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % researchImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + researchImages.length) % researchImages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = researchImages[currentIndex];

  return (
    <div className="relative">
      <div className="text-center mb-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2">
          Research in Action
        </h4>
        <p className="text-sm text-gray-600">
          Visual documentation of this research work
        </p>
      </div>

      <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          {currentImage.icon}
          <h5 className="font-semibold text-gray-800">{currentImage.title}</h5>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {researchImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-emerald-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const measurements: { name: string; description: React.ReactNode }[] = [
  {
    name: "Total Carbon & Nitrogen",
    description: "Assessment of soil carbon and nitrogen pools.",
  },
  {
    name: "Permanganate Oxidizable Carbon (POXC)",
    description:
      "Measurement of a biologically responsive soil carbon fraction.",
  },
  {
    name: "Mineralizable Carbon",
    description:
      "Assessment of microbial decomposition and soil biological activity.",
  },
  {
    name: "Potentially Mineralizable Nitrogen (PMN)",
    description:
      "Evaluation of the soil's biologically available nitrogen supply.",
  },
  {
    name: "Extracellular Soil Enzymes",
    description: (
      <>
        Measurement of enzymes involved in carbon, nitrogen, phosphorus, and
        sulfur cycling, including{" "}
        <Highlight>
          β-glucosidase, N-acetyl-β-glucosaminidase, acid phosphatase, and
          arylsulfatase
        </Highlight>
        .
      </>
    ),
  },
  {
    name: "ACE Soil Protein",
    description:
      "Assessment of organically bound nitrogen associated with soil biological functioning.",
  },
  {
    name: "PLFA Analysis",
    description:
      "Characterization of microbial biomass and broad microbial community composition.",
  },
  {
    name: "Molecular Microbial Analysis",
    description: "DNA extraction and microbial community characterization.",
  },
];

const researchPhilosophy = {
  inspiration:
    "A single teaspoon of soil contains more microorganisms than the entire global human population",
  journey:
    "This astonishing fact initially struck me as a potential typographical error, compelling me to read it twice in disbelief. Nonetheless, it had a lasting effect on me, igniting my interest in this field and motivating me to embark on a journey of research into biogeochemical cycling.",
  focus:
    "Microbes drive the biogeochemical cycles that sustain all ecosystems. My strong desire to study soil biogeochemistry is rooted in the immense potential and unexplored territory within this field.",
};

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="research"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Previous Research Experience
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              Soil Health Research Specialist
            </h3>
            <p className="text-lg text-emerald-700 font-semibold">
              Lincoln University of Missouri | 2024–2026
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl mb-16">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Before beginning my Ph.D. at Saint Louis University, I worked as
                a{" "}
                <Highlight>
                  Soil Health Research Specialist in Dr. Tunsisa Hurisso's Soil
                  Health Research Lab at Lincoln University of Missouri
                </Highlight>
                .
              </p>
              <p>
                My research focused on{" "}
                <Highlight>
                  soil health, microbial ecology, carbon and nitrogen cycling,
                  cover crops, organic agriculture, and climate-resilient
                  production systems
                </Highlight>
                .
              </p>
              <p>
                I contributed to USDA-funded research investigating how
                conservation and agricultural management practices influence
                soil biological functioning, nutrient cycling, weed management,
                crop production, and agricultural resilience.
              </p>
            </div>
          </div>

          {/* Previous Research Projects */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Previous Research Projects
            </h3>
          </div>

          {/* Both Projects Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Project 1: Organic Transition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    1. Organic Transition Project
                  </h3>
                  <p className="text-emerald-600 font-semibold">
                    USDA-NIFA Funded Research
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-emerald-50 rounded-lg p-5 space-y-3">
                  <p>
                    This research examined the integration of living cover crops
                    into traffic pathways between vegetable production beds
                    during transition to certified organic management.
                  </p>
                  <p>
                    The project investigated whether cover crops could improve
                    soil health while providing additional benefits such as weed
                    suppression and increased biological activity in intensively
                    managed organic vegetable systems.
                  </p>
                  <p>
                    My research examined changes in{" "}
                    <Highlight>
                      soil carbon and nitrogen pools, microbial activity,
                      extracellular enzyme activity, microbial community
                      composition, cover crop biomass, and weed seedbank
                      dynamics
                    </Highlight>
                    .
                  </p>
                  <p className="font-semibold text-emerald-800">
                    This project helped establish the foundation for my interest
                    in understanding how agricultural management influences soil
                    microbial processes.
                  </p>
                </div>

                <p>
                  In the U.S., organic agriculture is a $50 billion industry,
                  involving &gt;5 million certified acres of organic farmland
                  and &gt;14,000 farms. However, weed management poses one of
                  the greatest challenges to growing organic crops, accounting
                  for the bulk of the production costs.
                </p>
                <p>
                  Many growers turn to tillage to control weeds, but soil
                  disturbance associated with tillage results in soil erosion
                  and loss of valuable soil organic matter. In Missouri, where
                  topsoils are relatively shallow, the loss of carbon-rich
                  topsoil through tillage-induced soil disturbance is directly
                  responsible for soil quality degradation, greatly limiting
                  yield and profitability.
                </p>
                <p>
                  Some growers take land out of cash crop production every other
                  year or more to grow cover crops including both winter and
                  summer cover crops as they try to build up SOM and soil
                  health. The obstacles are enough to make some farmers abandon
                  organic practices altogether and others think twice before
                  transitioning to a certified organic operation.
                </p>
                <p className="font-semibold text-emerald-700">
                  Therefore, this project worked to develop more sustainable
                  cover crop–cash crop companion production methods that enhance
                  soil health and crowd out weeds, ultimately improving crop
                  yields and profitability of small- and mid-sized vegetable
                  farms across Missouri and the Midwest. This project was
                  supported by USDA-NIFA.
                </p>
              </div>
            </motion.div>

            {/* Project 2: Solar Corridor Cropping System */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    2. Solar Corridor Cropping System
                  </h3>
                  <p className="text-amber-600 font-semibold">
                    USDA Conservation Innovation Grant
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-amber-50 rounded-lg p-5 space-y-3">
                  <p>
                    The Solar Corridor Cropping System project evaluated an
                    alternative cropping and winter-feeding strategy designed to
                    improve livestock production while supporting soil health
                    and agricultural resilience.
                  </p>
                  <p>
                    The system integrates grain and forage crops to provide
                    livestock grazing opportunities while reducing dependence on
                    harvested feed and other production inputs.
                  </p>
                  <p>
                    My role focused primarily on evaluating how the production
                    system influenced{" "}
                    <Highlight>
                      soil health and carbon and nitrogen cycling
                    </Highlight>
                    .
                  </p>
                </div>

                <p>
                  The Solar Corridor Cropping System (SCCS) project was a USDA
                  Conservation Innovation Grant-funded initiative aimed at
                  enhancing the sustainability and productivity of livestock
                  farming by introducing a year-round grazing alternative.
                </p>
                <p>
                  As extreme weather events, feed shortages, and rising input
                  costs threaten small and mid-scale livestock operations across
                  the U.S., this project offers a transformative solution:
                  intercropping high-energy grain crops like grain sorghum with
                  high-protein forage species in wide rows, enabling animals to
                  graze directly in the fields during late fall and winter.
                </p>
                <p>
                  This strategy reduces dependence on hay, machinery, and labor,
                  thereby lowering operational costs while regenerating soil
                  health and increasing resilience.
                </p>
                <p className="font-semibold text-amber-700">
                  By designing a system that integrates cover cropping, grazing,
                  and carbon sequestration, SCCS aligns and supports underserved
                  farming communities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* My Role Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                My Role in the Research
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Across these projects, I conducted or contributed to
                measurements and analyses including:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {measurements.map((item) => (
                <div
                  key={item.name}
                  className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-5 shadow-lg"
                >
                  <h4 className="font-bold text-gray-800 mb-2 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl mb-12">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I also participated in{" "}
                  <Highlight>
                    field sampling, cover crop biomass measurements, plant
                    tissue analysis, weed seedbank assessments, statistical
                    analysis, data visualization, manuscript preparation, and
                    research outreach
                  </Highlight>
                  .
                </p>
                <p>
                  I used <Highlight>R and SAS</Highlight> to analyze
                  experimental data and translate research findings into
                  biologically and agriculturally meaningful conclusions.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Role Description */}
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    In this role, I carried out testing on a suite of soil health
                    indicators that reveal how conservation practices impact
                    soil health and resilience.
                  </p>

                  <p>
                    This work provided both immediate insights into how soils
                    respond to management and built the foundation for
                    understanding long-term changes that support sustainable
                    land use and organic farming practices.
                  </p>

                  <p>
                    Beyond this, I also analyzed cover crop and forage tissues
                    and collected biomass samples, since the amount of carbon
                    sequestered in soil is directly linked to the amount of
                    biomass returned. To assess weed management effectiveness, I
                    studied the weed seed bank to determine whether conservation
                    practices had reduced potential weed pressure.
                  </p>

                  <p>
                    After generating data, I applied statistical analysis and
                    visualization techniques in R and SAS, transforming raw
                    measurements into insights that guide sustainable farming
                    strategies.
                  </p>

                  <p className="font-semibold text-emerald-700">
                    Through these studies, my goal was to provide farmers —
                    especially small- and mid-sized organic growers — with tools
                    and strategies that enhance both ecological resilience and
                    economic success.
                  </p>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
                <ResearchImageCarousel />
              </div>
            </div>
          </motion.div>

          {/* Looking Ahead: Research Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Broader Research Interests &amp; PFAS Work
              </h3>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  During my master's program, I worked extensively with
                  physiological and metabolic soil health indicators, which
                  provided foundational insight into how soil organisms respond
                  to management practices. Although soil organic carbon has long
                  been viewed as a primary indicator of soil health, its slow
                  response to management changes limits its usefulness for
                  timely decision-making, motivating my focus on biologically
                  active pools of soil organic matter such as permanganate
                  oxidizable carbon (POXC), mineralizable carbon (Cmin-24),
                  potentially mineralizable nitrogen (PMN), and soil enzymes
                  that respond rapidly to shifts in soil conditions.
                </p>

                <p>
                  Through this work, I developed a strong appreciation for the
                  central role of soil microorganisms in nutrient turnover,
                  organic matter decomposition, and soil resilience; for
                  example, POXC revealed carbon availability for microbial use,
                  while Cmin-24 reflected microbial respiration and activity.
                  Together, these measurements strengthened my understanding of
                  microbial contributions to soil function while also
                  highlighting the need for approaches that better capture
                  microbial complexity and functional roles.
                </p>

                <p className="font-semibold text-blue-700">
                  Looking ahead, I am interested in integrating microbial
                  community data and functional ecological approaches with
                  established soil health indicators.
                </p>

                <p>
                  My interest lies in using targeted molecular and biochemical
                  tools such as key functional gene markers, enzyme activities,
                  and microbial biomass metrics that can complement physical and
                  chemical soil measurements. These approaches can help identify
                  the microbial processes most responsible for carbon
                  stabilization, nitrogen mineralization, and soil nutrient
                  cycling, while remaining relatively accessible for applied
                  agricultural research.
                </p>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-semibold text-red-800 mb-3">
                    PFAS Research Interest
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Over the past four years of working in soil science, I have
                    come to appreciate how closely soil systems are connected to
                    human activities and consumer products and how critical soil
                    health is for environmental and human wellbeing. For
                    example, organic farmers in Missouri commonly use compost,
                    animal, and poultry manure to improve the fertility of the
                    soil.
                  </p>
                  <p className="text-gray-700 mb-3">
                    However, recent studies in the United States have shown that
                    various types of non-biosolid organic composts, including
                    food, yard, manure, and mushroom-based materials, contain
                    measurable concentrations of PFAS with total concentrations
                    of 17 PFAS ranging from 28.7 to 75.9 ng/g.
                  </p>
                  <p className="text-gray-700">
                    Because I work closely with organic farmers and study how
                    management practices affect soil health and microbial
                    community structure, this has led me to question how PFAS
                    present in these amendments may influence soil microbial
                    processes, plant uptake, and ultimately food systems. I am
                    particularly interested in understanding PFAS fate and
                    transport in agricultural soils, their interactions with
                    soil organic matter and microbial communities, and
                    strategies to limit PFAS distribution in soil and sediments.
                  </p>
                </div>

                <p>
                  In parallel, I have been learning more about PFAS analytical
                  approaches through the Analytical Chemistry Lab at Lincoln
                  University of Missouri, working to better understand PFAS
                  occurrence and behavior in soils in an agroecosystem context.
                </p>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">
                    Farmer Collaboration
                  </h4>
                  <p className="text-gray-700">
                    A central component of my work is collaboration with
                    farmers. Direct engagement with growers strengthened my
                    commitment to developing soil health and nutrient management
                    tools that are practical, affordable, and responsive to
                    real-world conditions. I am motivated to translate
                    scientific insights into decision-support strategies that
                    enhance carbon stabilization, improve nitrogen use
                    efficiency, reduce nutrient losses, and strengthen soil
                    resilience.
                  </p>
                </div>

                <p className="font-semibold text-purple-700">
                  Overall, my research vision integrates soil microbial ecology,
                  nutrient cycling, and contaminant fate to advance practical,
                  science-based soil management strategies that enhance
                  agricultural resilience and environmental sustainability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research Expertise Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-2xl shadow-xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Foundations Built at Lincoln University
              </h3>
              <p className="text-emerald-100 text-lg">
                Microbial ecology, soil biogeochemical cycling, and conservation
                practices
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Microscope className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Microbial Ecology</h4>
                <p className="text-emerald-100 text-sm">
                  Understanding soil microorganism interactions and their role
                  in ecosystem sustainability
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Leaf className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">
                  Biogeochemical Cycling
                </h4>
                <p className="text-emerald-100 text-sm">
                  Carbon and nitrogen cycling dynamics in organic agricultural
                  systems
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Farmer Support</h4>
                <p className="text-emerald-100 text-sm">
                  Helping small- and mid-scale farmers improve production and
                  productivity
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
