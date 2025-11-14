import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal site showcasing professional experience, featured work, and design experiments.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/username/portfolio",
  },
   {
    title: "Portfolio Website",
    description:
      "A responsive personal site showcasing professional experience, featured work, and design experiments.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/username/portfolio",
  },
  {
    title: "Task Manager API",
    description:
      "RESTful API that lets teams create tasks, assign members, and track progress with clear analytics.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/username/task-manager",
  },
   {
    title: "Portfolio Website",
    description:
      "A responsive personal site showcasing professional experience, featured work, and design experiments.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/username/portfolio",
  },
   {
    title: "Portfolio Website",
    description:
      "A responsive personal site showcasing professional experience, featured work, and design experiments.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/username/portfolio",
  },
  {
    title: "Design System Starter",
    description:
      "Reusable component library with tokens, documentation, and example layouts for fast prototyping.",
    tech: ["Storybook", "TypeScript", "Styled Components"],
    link: "https://github.com/username/design-system",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Project() {
  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.45 }}
      >
        <h2 className="text-3xl font-semibold text-slate-100">Featured Projects</h2>
        <p className="max-w-2xl text-slate-300">
          A selection of work that highlights problem solving, attention to detail,
          and the ability to collaborate across disciplines.
        </p>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(13, 148, 136, 0.25)" }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-teal-400/60"
          >
            <motion.h3
              className="text-xl font-semibold text-slate-100"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-teal-300">
              {project.tech.map((tech) => (
                <motion.li
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-teal-500/40 px-3 py-1"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center text-sm font-medium text-teal-300 transition group-hover:gap-2"
              whileHover={{ gap: "12px" }}
            >
              View Repository →
            </motion.a>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Project;