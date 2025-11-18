import { motion } from "framer-motion";
import { useState } from "react";
import profil from "../assets/profil.jpg";

// Variants reusable
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  },
});

const fadeUpStrong = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7 },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay,
      duration: 0.6,
      type: "spring",
      stiffness: 150,
    },
  },
});

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[75vh] flex items-center overflow-hidden scroll-mt-24"
    >
      {/* Background floating gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/15 via-indigo-500/10 to-transparent blur-3xl"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-4 pt-12 sm:px-5 md:flex-row md:items-start md:gap-12 md:px-6 md:pt-0">
        {/* LEFT TEXT SECTION */}
        <div className="w-full md:basis-[60%] space-y-6 text-center md:text-left">
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="mt-2 md:mt-6 text-lg uppercase tracking-[0.35em] text-teal-300"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUpStrong(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="text-3xl font-bold text-slate-50 sm:text-4xl md:text-6xl"
          >
            Aditri Surya Nugraha
          </motion.h1>

          <motion.p
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="mx-auto max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg md:mx-0 md:text-xl"
          >
            Crafting innovative digital experiences through technology,
            combining system design, development, and practical problem-solving
            to deliver impactful solutions.
          </motion.p>

          <motion.div
            variants={fadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            className="flex w-full flex-col gap-3 pt-3 sm:flex-row sm:gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/30 transition sm:w-auto"
            >
              View Projects
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aditrisuryanugraha/"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-teal-300 hover:text-teal-200 sm:w-auto"
            >
              Let's Collaborate
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT FLIP CARD SECTION */}
        <motion.div
          variants={fadeRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          className="w-full max-w-xs md:max-w-sm"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            onClick={() => setIsFlipped(!isFlipped)}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* BACK SIDE - Click Me */}
            <div
              className="absolute inset-0 mx-auto rounded-3xl border border-slate-700/60 bg-gradient-to-br from-teal-500/20 via-indigo-500/20 to-slate-900/90 p-4 shadow-[0_25px_50px_-12px_rgba(45,212,191,0.25)] sm:p-5 flex items-center justify-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
            >
              <div className="text-center space-y-4">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-6xl sm:text-7xl"
                >
                  👆
                </motion.div>
                <p className="text-2xl sm:text-3xl font-bold text-teal-300">
                  Click Me!
                </p>
                <p className="text-sm text-slate-400">Discover who I am</p>
              </div>
            </div>

            {/* FRONT SIDE - Profile Photo */}
            <div
              className="relative mx-auto overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/50 p-4 shadow-[0_25px_50px_-12px_rgba(45,212,191,0.25)] sm:p-5"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              <img
                src={profil}
                alt="Profile portrait"
                className="h-full w-full rounded-2xl object-cover"
              />

              <div className="mt-4 text-center">
                <p className="text-base font-semibold text-slate-100 sm:text-lg">
                  Aditri Surya Nugraha
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
