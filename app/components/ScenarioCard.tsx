import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

type ScenarioCardProps = {
  title: string;
  description: string;
  prompts: readonly string[];
  toneLabel: string;
};

export default function ScenarioCard({ title, description, prompts, toneLabel }: ScenarioCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-700">
          <ClipboardDocumentIcon className="h-4 w-4" />
          {toneLabel}
        </span>
      </div>
      <ul className="mt-4 space-y-3 text-sm text-slate-700">
        {prompts.map((prompt) => (
          <li key={prompt} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-3">
            {prompt}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-500">انسخ أي صياغة ثم أضف تفاصيلك الشخصية لتكون أكثر دقة.</p>
    </article>
  );
}
