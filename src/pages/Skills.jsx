import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";
import Java from "../assets/Java.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/CSS.svg";
import Tailwind from "../assets/Tailwind.svg";
import JavaScript from "../assets/JS.svg";
import Github from "../assets/github1.svg";
import Figma from "../assets/figma.svg";
import Vite from "../assets/Vite.png";

const skills = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "Tailwind", img: Tailwind },
  { name: "JavaScript", img: JavaScript },
  { name: "React", img: reactLogo },
  { name: "Java", img: Java },
  { name: "GitHub", img: Github },
  { name: "Figma", img: Figma },
  { name: "Vite", img: Vite },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.2, duration: 0.55 }}
      >
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100">
          Skill&apos;s
        </h2>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-300">
          These are the technologies and languages I’ve worked with
        </p>
      </motion.div>

      {/* Skill Grid */}
      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
            className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 p-6 text-center shadow-sm"
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
