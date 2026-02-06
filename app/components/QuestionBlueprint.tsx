import { CheckCircleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type QuestionBlueprintProps = {
  blueprint: {
    intro: string;
    topic: string;
    detail: string;
    toneMessage: string;
    audience: string;
  };
  finalQuestion: string;
  tone: string;
  goalTitle: string;
  audience: string;
};

export default function QuestionBlueprint({ blueprint, finalQuestion, tone, goalTitle, audience }: QuestionBlueprintProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalQuestion);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Clipboard copy failed", error);
    }
  };

  return (
    <div className="space-y-4 rounded-3xl border border-primary-200 bg-white p-6 shadow-sm shadow-primary-100/60">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-primary-700">المخطط النهائي لسؤالك</h3>
          <p className="mt-1 text-xs text-slate-500">هدف: {goalTitle} • الجمهور: {audience || "—"} • النبرة: {tone}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring focus-visible:ring-primary-400 ${
            copied
              ? "bg-emerald-500 text-white shadow"
              : "bg-primary-600 text-white shadow shadow-primary-400/40 hover:bg-primary-700"
          }`}
        >
          {copied ? <CheckCircleIcon className="h-4 w-4" /> : <DocumentDuplicateIcon className="h-4 w-4" />} 
          {copied ? "تم النسخ" : "انسخ السؤال"}
        </button>
      </header>

      <div className="grid gap-3 text-sm text-slate-700">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
          <strong className="text-slate-900">افتتاحية مقترحة:</strong> {blueprint.intro}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
          <strong className="text-slate-900">الموضوع:</strong> {blueprint.topic}
        </div>
        {blueprint.detail && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3 whitespace-pre-line">
            <strong className="text-slate-900">التفاصيل:</strong> {blueprint.detail}
          </div>
        )}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
          <strong className="text-slate-900">رسالة ختامية:</strong> {blueprint.toneMessage}
        </div>
      </div>

      <section>
        <h4 className="text-sm font-semibold text-slate-900">النص النهائي</h4>
        <pre className="mt-2 whitespace-pre-wrap rounded-2xl border border-slate-200 bg-gradient-to-br from-primary-50/70 to-white p-4 text-sm leading-relaxed text-slate-800">
{finalQuestion}
        </pre>
      </section>
    </div>
  );
}
