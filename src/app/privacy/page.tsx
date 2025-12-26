import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Stashd",
  description: "Privacy Policy for Stashd - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
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
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted mb-8">Last updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted leading-relaxed">
                Welcome to Stashd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data collection and use when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-medium mb-3 mt-6">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Account information (email address, display name)</li>
                <li>Workout video URLs you share with the app</li>
                <li>Custom workout notes and preferences</li>
                <li>Fitness goals and experience level</li>
                <li>Body weight and progress data (if you choose to track)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Device information (device type, operating system)</li>
                <li>App usage data (features used, session duration)</li>
                <li>Crash reports and performance data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and analyze workout videos using AI</li>
                <li>Generate personalized workout routines</li>
                <li>Track your fitness progress and personal records</li>
                <li>Send important updates about our service</li>
                <li>Respond to your support requests</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
              <p className="text-muted leading-relaxed">
                Your data is stored securely using industry-standard encryption. We use Supabase for our backend infrastructure, which provides enterprise-grade security. Workout data is synced across your devices and stored in the cloud, while also being cached locally for offline access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
              <p className="text-muted leading-relaxed mb-4">We may share data with the following third-party services:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li><strong>Supabase:</strong> Database and authentication services</li>
                <li><strong>OpenAI:</strong> AI-powered workout analysis and chat features</li>
                <li><strong>RevenueCat:</strong> Subscription management</li>
                <li><strong>Apple:</strong> App Store and in-app purchases</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and associated data</li>
                <li>Export your workout data</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p className="text-muted leading-relaxed">
                We retain your data for as long as your account is active or as needed to provide you services. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-muted leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-muted mt-4">
                <a href="mailto:support@stashdapp.io" className="text-primary hover:underline">
                  support@stashdapp.io
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <Link href="/" className="text-primary hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </article>

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
