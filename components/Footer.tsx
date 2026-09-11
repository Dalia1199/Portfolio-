import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-wide flex-col items-center gap-1 px-6 py-8 text-center text-xs text-ink-faint sm:flex-row sm:justify-between sm:px-10">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
