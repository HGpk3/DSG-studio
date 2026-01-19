"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "./framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "./motion";

const navItems = [
  { id: "services", label: "Услуги" },
  { id: "cases", label: "Кейсы" },
  { id: "process", label: "Процесс" },
  { id: "about", label: "О студии" },
  { id: "contacts", label: "Контакты" },
];

const containerClass = "mx-auto w-full max-w-[1200px] px-6";

export function Header() {
  const [activeSection, setActiveSection] = useState("services");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[color:var(--border)] transition duration-300 ${
        isScrolled ? "bg-white/70 shadow-[0_12px_30px_-25px_rgba(15,23,42,0.35)]" : "bg-white/70"
      } backdrop-blur-xl`}
    >
      <div
        className={`${containerClass} flex h-16 items-center justify-between gap-6`}
      >
        <a href="#top" className="text-sm font-semibold tracking-tight">
          DSG studio
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--muted)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition ${
                activeSection === item.id
                  ? "text-[color:var(--text)]"
                  : "hover:text-[color:var(--text)]"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacts"
          className="rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--text)]"
        >
          Обсудить проект
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="section-shell relative overflow-hidden pt-20 pb-16">
      <motion.div
        className={`${containerClass} grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="lg:col-span-7" variants={staggerContainer}>
          <motion.h1
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--text)] sm:text-6xl"
            variants={fadeUp}
          >
            Разработка сайтов
            <br />
            для бизнеса и продуктов
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--muted)]"
            variants={fadeUp}
          >
            Проектируем, дизайн-им и разрабатываем современные веб-решения. Фокус
            на скорости, конверсии и удобстве поддержки.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            variants={fadeUp}
          >
            <a
              href="#contacts"
              className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(47,107,255,0.8)] transition hover:-translate-y-0.5"
            >
              Обсудить проект
            </a>
            <a
              href="#cases"
              className="rounded-full border border-[color:var(--border)] bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--text)]"
            >
              Смотреть кейсы
            </a>
          </motion.div>
          <motion.div
            className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-[color:var(--muted)]"
            variants={fadeUp}
          >
            {[
              "Next.js",
              "UI/UX",
              "SEO-ready",
              "Аналитика",
              "Поддержка",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--border)] px-3 py-1"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="lg:col-span-5" variants={fadeUp}>
          <div className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold text-[color:var(--muted)]">
              <span>Product panel</span>
              <span className="rounded-full bg-[color:var(--accent)]/10 px-2 py-1 text-[10px] text-[color:var(--accent)]">
                live
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { title: "Скорость", value: "95–100", note: "Lighthouse" },
                  { title: "Конверсия", value: "+12–28%", note: "после редизайна" },
                  { title: "Сроки", value: "14–28 дней", note: "типовой проект" },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-3 text-sm shadow-[0_12px_30px_-22px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:border-[color:var(--text)]"
                  >
                    <p className="text-xs text-[color:var(--muted)]">
                      {card.title}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[color:var(--text)]">
                      {card.value}
                    </p>
                    <p className="mt-1 text-[11px] text-[color:var(--muted)]">
                      {card.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-4 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.25)] backdrop-blur">
                <p className="text-xs font-semibold text-[color:var(--muted)]">
                  План производства
                </p>
                <div className="mt-3 space-y-2 text-sm text-[color:var(--text)]">
                  {[
                    "Discovery — 2–4 дня",
                    "UX прототип — 3–5 дней",
                    "Дизайн — 5–10 дней",
                    "Разработка — 7–14 дней",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-center justify-between gap-3"
                    >
                      <span>{line}</span>
                      <span className="h-1 w-10 rounded-full bg-[color:var(--accent)]/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function StatsStrip() {
  const items = [
    "Сайты под ключ / UI/UX + разработка",
    "Сроки: 2–6 недель",
    "Скорость: 90+ Lighthouse",
    "Поддержка после запуска",
  ];

  return (
    <motion.section
      className="section-shell py-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={`${containerClass} grid gap-3 md:grid-cols-4`}>
        {items.map((item) => (
          <motion.div
            key={item}
            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-center text-sm text-[color:var(--muted)]"
            variants={staggerItem}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export function Services() {
  const services = [
    {
      title: "Проектирование",
      desc: "Аналитика, структура, UX-прототип",
    },
    {
      title: "Дизайн",
      desc: "UI/UX, адаптив, дизайн-система",
    },
    {
      title: "Разработка",
      desc: "Next.js, интеграции, CMS",
    },
    {
      title: "Поддержка",
      desc: "Развитие, аналитика, A/B гипотезы",
    },
  ];

  return (
    <motion.section
      id="services"
      className="section-shell py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={containerClass}>
        <motion.h2 className="text-3xl font-semibold" variants={fadeUp}>
          Услуги
        </motion.h2>
        <motion.p
          className="mt-3 text-base text-[color:var(--muted)]"
          variants={fadeUp}
        >
          Полный цикл — от структуры до запуска и развития.
        </motion.p>
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group cursor-pointer rounded-3xl border border-[color:var(--border)] bg-white/70 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.25)] backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--text)]"
              variants={staggerItem}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--accent)]">
                <span className="text-lg">●</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {service.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]">
                Подробнее →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function Cases() {
  const cases = [
    {
      title: "Fintech-платформа",
      type: "Корпоративный сайт",
      metrics: ["Скорость 98", "Конверсия +18%"],
    },
    {
      title: "SaaS-сервис",
      type: "Лендинг + продуктовые страницы",
      metrics: ["Lighthouse 96", "Заявки +22%"],
    },
    {
      title: "Проект под NDA",
      type: "Проекты в разработке",
      metrics: ["NDA", "Запросить примеры"],
    },
  ];

  return (
    <motion.section
      id="cases"
      className="section-shell py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={containerClass}>
        <motion.h2 className="text-3xl font-semibold" variants={fadeUp}>
          Кейсы
        </motion.h2>
        <motion.p
          className="mt-3 text-base text-[color:var(--muted)]"
          variants={fadeUp}
        >
          Показываем результат, а не только дизайн.
        </motion.p>
        <motion.div
          className="mt-10 grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {cases.map((item) => (
            <motion.div
              key={item.title}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white/70 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.25)] backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--text)]"
              variants={staggerItem}
            >
              <div className="relative h-44 overflow-hidden bg-[linear-gradient(135deg,#e2e8f0,#f8fafc)]">
                <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-widest text-slate-500 transition-transform duration-300 group-hover:scale-105">
                  Case preview
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--accent)]/10 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[color:var(--accent)] shadow-[0_10px_24px_-16px_rgba(47,107,255,0.6)]">
                    Смотреть кейс
                  </span>
                </div>
              </div>
              <div className="space-y-3 p-6">
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-[color:var(--muted)]">
                    {item.type}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-[color:var(--border)] px-2 py-1"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                <button className="text-sm font-semibold text-[color:var(--accent)]">
                  Смотреть кейс
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function Process() {
  const steps = [
    { title: "Бриф и цели", time: "2–4 дня" },
    { title: "Структура и прототип", time: "3–5 дней" },
    { title: "Дизайн-концепт", time: "5–7 дней" },
    { title: "Разработка и интеграции", time: "7–14 дней" },
    { title: "Тестирование и запуск", time: "2–4 дня" },
    { title: "Поддержка и рост", time: "после релиза" },
  ];

  return (
    <motion.section
      id="process"
      className="section-shell py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={containerClass}>
        <motion.h2 className="text-3xl font-semibold" variants={fadeUp}>
          Процесс
        </motion.h2>
        <motion.p
          className="mt-3 text-base text-[color:var(--muted)]"
          variants={fadeUp}
        >
          Четкая последовательность шагов и прозрачные сроки.
        </motion.p>
        <motion.div
          className="mt-10 grid gap-4"
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[color:var(--border)] bg-white/70 p-5 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.25)] backdrop-blur"
              variants={staggerItem}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-sm font-semibold text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold">{step.title}</p>
              </div>
              <p className="text-sm text-[color:var(--muted)]">
                {step.time}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function TechApproach() {
  const deliverables = [
    "дизайн-макет",
    "адаптив",
    "чистый код",
    "базовая SEO-подготовка",
    "инструкция по админке/контенту",
    "поддержка",
  ];

  return (
    <motion.section
      id="about"
      className="section-shell py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={`${containerClass} grid gap-10 lg:grid-cols-2`}>
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-semibold">Технологии и подход</h2>
          <p className="mt-4 text-base text-[color:var(--muted)]">
            Next.js, TypeScript, Tailwind, Headless CMS (по запросу),
            интеграции (CRM, оплаты, формы), аналитика (GA/Я.Метрика).
          </p>
          <p className="mt-4 text-base text-[color:var(--muted)]">
            Работаем в связке дизайн + разработка, чтобы продукт выглядел
            современно и стабильно рос после запуска.
          </p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold">Что вы получаете</h3>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-3xl border border-[color:var(--border)] bg-white/70 px-4 py-3 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.2)] backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function FAQ() {
  const faqs = useMemo(
    () => [
      {
        question: "Сколько стоит?",
        answer:
          "Стоимость зависит от объема и интеграций. После брифа формируем диапазон и фиксируем в смете.",
      },
      {
        question: "Какие сроки?",
        answer:
          "Средний срок 2–6 недель. Точные сроки определяем после оценки структуры и контента.",
      },
      {
        question: "Делаете ли SEO?",
        answer:
          "Да, готовим базовую SEO-структуру, мета-теги и рекомендации по контенту.",
      },
      {
        question: "Кто наполняет контентом?",
        answer:
          "По умолчанию помогаем с контент-структурой и можем наполнить сайт с вашей стороны или нашей командой.",
      },
      {
        question: "Поддержка после запуска?",
        answer:
          "Да, остаемся на связи, помогаем с обновлениями и аналитикой.",
      },
      {
        question: "Можно ли поэтапно?",
        answer:
          "Да, проект можно разбить на этапы с понятными результатами после каждого шага.",
      },
    ],
    []
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      className="section-shell py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={containerClass}>
        <motion.h2 className="text-3xl font-semibold" variants={fadeUp}>
          FAQ
        </motion.h2>
        <motion.div
          className="mt-8 space-y-3"
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                className="rounded-3xl border border-[color:var(--border)] bg-white/70 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.2)] backdrop-blur"
                variants={staggerItem}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index
                    )
                  }
                >
                  <span className="text-base font-semibold">
                    {faq.question}
                  </span>
                  <span className="text-xl text-[color:var(--muted)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-[color:var(--muted)]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

export function FinalCTA() {
  return (
    <motion.section
      id="contacts"
      className="section-shell py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={containerClass}>
        <motion.div
          className="rounded-3xl border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(47,107,255,0.12),rgba(255,255,255,0.7))] p-10 shadow-[0_28px_70px_-45px_rgba(15,23,42,0.25)] backdrop-blur"
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold">Обсудим ваш проект?</h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">
            Ответим в течение дня. Соберём требования и предложим план работ.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@dsg.studio"
              className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(47,107,255,0.8)] transition hover:-translate-y-0.5"
            >
              Оставить заявку
            </a>
            <a
              href="https://t.me/dsgstudio"
              className="rounded-full border border-[color:var(--border)] bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--text)]"
            >
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function Footer() {
  return (
    <footer className="section-shell py-12">
      <div className={`${containerClass} grid gap-6 md:grid-cols-3`}>
        <div>
          <p className="text-sm font-semibold">DSG studio</p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            digital-студия разработки сайтов и продуктов.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[color:var(--muted)]">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="text-sm text-[color:var(--muted)]">
          <p>hello@dsg.studio</p>
          <p className="mt-2">Москва · Работаем по РФ и миру</p>
        </div>
      </div>
      <div
        className={`${containerClass} mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--muted)]`}
      >
        <span>© 2024 DSG studio. Все права защищены.</span>
        <span>Политика конфиденциальности</span>
      </div>
    </footer>
  );
}
