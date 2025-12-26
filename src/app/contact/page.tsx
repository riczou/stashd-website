"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sendContactEmail } from "../actions/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Stashd" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold">Stashd</span>
          </Link>
        </nav>
      </header>

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted text-lg">
              Have a question, feedback, or need help? We&apos;d love to hear from you.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
              <p className="text-muted mb-6">
                Thanks for reaching out. We&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="General Question">General Question</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Subscription Help">Subscription Help</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href="mailto:team@stashdapp.io" className="underline">
                    team@stashdapp.io
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-background font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-card-border">
            <p className="text-center text-muted text-sm">
              You can also reach us directly at{" "}
              <a href="mailto:team@stashdapp.io" className="text-primary hover:underline">
                team@stashdapp.io
              </a>
            </p>
          </div>

          <div className="mt-8">
            <Link href="/" className="text-primary hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Stashd" width={32} height={32} className="rounded-lg" />
              <span className="font-semibold">Stashd</span>
            </div>
            <div className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Stashd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
