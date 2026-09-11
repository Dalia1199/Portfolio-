import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-wide px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-content text-center">
          <p className="font-mono text-xs text-accent">POST /contact</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a project or opportunity in mind?
          </h2>
          <p className="mt-2 text-lg text-ink-soft">Let&rsquo;s connect.</p>
          <p className="mt-4 text-sm text-ink-faint">{profile.availability}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={profile.links.email}
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href={profile.links.phone}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
            <a
              href={profile.links.linkedin}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
