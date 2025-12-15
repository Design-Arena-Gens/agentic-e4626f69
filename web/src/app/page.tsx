const features = [
  {
    title: "Certified Instructors",
    description:
      "Learn with native Arabic tutors who are ijazah-certified and experienced in guiding students of every age.",
    icon: "🎓",
  },
  {
    title: "Personalized Roadmaps",
    description:
      "We assess your recitation, tajwīd, and memorization goals to design a weekly plan that fits your pace and schedule.",
    icon: "🛤️",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Live 1:1 or small group sessions available 7 days a week with timezone-aware reminders and reschedule support.",
    icon: "🕒",
  },
];

const tracks = [
  {
    name: "Beginner Recitation",
    description:
      "Master the Arabic letters, pronunciation (makhārij), and foundational tajwīd in a supportive setting.",
    duration: "12-week guided journey",
  },
  {
    name: "Memorization Mentorship",
    description:
      "Structured hifz plan with weekly checkpoints, revision cycles, and audio feedback between lessons.",
    duration: "Custom pacing",
  },
  {
    name: "Tajwīd Certification",
    description:
      "Deep dive into advanced tajwīd rules, articulation, and ijazah preparation with senior teachers.",
    duration: "Accelerated or standard tracks",
  },
];

const testimonials = [
  {
    quote:
      "Within three months my recitation transformed. The patient coaching and feedback after each session made the difference.",
    name: "Hania A.",
    role: "Hifz Student, UK",
  },
  {
    quote:
      "My children look forward to every class. The tutors blend storytelling, tajwīd, and memorization beautifully.",
    name: "Imran K.",
    role: "Parent of 2 students, Canada",
  },
  {
    quote:
      "As an adult learner with a busy schedule, the flexible timings and recorded notes helped me stay consistent.",
    name: "Yasmin R.",
    role: "Professional, UAE",
  },
];

