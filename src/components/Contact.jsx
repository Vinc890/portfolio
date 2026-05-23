import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ynswt8h",
        "template_sys2e3u",
        {
          from_name: form.name,
          to_name: "Vincent",
          from_email: form.email,
          to_email: "vinxent890@gmail.com",
          message: form.message,
        },
        "fLQ-w1Mi7GJlDlAtT",
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "TRANSMISSION SUCCESSFUL. I will respond to your signal shortly.",
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(
            "TRANSMISSION FAILED. Please verify your connection status and try again.",
          );
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-stretch pb-10`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#121316]/30 backdrop-blur-md p-8 border border-white/5 rounded-3xl select-none shadow-2xl relative"
      >
        <p className={styles.sectionSubText}>[ CONVERSE // CONTACT ]</p>
        <h3 className={styles.sectionHeadText}>LET'S_CONNECT.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium text-[13px] tracking-wide mb-2.5">
              Your Name:
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="ENTER YOUR NAME OR DESIGNATION..."
              required
              className="bg-[#080809]/40 border border-white/10 p-4 placeholder:text-secondary/50 text-white rounded-xl outline-none font-light text-[14px] tracking-wide focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium text-[13px] tracking-wide mb-2.5">
              Your Email Address:
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ENTER YOUR CONTACT EMAIL..."
              required
              className="bg-[#080809]/40 border border-white/10 p-4 placeholder:text-secondary/50 text-white rounded-xl outline-none font-light text-[14px] tracking-wide focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium text-[13px] tracking-wide mb-2.5">
              Message Details:
            </span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="COMPILE TRANSMISSION DETAILS..."
              required
              className="bg-[#080809]/40 border border-white/10 p-4 placeholder:text-secondary/50 text-white rounded-xl outline-none font-light text-[14px] tracking-wide focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none"
            />
          </label>

          <button type="submit" className="titanium-btn w-fit py-3.5 px-8 mt-4">
            {loading ? "Please Wait." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] rounded-3xl border border-white/5 bg-[#121316]/20 backdrop-blur-xl shadow-2xl relative flex flex-col overflow-hidden"
      >
        <div className="border-b border-white/5 px-6 py-3.5 flex justify-between items-center text-[11px] font-medium tracking-widest text-secondary bg-[#121316]/40 select-none" />

        <div className="flex-1 w-full relative">
          <EarthCanvas />
        </div>

        <div className="border-t border-white/5 px-6 py-3 flex justify-between items-center text-[10px] font-light tracking-wide text-secondary/80 bg-black/10" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
