import { motion } from "framer-motion";

const experiences = [
  {
    role: "Front-end Developer",
    company: "Nama Perusahaan A",
    period: "2024-01-15 - Sekarang",
    desc:
      "Bertanggung jawab untuk membangun antarmuka responsif, berkolaborasi dengan tim desain, dan meningkatkan performa aplikasi web.",
  },
  {
    role: "UI/UX Intern",
    company: "Nama Perusahaan B",
    period: "2023-06-01 - 2023-12-31",
    desc:
      "Membantu riset pengguna, membuat wireframe dan prototipe, serta menguji pengalaman pengguna untuk berbagai produk digital.",
  },
  {
    role: "Web Developer Intern",
    company: "Nama Perusahaan C",
    period: "2022-08-15 - 2023-05-30",
    desc:
      "Mengembangkan fitur-fitur baru untuk website perusahaan dan mempelajari best practices dalam pengembangan web modern.",
  },
  {
    role: "Backend Developer",
    company: "Nama Perusahaan D",
    period: "2022-01-10 - 2022-08-01",
    desc:
      "Membangun API RESTful dan mengelola database untuk berbagai aplikasi perusahaan.",
  },
  {
    role: "Software Engineering Intern",
    company: "Nama Perusahaan E",
    period: "2021-06-15 - 2021-12-20",
    desc:
      "Belajar fundamental programming dan berpartisipasi dalam pengembangan proyek internal perusahaan.",
  },
];

function About() {
  // Duplikasi array untuk infinite loop effect
  const duplicatedExperiences = [...experiences, ...experiences];

  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24 py-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="space-y-12">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-slate-100">Tentang Saya</h2>
          <p className="text-slate-300 leading-relaxed max-w-4xl">
            Saya adalah seorang web developer yang fokus pada pembangunan antarmuka
            modern, aksesibel, dan performan. Saya menyukai proses menerjemahkan ide
            menjadi produk digital yang nyata, rapi, dan mudah digunakan.
          </p>
          <p className="text-slate-300 leading-relaxed max-w-4xl">
            Di luar coding, saya senang mempelajari tren desain, mengeksplorasi tools
            baru, dan mengembangkan kebiasaan kerja yang efektif untuk tim.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-slate-100">Experience's</h3>
          
          {/* Container dengan overflow hidden */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1400], // Adjusted for narrower cards
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30, // Durasi untuk satu loop penuh (semakin besar semakin lambat)
                  ease: "linear",
                },
              }}
            >
              {duplicatedExperiences.map((exp, index) => (
                <motion.div
                  key={`${exp.role}-${exp.company}-${index}`}
                  className="min-w-[500px] max-w-[350px] min-h-[240px] rounded-lg border border-slate-800 bg-slate-900/60 p-6 shadow-xl flex-shrink-0 flex flex-col"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <h4 className="text-base font-semibold text-slate-100 mb-2 leading-tight">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-teal-300 mb-1">{exp.company}</p>
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