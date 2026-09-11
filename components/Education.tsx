import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-line bg-raised/60">
      <div className="mx-auto max-w-wide px-6 py-20 sm:px-10 lg:py-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Education &amp; Training
        </h2>

        <div className="mt-10 flex flex-col gap-6">
          {education.map((entry) => (
            <div
              key={entry.school + entry.program}
              className={
                entry.secondary
                  ? "rounded-lg border border-line/70 p-6 sm:p-7"
                  : "rounded-lg border border-line bg-paper p-6 sm:p-8"
              }
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink-faint">
                  <GraduationCap size={15} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p
                      className={
                        entry.secondary
                          ? "text-sm font-medium text-ink-faint"
                          : "font-display text-base font-semibold text-ink sm:text-lg"
                      }
                    >
                      {entry.school}
                    </p>
                    {entry.period && (
                      <p className="font-mono text-xs text-ink-faint">{entry.period}</p>
                    )}
                  </div>
                  <p
                    className={
                      entry.secondary
                        ? "text-sm text-ink-faint"
                        : "mt-0.5 text-sm font-medium text-ink-soft"
                    }
                  >
                    {entry.program}
                  </p>
                  {entry.description && (
                    <p className="mt-3 max-w-content text-sm leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
