import { profile } from "@/lib/data";
import Highlight from "./Highlight";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-wide px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
          <div className="flex max-w-content flex-col gap-4">
            {profile.aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-ink"
                    : "text-base leading-relaxed text-ink-soft"
                }
              >
                <Highlight text={paragraph} terms={profile.aboutHighlightTerms} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
