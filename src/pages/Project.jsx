import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Website portofolio pribadi yang menampilkan pengalaman, proyek, dan keahlian secara responsif dengan animasi modern.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/aditri24sn/MyPortofolio",
  },
  {
    title: "Desa Belung Poncokusumo Website",
    description:
      "Website profil desa yang informatif dan responsif untuk menampilkan potensi desa, berita, dan layanan masyarakat.",
    tech: ["React", "Tailwind CSS", "Next.js"],
    link: "https://github.com/AgungAryansyah/website-desa-belung",
  },
  {
    title: "MiniMe UI UX Design",
    description:
      "Desain UI/UX aplikasi monitoring ibu hamil yang menyediakan tampilan ramah pengguna untuk memantau perkembangan kehamilan, jadwal kontrol, pengingat kesehatan, dan edukasi selama masa kehamilan.",
    tech: ["Figma"],
    link: "https://www.figma.com/proto/mhFkkeB2K16jYI2zKJAumO/MiniMe?node-id=1-3&t=6PeFhWcalg7SPYSN-1",
  },
  {
    title: "SanberCode Project Lowongan Pekerjaan",
    description:
      "Website sederhana dengan landing page lowongan pekerjaan yang menampilkan daftar pekerjaan, detail job, dan tampilan UI responsif sebagai final project SanberCode.",
    tech: ["JavaScript", "HTML", "React", "Tailwind CSS"],
    link: "https://finalproject-aditrisuryanoplagiat.netlify.app/",
  },
];

// ===== ANIMATION VARIANTS =====
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Header */}
      <motion.div
        className="space-y-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-slate-100">
          Featured Projects
        </h2>
        <p className="max-w-2xl text-slate-300">
          A selection of work that highlights problem solving, attention to
          detail, and the ability to collaborate across disciplines.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px rgba(13, 148, 136, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-teal-400/60"
          >
            <motion.h3
              variants={fadeUp}
              className="text-xl font-semibold text-slate-100"
            >
              {project.title}
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm text-slate-300 leading-relaxed"
            >
              {project.description}
            </motion.p>

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
