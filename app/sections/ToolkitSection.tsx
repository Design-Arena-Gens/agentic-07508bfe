const TIPS = [
  {
    title: "حدّد ما تريد بدقة",
    description:
      "كل سؤال قوي يبدأ بهدف واضح. هل تود فهم فكرة، الحصول على دعم، أو اتخاذ قرار؟ وضوح الهدف يقلل الالتباس."
  },
  {
    title: "اذكر السياق الأساسي",
    description:
      "ضع الشخص الآخر في الصورة. شارك خلفية مختصرة ثم أشر إلى التفاصيل التي تحتاج توضيحها بالتحديد."
  },
  {
    title: "اختر النبرة المناسبة",
    description:
      "النبرة الودية تفتح المجال للحوار، بينما الرسمية مناسبة للمخاطبات المهنية. عكس الإلحاح عند الحاجة يساعد على سرعة الرد."
  },
  {
    title: "اختم بتوقّع واضح",
    description:
      "وضّح ما تتوقعه بعد السؤال: إجابة مفصلة، موعد للاجتماع، أو رأي سريع. هذا يوجّه الطرف الآخر لما تحتاجه بالضبط."
  }
];

const CHECKLIST = [
  "حرّر الهدف في جملة واحدة",
  "اذكر السياق والخطوات السابقة",
  "وضّح ما تحتاجه بالتحديد",
  "اختر النبرة وصِغ ختامًا لطيفًا",
  "اقرأ السؤال بصوت مرتفع للتأكد من وضوحه"
];

export default function ToolkitSection() {
  return (
    <section className="space-y-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold text-slate-900">عدة الصياغة الاحترافية</h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
          استفد من هذه الخطوات المتسلسلة لضمان أن سؤالك متكامل وواضح وبأسلوب يترك أثرًا إيجابيًا لدى المتلقي.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <div className="grid gap-4 sm:grid-cols-2">
          {TIPS.map((tip) => (
            <article key={tip.title} className="rounded-2xl border border-primary-100 bg-primary-50/40 p-5 text-right">
              <h3 className="text-lg font-semibold text-primary-700">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{tip.description}</p>
            </article>
          ))}
        </div>
        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
          <h3 className="text-lg font-semibold text-slate-900">قائمة التحقق السريعة</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
