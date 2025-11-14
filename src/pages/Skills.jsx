import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";
import Java from "../assets/Java.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/CSS.svg";
import Tailwind from "../assets/Tailwind.svg";
import JavaScript from "../assets/JS.svg";
import Git from "../assets/git.png";
import Figma from "../assets/figma.svg";
import Vite from "../assets/Vite.png";
import NextJs from "../assets/nextjs.png";

const skills = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "JavaScript", img: JavaScript },
  { name: "Tailwind", img: Tailwind },
  { name: "React", img: reactLogo },
  { name: "Vite", img: Vite },
  { name: "Next", img: NextJs },
  { name: "Java", img: Java },
  { name: "Git", img: Git },
  { name: "Figma", img: Figma },
];

// --- Variants Reusable ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }} // ← animasi muncul setiap scroll
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h2
          className="text-6xl font-bold text-center text-slate-900 dark:text-teal-300 p-2"
          style={{ textShadow: "2px 2px 1px white" }}
        >
          Skill&apos;s
        </h2>
        <p className="mt-3 text-xl text-center text-slate-600 dark:text-slate-300">
          These are the technologies and languages I’ve worked with
        </p>
      </motion.div>

      {/* Skill Grid */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // ← ini juga harus false
      >
        {skills.map(({ name, img }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            whileHover={{
              y: -6,
              boxShadow: "0 18px 30px rgba(15, 118, 110, 0.18)",
            }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 p-6 text-center shadow-sm w-50"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 overflow-hidden bg-slate-50/50 dark:bg-slate-900/60">
              {img ? (
                <img
                  src={img}
                  alt={name}
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <span className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <p className="mt-4 font-medium text-slate-800 dark:text-slate-200">
              {name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;
