import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= VARIANTS ================= */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  },
});

const fadeUpStrong = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7 },
  },
});

/* ================= DATA ================= */
const experiences = [
  {
    role: "Senior Staff – Human Resources Development Division",
    company: "KBMDSI FILKOM UB",
    period: "Feb 2024 - Dec 2024",
    endDate: new Date(2024, 11),
    desc: "Designed and executed human resource development programs, provided mentoring and evaluation, and enhanced communication and leadership skills to support the division’s operational effectiveness.",
  },
  {
    role: "Treasurer",
    company: "FORTERY",
    period: "Oct 2024 - Nov 2024",
    endDate: new Date(2024, 10),
    desc: "Managed all financial operations of the event, including budgeting, expense tracking, fund allocation, and ensuring smooth execution in accordance with the planned budget.",
  },
  {
    role: "Treasurer",
    company: "ASCEND",
    period: "May 2024 - Jun 2024",
    endDate: new Date(2024, 5),
    desc: "Responsible for financial planning, monitoring expenditures, and maintaining financial stability through accurate and well-organized financial records.",
  },
  {
    role: "Head of Equipment Division",
    company: "Synergy of Symphony",
    period: "Sep 2024 - Nov 2024",
    endDate: new Date(2024, 10),
    desc: "Oversaw equipment procurement, inventory management, and logistics coordination to support smooth event execution.",
  },
  {
    role: "Vice Head of Operations Division",
    company: "PEMILWA FILKOM UB",
    period: "Sep 2024 - Nov 2024",
    endDate: new Date(2024, 10),
    desc: "Supervised and managed logistical and operational aspects of the election process, coordinated on-site execution, and collaborated with faculty committees to ensure efficiency and transparency.",
  },
  {
    role: "Vice Head of Equipment Division",
    company: "PKKMB & SA FILKOM UB",
    period: "Aug 2025 - Nov 2025",
    endDate: new Date(2025, 10),
    desc: "Oversaw procurement, management, and maintenance of equipment, ensuring proper inventory distribution across divisions.",
  },
  {
    role: "Teaching Assistant – Basic Information Systems Development",
    company: "Faculty of Computer Science, Universitas Brawijaya",
    period: "Sep 2025 - Dec 2025",
    endDate: new Date(2025, 11),
    desc: "Supervised laboratory sessions, assisted students with technical software usage, and ensured compliance with procedures during practical sessions.",
  },
   {
    role: "2nd Place – External Software Development Event 9.0",
    company: "HMSE Telkom University Purwokerto",
    period: "Oct 2025 - Dec 2025",
    endDate: new Date(2025, 12),
    desc: "Achieved 2nd Place in a competitive external software development event by collaborating in a team to design and develop an innovative software solution. Demonstrated strong skills in problem-solving, system analysis, application development, and teamwork, while delivering a functional and well-documented project within a defined timeline.",
  },
];

/* ================= COMPONENT ================= */
export default function About() {
  const sliderRef = useRef(null);
  const [step, setStep] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sort experiences dari terbaru ke terlamanya
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.endDate - a.endDate,
  );
  const maxIndex = sortedExperiences.length - 1;

  /* ===== Hitung lebar slider (RESPONSIVE) ===== */
  useEffect(() => {
    const updateStep = () => {
      if (!sliderRef.current) return;
      const width = sliderRef.current.offsetWidth;
      if (width > 0) setStep(width);
    };

    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  /* ===== Infinite Manual Navigation ===== */
  const handleNext = () => {
    if (!step) return;
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (!step) return;
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 scroll-mt-24"
      variants={fadeUpStrong()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="space-y-12">
        {/* ================= ABOUT ================= */}
        <motion.div
          className="space-y-4 text-center"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
        >
          <h2
            className="text-5xl md:text-6xl font-semibold text-teal-300"
            style={{ textShadow: "2px 2px 1px white" }}
          >
            About Me
          </h2>

          <p className="text-slate-300 text-lg md:text-xl">
            I am a technology enthusiast in Information Technology, focused on
            software development and building modern, high-performance digital
            solutions.
          </p>

          <p className="text-slate-300 text-lg md:text-xl">
            Beyond coding, I explore emerging technologies and collaborate
            effectively to deliver impactful results.
          </p>
        </motion.div>

        {/* ================= EXPERIENCE ================= */}
        <motion.div
          className="space-y-6"
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-2xl font-semibold text-slate-100">Experiences</h3>

          <div className="relative">
            {/* PREV */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center justify-center"
            >
              ❮
            </button>

            {/* NEXT */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center justify-center"
            >
              ❯
            </button>

            {/* SLIDER */}
            <div
              ref={sliderRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing"
            >
              {step > 0 && (
                <motion.div
                  className="flex"
                  drag="x"
                  dragConstraints={{
                    left: -maxIndex * step,
                    right: 0,
                  }}
                  dragElastic={0.12}
                  animate={{ x: -currentIndex * step }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                  {sortedExperiences.map((exp, index) => (
                    <div
                      key={index}
                      style={{ width: step }}
                      className="flex-shrink-0 flex justify-center px-4"
                    >
                      <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="
                          w-full
                          max-w-5xl
                          min-h-[260px]
                          rounded-xl
                          border border-slate-800
                          bg-slate-900/60
                          p-6
                          shadow-xl
                          flex flex-col
                        "
                      >
                        <div className="space-y-3 flex-1">
                          <h4 className="text-xl md:text-2xl font-semibold text-slate-100">
                            {exp.role}
                          </h4>
                          <p className="text-lg font-medium text-teal-300">
                            {exp.company}
                          </p>
                          <p className="text-slate-400">{exp.period}</p>
                          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                            {exp.desc}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* INDICATOR */}
          <div className="flex justify-center gap-2 mt-6">
            {sortedExperiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-teal-300"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
