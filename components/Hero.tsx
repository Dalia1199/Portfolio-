import { ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import Highlight from "./Highlight";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-wide px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:pb-28 lg:pt-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-rise">
          <p className="font-mono text-xs text-accent">whoami</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Hi, I&rsquo;m Dalia Shabana
          </h1>
          <p className="mt-3 text-xl font-medium text-ink-soft sm:text-2xl">
            Backend Developer
          </p>
          <p className="mt-6 max-w-content text-base leading-relaxed text-ink-soft sm:text-lg">
            <Highlight text={profile.tagline} terms={profile.taglineHighlightTerms} />
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.links.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <FileDown size={16} />
              Download CV
            </a>
            <a
              href={profile.links.github}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.links.email}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        <div
          className="animate-rise rounded-lg border border-line bg-ink font-mono text-[0.8rem] leading-relaxed text-paper shadow-[0_1px_0_rgba(0,0,0,0.03)] sm:text-sm"
          style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
          aria-hidden="true"
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-2 text-xs text-white/40">GET /developer</span>
          </div>
          <pre className="overflow-x-auto px-5 py-5">
{`{
  "status": 200,
  "role": "Backend Developer",
  "focus": "secure & scalable APIs",
  "stack": [
    "Node.js",
    "Express.js",
    "NestJS",
    "TypeScript"
  ],
  "database": ["MongoDB", "Redis"]
}`}
          </pre>
          <div className="flex items-center gap-2 border-t border-white/10 px-5 py-3 text-white/50">
            <span>$</span>
            <span className="inline-block h-4 w-2 animate-blink bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
