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
    role: "Staff Ahli Divisi PSDM",
    company: "KBMDSI FILKOM UB",
    period: "2024",
    desc: "Merancang dan melaksanakan program kerja berbasis pengembangan sumber daya manusia, memberikan bimbingan dan evaluasi, serta mengembangkan kemampuan komunikasi dan kepemimpinan untuk menunjang operasional program.",
  },
  {
    role: "Bendahara",
    company: "FORTERY",
    period: "2024",
    desc: "Mengelola seluruh operasional keuangan acara, termasuk penganggaran, pelacakan pengeluaran, alokasi dana, serta memastikan kegiatan berjalan lancar dan sesuai rencana.",
  },
  {
    role: "Bendahara",
    company: "ASCEND",
    period: "2025",
    desc: "Bertanggung jawab atas perencanaan keuangan acara, memantau pengeluaran, serta menjaga stabilitas finansial dengan pengelolaan dan pencatatan keuangan yang rapi.",
  },
  {
    role: "Wakil Ketua Divisi Operasional",
    company: "PEMILWA FILKOM UB",
    period: "2024",
    desc: "Mengawasi dan mengelola aspek logistik serta operasional pemilihan, mengoordinasikan pelaksanaan acara di lapangan, dan berkolaborasi dengan Panitia Dosen untuk menjaga efisiensi dan transparansi kegiatan.",
  },
  {
    role: "Wakil Ketua Divisi Perlengkapan",
    company: "PKKMB & SA FILKOM UB",
    period: "2025 - Sekarang",
    desc: "Mengawasi pengadaan, manajemen, dan pemeliharaan peralatan untuk mendukung kelancaran acara serta bertanggung jawab atas inventarisasi dan distribusi logistik ke seluruh divisi terkait.",
  },
  {
    role: "Asisten Praktikum – Dasar Pengembangan Sistem Informasi ",
    company: "Fakultas Ilmu Komputer Universitas Brawijaya",
    period: "2025 - Sekarang",
    desc: "Mengawasi jalannya praktikum, mendampingi mahasiswa dalam penggunaan teknis software, serta menjaga ketertiban dan ketepatan prosedur selama sesi praktikum.",
  },
];

function About() {
  // Hitung total lebar konten untuk seamless loop
  const cardWidth = 700; // min-w-[700px]
  const gap = 16; // gap-4 = 1rem = 16px
  const totalWidth = (cardWidth + gap) * experiences.length;

  const duplicatedExperiences = [...experiences, ...experiences];

  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24 py-12"
      variants={fadeUpStrong(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
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
          <h2 className="text-6xl font-semibold text-center text-teal-300 text-shadow-amber-200 p-2"
          style={{ textShadow: '2px 2px 1px white' }}>
            About Me
          </h2>

          <p className="text-slate-300 text-center text-xl leading-relaxed">
            I am a web developer focused on building modern, accessible, and
            high-performance interfaces. I enjoy turning ideas into polished,
            functional digital products that are intuitive and user-friendly.
          </p>

          <p className="text-slate-300 text-center text-xl leading-relaxed">
            Beyond coding, I love exploring design trends, experimenting with
            new tools, and cultivating effective work habits that enhance team
            collaboration.
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
              animate={{ x: [0, -totalWidth] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
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
                      <h4 className=" text-2xl font-semibold text-slate-100 mb-2">
                        {exp.role}
                      </h4>
                      <p className="text-xl font-medium text-teal-300 mb-1">
                        {exp.company}
                      </p>
                      <p className="text-lg text-slate-400">{exp.period}</p>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed flex-1">
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
