import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-primary-50 via-white to-primary-100 p-10 shadow-sm">
      <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="absolute -bottom-32 -right-10 h-64 w-64 rounded-full bg-primary-300/40 blur-3xl" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/15 px-4 py-2 text-sm font-semibold text-primary-700">
            🎯 خطوات عملية لصياغة أسئلة واضحة
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            كيف أسأل؟ اطرح سؤالك بثقة واحصل على إجابات دقيقة
          </h1>
          <p className="text-lg leading-relaxed text-slate-700">
            منصة تفاعلية باللغة العربية تساعدك على بناء سؤال قوي وواضح في ثلاث خطوات بسيطة: تحديد الهدف، صياغة السؤال، ثم إنهاءه بتفاصيل تجعل الإجابة أسهل.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="rounded-full bg-white/70 px-4 py-2 shadow-sm">
              ✅ أمثلة جاهزة في مواقف متعددة
            </div>
            <div className="rounded-full bg-white/70 px-4 py-2 shadow-sm">
              ✅ نصائح للصياغة باحترافية
            </div>
            <div className="rounded-full bg-white/70 px-4 py-2 shadow-sm">
              ✅ حرر سؤالك النهائي بضغطة زر
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#workshop"
              className="group rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-700"
            >
              ابدأ بصياغة سؤالك الآن
              <span className="mr-2 inline-block transition-transform group-hover:-translate-x-1">⬅️</span>
            </Link>
            <div className="text-sm text-slate-600">
              أكثر من 12 بطاقة سيناريو لتسهيل اختيار أسلوبك المناسب.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-primary-100 bg-white/90 p-6 shadow-xl shadow-primary-200">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-primary-700">
                مكوّن السؤال الذكي
              </h2>
              <p className="text-sm text-slate-600">
                اختر الهدف الرئيسي وعدّل اللغة والنبرة وشاهد كيف يتكوّن سؤالك خطوة بخطوة.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                  <strong className="text-slate-900">الهدف:</strong> الحصول على توضيح حول فكرة معقدة
                </li>
                <li className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                  <strong className="text-slate-900">النبرة:</strong> لبقة وودودة لتعزيز التعاون
                </li>
                <li className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                  <strong className="text-slate-900">السؤال النهائي:</strong> هل يمكن أن تشرح لي بشكل مبسط كيف تعمل هذه الآلية؟
                </li>
              </ul>
              <div className="text-xs text-slate-500">
                يمكنك نسخ الصياغة أو تحسينها عبر بطاقات السيناريو.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
