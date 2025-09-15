"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home(): JSX.Element {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">XenoVillage</h1>
        <p className="text-xl max-w-2xl mb-6">
          Ground Zero for Humanity’s Next Civilization. A prototype community
          dedicated to consciousness, sustainability, and future-ready living.
        </p>
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
          Support the Village
        </Button>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">About XenoVillage</h2>
        <p className="max-w-3xl mx-auto text-lg">
          XenoVillage is the seed of the Xenogenisys vision — a living space and
          digital hub where humanity learns to build, sustain, and evolve a new
          type of civilization. Ground Zero is our starting point, where we
          gather minds, resources, and energy to design the future.
        </p>
      </section>

      {/* Support Section */}
      <section className="px-6 py-16 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-4">Support & Join</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Help us grow the foundation. Your support powers the community,
          projects, and future we’re building together.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600">Donate</Button>
          <Button className="bg-green-600 hover:bg-green-700">Volunteer</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Partner</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 text-white"
              />
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black text-gray-400 text-sm">
        © {new Date().getFullYear()} XenoVillage | Part of Xenogenisys
      </footer>
    </main>
  );
}

// API Route for sending emails with Nodemailer
// Save this as /src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Contact from XenoVillage (${name})`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
}

/*
  ⚠️ Setup instructions:
  - Run: npm install nodemailer
  - In .env.local, set:
      GMAIL_USER=nathimthunzini@gmail.com
      GMAIL_PASS=your_app_password (from Google App Passwords)
  - Deploy to Vercel with environment variables configured.
*/