const faqs = [
  {
    question: "Are classes suitable for complete beginners?",
    answer:
      "Yes. We begin with letter recognition, pronunciation drills, and foundational tajwīd before moving toward fluent recitation.",
  },
  {
    question: "Do you offer trial lessons?",
    answer:
      "Every new student receives a complimentary 30-minute assessment and trial session to experience the platform and tutors.",
  },
  {
    question: "How are tutors vetted?",
    answer:
      "Each tutor is ijazah-certified, interviewed for teaching methodology, and trained in delivering engaging online lessons.",
  },
  {
    question: "Can siblings share a package?",
    answer:
      "Yes. Family plans let you allocate lesson credits between siblings with no additional fees.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.35),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,118,110,0.08)_0%,_transparent_45%,_rgba(16,185,129,0.12)_90%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-14 sm:px-10 sm:pt-16 lg:flex lg:items-center lg:gap-16 lg:px-16 lg:pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-200">
              Elevate your recitation with expert tutors
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Online Quran Tutoring Academy for Every Age and Journey
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-100/80">
              Join a global community of learners mastering tajwīd, memorization,
              and heartfelt recitation. Live interactive lessons, progress
              tracking, and compassionate instructors keep you motivated every
              step.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enroll"
                className="rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02] hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200"
              >
                Book a Free Trial
              </a>
              <a
                href="#curriculum"
                className="rounded-full border border-emerald-500/40 px-6 py-3 text-base font-semibold text-emerald-100 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                View Programs
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-emerald-100/70">
              <div>
                <span className="font-semibold text-emerald-100">4.9/5</span>{" "}
                rating across 1,200+ sessions
              </div>
              <div>
                Trusted by learners in{" "}
                <span className="font-semibold text-emerald-100">25+ countries</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid flex-1 gap-6 text-slate-900 sm:grid-cols-2 lg:mt-0">
            <div className="rounded-3xl border border-white/10 bg-white/15 p-6 backdrop-blur-lg lg:translate-y-8">
              <h3 className="text-lg font-semibold text-white">
                Weekly Progress Snapshot
              </h3>
              <p className="mt-3 text-sm text-emerald-100/80">
                Lesson recap, tajwīd checkpoints, and home assignments delivered
                after every session.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-emerald-100/80">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                    1
                  </span>
                  Accurate pronunciation drills
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                    2
                  </span>
                  Memorization review &amp; retention score
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                    3
                  </span>
                  Personalized next steps
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
              <h3 className="text-lg font-semibold text-white">
                Student Success Metrics
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <div className="text-sm text-emerald-200/80">Hifz Review</div>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-3xl font-semibold text-emerald-300">
                      88%
                    </span>
                    <span className="text-xs text-emerald-200/60">
                      consistency increase
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-4">
                  <div className="text-sm text-emerald-200/80">Tajwīd Accuracy</div>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-3xl font-semibold text-emerald-300">
                      92%
                    </span>
                    <span className="text-xs text-emerald-200/60">
                      mastery after 10 lessons
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-emerald-200/70">
                Progress tracking monitored by tutors and accessible inside your
                student dashboard.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-slate-950">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
            <div className="grid gap-10 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-emerald-500/5 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-500/10"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-emerald-100/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="curriculum"
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"
        >
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Choose the path that fits your Quran journey
              </h2>
              <p className="mt-4 text-lg text-emerald-100/80">
                Whether you are just beginning or refining ijazah-level skills,
                our tutors guide you through a proven curriculum enriched with
                reflective practice and regular assessments.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {tracks.map((track) => (
                <div
                  key={track.name}
                  className="flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-7 transition hover:border-emerald-300/60 hover:bg-emerald-500/10"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {track.name}
                  </h3>
                  <p className="mt-3 text-sm text-emerald-100/75">
                    {track.description}
                  </p>
                  <div className="mt-auto pt-6 text-sm font-semibold text-emerald-200">
                    {track.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                A learning rhythm that blends devotion and structure
              </h2>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8">
                <h3 className="text-lg font-semibold text-white">
                  Lesson Flow
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-emerald-100/80">
                  <li>Warm-up recitation with tajwīd corrections</li>
                  <li>Interactive memorization &amp; understanding activities</li>
                  <li>Reflection prompts to apply lessons in daily life</li>
                  <li>Actionable feedback and recitation recording</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/5 bg-white/5 p-8">
                <h3 className="text-lg font-semibold text-white">
                  Platform Features
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-emerald-100/80">
                  <li>Secure classroom with HD streaming and dual camera views</li>
                  <li>Lesson recordings and notes accessible anytime</li>
                  <li>Parent dashboard with weekly recitation summaries</li>
                  <li>WhatsApp reminders plus optional SMS alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Stories from our students
              </h2>
              <p className="mt-4 text-lg text-emerald-100/80">
                Real transformation from learners who trusted the journey and
                stayed consistent with our tutors.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-7"
                >
                  <blockquote className="text-sm leading-relaxed text-emerald-100/85">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-auto pt-6 text-sm font-semibold text-emerald-200">
                    {testimonial.name}
                    <div className="text-xs font-normal text-emerald-100/70">
                      {testimonial.role}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Simple pricing that adapts to your family
                </h2>
                <p className="mt-4 text-lg text-emerald-100/80">
                  Choose a plan today and upgrade or pause anytime. Every plan
                  includes session recordings, homework feedback, and ongoing
                  support between lessons.
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-3xl border border-emerald-400/40 bg-emerald-500/10 p-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">
                    $79
                  </span>
                  <span className="text-sm text-emerald-100/70">
                    per month · 4 live sessions
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-emerald-100/85">
                  <li>Dedicated tutor matched after assessment</li>
                  <li>Flexible rescheduling up to 12 hours prior</li>
                  <li>Family sharing with lesson credit pooling</li>
                  <li>Bonus access to memorization resources library</li>
                </ul>
                <a
                  href="#enroll"
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-emerald-300"
                >
                  Explore family packages
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-tr from-slate-900 to-emerald-950">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <dl className="mt-10 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-white/5 bg-white/5 p-6"
                >
                  <dt className="text-lg font-semibold text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-emerald-100/80">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer
        id="enroll"
        className="relative overflow-hidden border-t border-emerald-500/20 bg-slate-950"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/15 p-10 backdrop-blur-md sm:p-14">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to begin your Quran journey?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-emerald-100/85">
              Schedule a free assessment call. We&apos;ll learn about your goals,
              match you with a tutor, and send a personalized learning plan
              within 24 hours.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@quranacademy.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-emerald-900 transition hover:scale-[1.02] hover:bg-emerald-100"
              >
                Email hello@quranacademy.com
              </a>
              <a
                href="https://wa.me/1234567890"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:text-emerald-200"
              >
                Chat with an advisor
              </a>
            </div>
            <p className="mt-6 text-sm text-emerald-100/70">
              Open 7 days a week · 6am – 10pm GMT · Sessions in English or Arabic
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 text-sm text-emerald-100/70 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Nur Al-Quran Academy. All rights reserved.</div>
            <div className="flex gap-6">
              <a
                href="#"
                className="transition hover:text-emerald-200"
              >
                Terms
              </a>
              <a
                href="#"
                className="transition hover:text-emerald-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="transition hover:text-emerald-200"
              >
                Student Portal
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
