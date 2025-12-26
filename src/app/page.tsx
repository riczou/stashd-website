import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Stashd" width={40} height={40} className="rounded-lg" />
          <span className="text-xl font-bold">Stashd</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-muted hover:text-foreground transition-colors">Pricing</a>
          <a href="#download" className="bg-primary hover:bg-primary-dark text-background font-semibold px-4 py-2 rounded-lg transition-colors">
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-card border border-card-border rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-sm text-muted">Now available on iOS</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Save workouts.<br />
          <span className="text-primary">Get fit.</span>
        </h1>

        <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
          Save workout videos from TikTok, Instagram, and YouTube. Our AI extracts exercises, sets, and reps so you can build routines and track progress.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#download"
            className="flex items-center gap-3 bg-foreground text-background px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
        </div>

        {/* App Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Screenshot 1 */}
            <div className="hidden md:block transform translate-y-8">
              <div className="bg-card border border-card-border rounded-[40px] p-2 shadow-2xl overflow-hidden">
                <Image
                  src="/screenshot-1.png"
                  alt="Stashd app - Save workouts"
                  width={300}
                  height={650}
                  className="rounded-[32px] w-full h-auto"
                />
              </div>
            </div>

            {/* Screenshot 2 - Center/Featured */}
            <div className="transform md:scale-105 z-10">
              <div className="bg-card border border-card-border rounded-[40px] p-2 shadow-2xl overflow-hidden">
                <Image
                  src="/screenshot-2.png"
                  alt="Stashd app - Workout details"
                  width={300}
                  height={650}
                  className="rounded-[32px] w-full h-auto"
                />
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="hidden md:block transform translate-y-8">
              <div className="bg-card border border-card-border rounded-[40px] p-2 shadow-2xl overflow-hidden">
                <Image
                  src="/screenshot-3.png"
                  alt="Stashd app - Track progress"
                  width={300}
                  height={650}
                  className="rounded-[32px] w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share a workout video",
      description: "Find a workout on TikTok, Instagram, or YouTube and share it to Stashd.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "AI extracts the workout",
      description: "Our AI analyzes the video and identifies exercises, sets, reps, and rest times.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Build your routine",
      description: "Organize workouts into a weekly routine or let AI create one for you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Track your progress",
      description: "Log your workouts, track PRs, and watch yourself get stronger.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From scrolling to gains in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
              <div className="relative bg-card border border-card-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <div className="text-primary font-mono text-sm mb-4">{step.number}</div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Save from anywhere",
      description: "TikTok, Instagram, YouTube - save workout videos from all your favorite platforms with one tap.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
    {
      title: "AI-powered analysis",
      description: "Our AI watches the video and extracts every exercise, set count, rep count, and rest period.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Weekly routines",
      description: "Build your perfect weekly routine by organizing saved workouts or let AI create one for you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "AI trainer chat",
      description: "Get personalized advice, form tips, and workout modifications from your AI personal trainer.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Progress tracking",
      description: "Log every workout, track personal records, and visualize your strength gains over time.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Works offline",
      description: "Your workouts are saved locally so you can access them at the gym without internet.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            All the tools to turn random workout videos into real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-card-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Get started with the basics",
      features: [
        "3 workout saves per week",
        "AI exercise extraction",
        "Basic workout organization",
        "View workout history",
      ],
      cta: "Download Free",
      popular: false,
    },
    {
      name: "Pro Monthly",
      price: "$9.99",
      period: "/month",
      description: "For serious fitness enthusiasts",
      features: [
        "Unlimited workout saves",
        "AI weekly routine generator",
        "Personal AI trainer chat",
        "Progress tracking & PRs",
        "Priority support",
      ],
      cta: "Start Pro",
      popular: false,
    },
    {
      name: "Pro Annual",
      price: "$59.99",
      period: "/year",
      description: "Best value - save 50%",
      features: [
        "Everything in Pro Monthly",
        "Save $60 per year",
        "Lock in this price forever",
        "Early access to new features",
        "Priority support",
      ],
      cta: "Start Pro Annual",
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple pricing</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Start free, upgrade when you&apos;re ready to get serious
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-8 ${
                plan.popular
                  ? 'border-primary shadow-lg shadow-primary/10'
                  : 'border-card-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-1">{plan.name}</h3>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary text-background hover:bg-primary-dark'
                    : 'bg-card-border text-foreground hover:bg-muted/20'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="download" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-3xl p-12">
          <Image src="/logo.png" alt="Stashd" width={80} height={80} className="mx-auto mb-6 rounded-2xl" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to level up?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Stop losing workout videos in your saved folder. Start building real routines and tracking real progress.
          </p>

          <a
            href="https://apps.apple.com/app/stashd"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Stashd" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold">Stashd</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:support@stashdapp.io" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Stashd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
