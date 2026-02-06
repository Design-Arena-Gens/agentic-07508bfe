const FAQS = [
  {
    question: "متى أستخدم الصياغة الرسمية؟",
    answer:
      "يفضّل استخدام الصياغة الرسمية في المخاطبات المهنية، أو مع جهات رسمية، أو عند التواصل لأول مرة مع شخص لا تعرفه جيدًا. حافظ على لغة مهذبة ومباشرة، وأضف عبارات تقدير في البداية والنهاية."
  },
  {
    question: "هل يمكنني استخدام أسئلة المتابعة؟",
    answer:
      "بالطبع! بعد الحصول على إجابة أولية، يمكنك طرح سؤال متابعة يوضح ما زال غير واضح أو يطلب أمثلة إضافية. هذا يعمّق الفهم ويظهر تقديرك للرد."
  },
  {
    question: "كيف أوازن بين الإلحاح واللباقة؟",
    answer:
      "اذكر السبب وراء الإلحاح وحدّد الإطار الزمني المطلوب، مع الحفاظ على لغة مهذبة. مثلًا: \"أحتاج الإجابة قبل نهاية اليوم حتى أرسل التقرير، شاكر تعاونكم\"."
  },
  {
    question: "ما أفضل طريقة لمشاركة السياق؟",
    answer:
      "ابدأ بجملة تلخّص الوضع، ثم أضف أهم التفاصيل ذات الصلة. تجنب التفاصيل الكثيرة التي قد تشتت المتلقي، وركز على ما يساعده لإعطائك إجابة دقيقة."
  }
];

export default function FAQSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold text-slate-900">أسئلة شائعة</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600">
          أفكار إضافية تساعدك على تطوير أسلوبك في طرح الأسئلة والتعامل مع مختلف المواقف.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {FAQS.map((faq) => (
          <article key={faq.question} className="h-full rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-primary-700">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
