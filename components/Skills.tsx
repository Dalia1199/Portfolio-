import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-raised/60">
      <div className="mx-auto max-w-wide px-6 py-20 sm:px-10 lg:py-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-lg border border-line bg-paper p-6">
              <p className="font-mono text-[0.7rem] text-accent">{group.route}</p>
              <h3 className="mt-1.5 text-sm font-semibold text-ink">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-line px-2.5 py-1 text-xs text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
