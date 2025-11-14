import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:aditrisurya@gmail.com",
    outline: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditrisuryanugraha/",
    outline: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/aditri.surya",
    outline: true,
  },
  {
    label: "Explore GitHub",
    href: "https://github.com/aditri24sn",
    outline: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const pop = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24"
       variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="rounded-3xl border border-slate-800 bg-slate-900/40 p-10 text-center shadow-xl/30"
        variants={pop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-semibold text-teal-300"
          style={{ textShadow: '2px 2px 1px white' }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="mt-4 text-slate-300 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          Feel free to reach out via the social media links below.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {contactLinks.map(({ label, href, bg, outline }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 220, damping: 12 }}
              className={`rounded-full px-6 py-3 transition ${
                outline
                  ? "border border-slate-600 text-slate-200 hover:border-teal-300 hover:text-teal-200"
                  : bg
              }`}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 text-xs uppercase tracking-[0.35em] text-slate-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.45, duration: 0.45 }}
        >
       
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
