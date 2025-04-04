
import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-lg font-bold">Curated Environments</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <section className="bg-black text-white py-20 px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/logo.png" alt="Curated Environments Logo" className="w-32 h-32 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Spaces That Inspire. Studios That Perform.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Custom creative environments for content creators, musicians, and remote professionals—bridging space, tech, and personal brand.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Curate Your Space</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg">Tell us a bit about your project and we’ll reach out for a personalized consultation.</p>
        <form name="contact" method="POST" data-netlify="true" className="max-w-xl mx-auto grid gap-4 text-left">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="border rounded-xl p-3" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="border rounded-xl p-3" required />
          <input type="text" name="service" placeholder="What do you need help with?" value={formData.service} onChange={handleChange} className="border rounded-xl p-3" />
          <textarea name="message" placeholder="Tell us more about your space, goals, or timeline..." value={formData.message} onChange={handleChange} className="border rounded-xl p-3" rows={5}></textarea>
          <button type="submit" className="bg-black text-white font-semibold px-6 py-3 rounded-2xl shadow">Submit</button>
        </form>
      </section>
    </main>
  );
}
