const SCENARIOS = [
  {
    title: "اجتماع مع المدير",
    context: "تحتاج إلى فهم توقعات المدير حول مشروع جديد",
    sample:
      "ما أبرز النتائج التي ترغب في رؤيتها من هذا المشروع خلال الربع القادم؟ وهل هناك معايير محددة للنجاح يجب أن نركز عليها؟"
  },
  {
    title: "استفسار من خدمة العملاء",
    context: "ترغب بمعرفة حالة طلب أو مشكلة تقنية",
    sample:
      "هل يمكنكم إخباري بحالة الطلب رقم 2456؟ أحتاج لمعرفة الخطوات التالية والوقت المتوقع للحل."
  },
  {
    title: "نقاش أكاديمي",
    context: "تسأل أستاذًا عن نقطة غير واضحة في المحاضرة",
    sample:
      "ذكرت في المحاضرة أن المفهوم يرتبط بنظرية الحقول الكهرومغناطيسية، هل يمكن توضيح العلاقة بمثال تطبيقي؟"
  },
  {
    title: "محادثة ودية",
    context: "تستفسر من صديق حول نصيحة شخصية",
    sample:
      "أفكر في الانتقال لمدينة جديدة للعمل، ما العوامل التي تنصح أن أضعها في الحسبان قبل اتخاذ القرار؟"
  },
  {
    title: "متابعة مع فريق العمل",
    context: "تحتاج تحديثًا عن تقدم مهمة مشتركة",
    sample:
      "أين وصلنا في إعداد عرض العميل لهذا الأسبوع؟ وهل تحتاجون لأي دعم إضافي لإكماله في الموعد؟"
  },
  {
    title: "بريد رسمي",
    context: "تخاطب جهة رسمية لطلب مستندات",
    sample:
      "أود الاستفسار عن المستندات المطلوبة لتجديد الترخيص السنوي، وهل يمكن تزويدي بالخطوات والمواعيد الزمنية المتوقعة؟"
  }
];

export default function ScenarioGrid() {
  return (
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold text-slate-900">بطاقات سيناريو جاهزة</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
          استخدم هذه النماذج السريعة لتستمد لغة السؤال الصحيحة حسب الموقف. يمكنك تعديل الكلمات لتناسب سياقك الخاص.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {SCENARIOS.map((scenario) => (
          <article
            key={scenario.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:border-primary-200 hover:shadow-md"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary-700">{scenario.title}</h3>
              <p className="text-sm text-slate-500">{scenario.context}</p>
            </div>
            <p className="mt-4 rounded-2xl border border-primary-100 bg-primary-50/50 p-4 text-sm leading-relaxed text-slate-800">
              {scenario.sample}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
