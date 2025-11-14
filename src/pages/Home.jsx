import { motion } from "framer-motion";
import { useState } from "react";
import profil from "../assets/profil.jpg";

function Home() {
  const [spinCount, setSpinCount] = useState(0);

  return (
    <section
      id="home"
      className="relative min-h-[75vh] flex items-center overflow-hidden scroll-mt-24"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/15 via-indigo-500/10 to-transparent blur-3xl"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 px-4 pt-12 sm:px-5 md:flex-row md:items-start md:gap-12 md:px-6 md:pt-0">
        <div className="w-full md:basis-[60%] space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-2 md:mt-6 text-sm uppercase tracking-[0.35em] text-teal-300"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-3xl font-bold text-slate-50 sm:text-4xl md:text-6xl"
          >
            Aditri Surya Nugraha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mx-auto max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg md:mx-0 md:text-xl"
          >
            I build thoughtful digital experiences with modern web technologies.
            Currently focused on crafting responsive interfaces, performant
            code, and delightful user journeys.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
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

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            type: "spring",
            stiffness: 150,
          }}
          className="w-full max-w-xs md:max-w-sm"
        >
          <motion.div
            onClick={() => setSpinCount(2)}
            animate={{ rotateY: spinCount > 0 ? 180 * 1 : 0 }}
            transition={{
              duration: 1.0,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => setSpinCount(0)}
            className="relative cursor-pointer"
          >
            <div className="relative mx-auto overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/50 p-4 shadow-[0_25px_50px_-12px_rgba(45,212,191,0.25)] sm:p-5">
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
                <p className="text-xs text-slate-400 sm:text-sm">
                  Front-end Developer
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
