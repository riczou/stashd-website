import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Stashd",
  description: "Terms of Service for Stashd - Read our terms and conditions for using the app.",
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted mb-8">Last updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted leading-relaxed">
                By downloading, installing, or using Stashd (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App. We reserve the right to modify these Terms at any time, and your continued use of the App constitutes acceptance of any modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted leading-relaxed">
                Stashd is a fitness application that allows users to save workout videos from social media platforms, analyze them using AI technology, build workout routines, and track fitness progress. The App provides both free and premium subscription features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-muted leading-relaxed mb-4">To use certain features of the App, you must create an account. You agree to:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payments</h2>

              <h3 className="text-xl font-medium mb-3 mt-6">4.1 Free Tier</h3>
              <p className="text-muted leading-relaxed">
                The free tier provides limited access to App features, including 3 workout saves per week.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">4.2 Pro Subscription</h3>
              <p className="text-muted leading-relaxed">
                Pro subscriptions are billed through the Apple App Store. Subscription prices are $9.99/month or $59.99/year. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">4.3 Refunds</h3>
              <p className="text-muted leading-relaxed">
                All purchases are processed through the Apple App Store and are subject to Apple&apos;s refund policies. We do not directly process refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
              <p className="text-muted leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Use the App for any unlawful purpose</li>
                <li>Share copyrighted content without authorization</li>
                <li>Attempt to reverse engineer or modify the App</li>
                <li>Interfere with the App&apos;s security features</li>
                <li>Use automated systems to access the App</li>
                <li>Impersonate others or provide false information</li>
                <li>Upload malicious content or viruses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Content and Intellectual Property</h2>

              <h3 className="text-xl font-medium mb-3 mt-6">6.1 Your Content</h3>
              <p className="text-muted leading-relaxed">
                You retain ownership of workout data and content you create. By using the App, you grant us a license to process your content to provide our services.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">6.2 Third-Party Content</h3>
              <p className="text-muted leading-relaxed">
                Workout videos you save are hosted on third-party platforms (TikTok, Instagram, YouTube). We do not host or store the actual video files. You are responsible for ensuring you have the right to save and use this content.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6">6.3 Our Content</h3>
              <p className="text-muted leading-relaxed">
                The App, including its design, features, and content, is protected by intellectual property laws. You may not copy, modify, or distribute our content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Health Disclaimer</h2>
              <p className="text-muted leading-relaxed">
                The App provides fitness information for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before starting any exercise program. We are not responsible for any injuries or health issues resulting from the use of workout information provided through the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. AI-Generated Content</h2>
              <p className="text-muted leading-relaxed">
                The App uses artificial intelligence to analyze workout videos and provide recommendations. AI-generated content may not always be accurate. We do not guarantee the correctness of exercise analysis, rep counts, or AI trainer advice. Always verify important information and use your judgment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, STASHD AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p className="text-muted leading-relaxed">
                You agree to indemnify and hold harmless Stashd and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the App or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
              <p className="text-muted leading-relaxed">
                We reserve the right to suspend or terminate your access to the App at any time, with or without cause, with or without notice. Upon termination, your right to use the App will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
              <p className="text-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p className="text-muted leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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
