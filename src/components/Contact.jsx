import { useState } from "react";
import api from "../api/axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-white mb-2">Get In Touch</h2>
      <p className="text-gray-400 mb-8">Send me a message directly</p>

      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-4 max-w-xl">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-6 py-3 rounded-lg disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
}