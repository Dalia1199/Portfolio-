/**
 * Wraps occurrences of the given terms (tech names, key phrases) inside a
 * string with <strong> so important words stand out in longer prose.
 * Case-insensitive, whole-term match, longest terms matched first so a
 * phrase like "AWS S3" isn't partially matched inside a shorter term.
 */
export default function Highlight({
  text,
  terms,
}: {
  text: string;
  terms: string[];
}) {
  if (!terms || terms.length === 0) return <>{text}</>;

  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        sorted.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
