"use client";

import { useMemo, useState } from "react";
import ScenarioCard from "../components/ScenarioCard";
import QuestionBlueprint from "../components/QuestionBlueprint";

const GOALS = [
  {
    id: "clarify",
    title: "الحصول على توضيح",
    description: "للسؤال عن أمر غير مفهوم أو فكرة معقدة",
    prompts: ["هل يمكن أن توضح لي...؟", "أحتاج إلى فهم أفضل لـ..."]
  },
  {
    id: "decision",
    title: "اتخاذ قرار",
    description: "لجمع معلومات تساعدك على الاختيار",
    prompts: ["ما هي الخيارات المتاحة لـ...؟", "ما إيجابيات وسلبيات..."]
  },
  {
    id: "feedback",
    title: "الحصول على رأي",
    description: "لتقييم عمل أو فكرة أو مشروع",
    prompts: ["ما رأيك في...؟", "كيف يمكن تحسين..."]
  },
  {
    id: "support",
    title: "طلب مساعدة",
    description: "للبحث عن حل أو دعم عملي",
    prompts: ["ما الخطوات لحل...؟", "هل يمكنك مساعدتي في..."]
  }
] as const;

const TONES = [
  { id: "formal", label: "رسمية ومحترفة" },
  { id: "friendly", label: "ودية وقريبة" },
  { id: "urgent", label: "عاجلة وسريعة" },
  { id: "inquisitive", label: "فضولية واستكشافية" }
] as const;

const DETAILS_HINTS: Record<string, string> = {
  clarify: "اذكر الجزء الذي يحتاج التوضيح، وأين واجهت الصعوبة.",
  decision: "حدد الخيارات المتاحة، وما يهمك في المفاضلة بينها.",
  feedback: "شارك الهدف من العمل وما تود تحسينه أو تقييمه.",
  support: "صف المشكلة الحالية وأي خطوات جرّبتها أو قيود لديك."
};

const MESSAGES: Record<string, string> = {
  formal:
    "أود معرفة تفاصيل إضافية لو تكرمت، حتى أتمكن من اتخاذ الخطوة المناسبة.",
  friendly: "يسعدني سماع رأيك وملاحظاتك كي نطوّر العمل معًا.",
  urgent:
    "الموضوع ملح بالنسبة لي، وأحتاج الإجابة في أقرب وقت لتدارك الموقف.",
  inquisitive:
    "أحب استكشاف المزيد حول هذه الفكرة، فكل معلومة إضافية ستساعدني على التعمّق." 
};

export default function QuestionWorkshop() {
  const [goalId, setGoalId] = useState<(typeof GOALS)[number]["id"]>(GOALS[0].id);
  const [toneId, setToneId] = useState<(typeof TONES)[number]["id"]>(TONES[1].id);
  const [topic, setTopic] = useState("الآلية الجديدة للتقارير الأسبوعية");
  const [detail, setDetail] = useState("أواجه صعوبة في فهم الخطوات الخاصة بمرحلة المراجعة الأخيرة.");
  const [audience, setAudience] = useState("زملائي في فريق العمليات");

  const goal = useMemo(() => GOALS.find((item) => item.id === goalId) ?? GOALS[0], [goalId]);
  const tone = useMemo(() => TONES.find((item) => item.id === toneId) ?? TONES[0], [toneId]);

  const blueprint = useMemo(() => {
    const intro = goal.prompts[0];
    const detailSentence = detail ? `\n\n${detail}` : "";
    const toneMessage = MESSAGES[tone.id];

    return {
      intro,
      topic,
      detail: detailSentence,
      toneMessage,
      audience
    };
  }, [detail, goal.id, tone.id, topic, audience]);

  const finalQuestion = useMemo(() => {
    const parts = [
      `${goal.prompts[0]} ${topic.trim()}؟`,
      detail ? detail.trim() : "",
      toneId === "urgent"
        ? "أحتاج الرد سريعًا إن أمكن."
        : toneId === "formal"
          ? "شاكر ومقدّر لتعاونكم."
          : toneId === "friendly"
            ? "ممتن لأي توجيهات منكم."
            : "أقدّر مشاركتكم لأي رؤى أو أمثلة."
    ].filter(Boolean);

    return parts.join(" \n\n");
  }, [detail, goal.id, toneId, topic]);

  return (
    <section id="workshop" className="space-y-10">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">ورشة بناء السؤال</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
          اتبع الخانات التالية لصياغة سؤالك بدقة، ثم انسخه أو شاركه مع الفريق. يمكنك تجربة أهداف مختلفة لتناسب الموقف الذي تمر به.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">1. اختر هدف سؤالك</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {GOALS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setGoalId(option.id)}
                  className={`rounded-2xl border px-4 py-3 text-start transition focus:outline-none focus-visible:ring focus-visible:ring-primary-400 ${
                    goalId === option.id
                      ? "border-primary-400 bg-primary-50/60 text-primary-700 shadow-sm"
                      : "border-slate-200 bg-white hover:border-primary-200"
                  }`}
                >
                  <div className="font-semibold">{option.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{option.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">2. الجمهور المستهدف</h3>
            <input
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="على سبيل المثال: مدير المشروع، فريق التسويق، الدعم الفني"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">3. موضوع السؤال</h3>
            <input
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200"
              placeholder="ما القضية أو الموضوع الذي تحتاج إجابة عنه؟"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">4. تفاصيل إضافية</h3>
            <textarea
              value={detail}
              onChange={(event) => setDetail(event.target.value)}
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary-400 focus:outline-none focus:ring focus:ring-primary-200"
              placeholder={DETAILS_HINTS[goalId]}
            />
            <p className="text-xs text-slate-500">كلما زادت التفاصيل، كان من السهل على الآخرين تقديم إجابة مناسبة.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">5. اختر النبرة المناسبة</h3>
            <div className="grid grid-cols-2 gap-3">
              {TONES.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setToneId(option.id)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring focus-visible:ring-primary-400 ${
                    toneId === option.id
                      ? "border-primary-400 bg-primary-50/70 text-primary-700"
                      : "border-slate-200 bg-white hover:border-primary-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <QuestionBlueprint
            blueprint={blueprint}
            finalQuestion={finalQuestion}
            audience={audience}
            tone={tone.label}
            goalTitle={goal.title}
          />

          <ScenarioCard
            title="اقتراحات جاهزة"
            description="تعثر على أمثلة معبّرة يمكنك تكييفها بسرعة لكل موقف."
            prompts={goal.prompts}
            toneLabel={tone.label}
          />
        </div>
      </div>
    </section>
  );
}
