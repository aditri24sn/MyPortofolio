import { motion } from "framer-motion";

// Reusable Variants
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

const experiences = [
  {
    role: "Front-end Developer",
    company: "Nama Perusahaan A",
    period: "2024-01-15 - Sekarang",
    desc: "Bertanggung jawab untuk membangun antarmuka responsif, berkolaborasi dengan tim desain, dan meningkatkan performa aplikasi web.",
  },
  {
    role: "UI/UX Intern",
    company: "Nama Perusahaan B",
    period: "2023-06-01 - 2023-12-31",
    desc: "Membantu riset pengguna, membuat wireframe dan prototipe, serta menguji pengalaman pengguna untuk berbagai produk digital.",
  },
  {
    role: "Web Developer Intern",
    company: "Nama Perusahaan C",
    period: "2022-08-15 - 2023-05-30",
    desc: "Mengembangkan fitur-fitur baru untuk website perusahaan dan mempelajari best practices dalam pengembangan web modern.",
  },
  {
    role: "Backend Developer",
    company: "Nama Perusahaan D",
    period: "2022-01-10 - 2022-08-01",
    desc: "Membangun API RESTful dan mengelola database untuk berbagai aplikasi perusahaan.",
  },
  {
    role: "Software Engineering Intern",
    company: "Nama Perusahaan E",
    period: "2021-06-15 - 2021-12-20",
    desc: "Belajar fundamental programming dan berpartisipasi dalam pengembangan proyek internal perusahaan.",
  },
];

function About() {
  const duplicatedExperiences = [...experiences, ...experiences];

  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24 py-12"
      variants={fadeUpStrong(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="space-y-12">
        {/* TENTANG SAYA */}
        <motion.div
          className="space-y-4"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-slate-100">
            Tentang Saya
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-4xl">
            Saya adalah seorang web developer yang fokus pada pembangunan
            antarmuka modern, aksesibel, dan performan. Saya menyukai proses
            menerjemahkan ide menjadi produk digital yang nyata, rapi, dan mudah
            digunakan.
          </p>

          <p className="text-slate-300 leading-relaxed max-w-4xl">
            Di luar coding, saya senang mempelajari tren desain, mengeksplorasi
            tools baru, dan mengembangkan kebiasaan kerja yang efektif untuk
            tim.
          </p>
        </motion.div>

        {/* EXPERIENCE SECTION */}
        <motion.div
          className="space-y-6"
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-slate-100">
            Experience's
          </h3>

          {/* SLIDER */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: [0, -1400] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedExperiences.map((exp, index) => (
                <motion.div
                  key={`${exp.role}-${index}`}
                  className="min-w-[700px] max-w-[700px] min-h-[240px] rounded-lg border border-slate-800 bg-slate-900/60 p-6 shadow-xl flex-shrink-0 flex flex-col"
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  }}
                >
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <h4 className="text-base font-semibold text-slate-100 mb-2">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-teal-300 mb-1">
                        {exp.company}
                      </p>
                      <p className="text-xs text-slate-400">{exp.period}</p>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed flex-1">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
