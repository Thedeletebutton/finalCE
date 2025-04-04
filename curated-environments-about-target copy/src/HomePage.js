
import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-20 h-20" />
          <span className="text-xl font-bold">Curated Environments</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <section className="bg-black text-white py-20 px-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/logo.png" alt="Curated Environments Logo" className="w-60 h-60 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Spaces That Inspire. Studios That Perform.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Custom creative environments for content creators, musicians, and remote professionals—bridging space, tech, and personal brand.
          </p>
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Curated Environments is a premium studio-building and multimedia workspace consultancy.
          We craft custom environments tailored to the needs of content creators, musicians, and remote professionals —
          blending interior design, technology, and brand strategy. Now based in Amsterdam, we serve clients across
          Europe and the U.S., helping them create spaces that inspire, perform, and grow.
        </p>
        <div className="max-w-2xl mx-auto text-left">
          <h3 className="text-2xl font-semibold mb-2">Who We Work With</h3>
          <ul className="list-disc ml-6 text-lg text-gray-800 space-y-1">
            <li>Content Creators (streamers, podcasters, YouTubers)</li>
            <li>Musicians & Producers</li>
            <li>Remote Professionals & Freelancers</li>
            <li>Creative Startups & Agencies</li>
            <li>Coworking Hubs and Shared Spaces</li>
          </ul>
        </div>
      </section>

      <section id="socials" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
        <div className="flex flex-col gap-4 text-lg text-blue-600">
          <a href="https://www.youtube.com/@CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
          <a href="https://www.instagram.com/CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://www.facebook.com/CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://www.tiktok.com/@CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
          <a href="https://www.twitch.tv/CuratedEnvironments" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitch</a>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Curate Your Space</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg">Tell us a bit about your project and we’ll reach out for a personalized consultation.</p>
        <form name="contact" method="POST" data-netlify="true" action="/thank-you" className="max-w-xl mx-auto grid gap-4 text-left">
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
