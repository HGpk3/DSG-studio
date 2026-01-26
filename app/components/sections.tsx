"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Reveal, RevealItem } from "./framer-motion";

const navItems = [
  { id: "services", label: "Услуги" },
  { id: "cases", label: "Кейсы" },
  { id: "process", label: "Процесс" },
  { id: "about", label: "О студии" },
  { id: "contacts", label: "Контакты" },
];

const containerClass = "mx-auto w-full max-w-6xl px-6";
const cardClass =
  "rounded-[22px] border border-[color:var(--card-border)] bg-[color:var(--card-bg)] shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)]/30 hover:shadow-[var(--shadow-hover)]";
const cardMuted =
  "rounded-[22px] border border-[color:var(--card-border)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] backdrop-blur";

export function Header() {
  const [activeSection, setActiveSection] = useState("services");

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
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl transition duration-300"
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
              className={`relative text-sm transition ${
                activeSection === item.id
                  ? "text-[color:var(--text)]"
                  : "text-[color:var(--muted)] hover:text-[color:var(--accent)]"
              } after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,var(--accent),var(--accent-2))] after:transition-transform hover:after:scale-x-100`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacts"
          className="rounded-[16px] bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(47,107,255,0.6)] transition hover:-translate-y-0.5"
        >
          Обсудить проект
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[color:var(--border)] pb-24 pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-6 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.28)_0%,rgba(47,107,255,0)_65%)] blur-3xl" />
        <div className="absolute bottom-0 left-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0)_65%)] blur-3xl" />
      </div>
      <Reveal className={`${containerClass} grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center`} staggerChildren>
        <div className="lg:col-span-7">
          <RevealItem>
            <span
            className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              DSG studio
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-[color:var(--text)] sm:text-5xl lg:text-[64px]">
              Разработка сайтов
              <br />
              для{" "}
              <span className="bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] bg-clip-text text-transparent">
                бизнеса
              </span>{" "}
              и продуктов
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--muted)]">
              Проектируем, дизайн-им и разрабатываем современные веб-решения. Фокус
              на скорости, конверсии и удобстве поддержки.
            </p>
          </RevealItem>
          <RevealItem>
            <span className="mt-3 inline-flex text-sm font-medium text-[color:var(--muted)]">
              <span className="typewriter">Сайты. Продукты. Интеграции.</span>
            </span>
          </RevealItem>
          <RevealItem>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
              href="#contacts"
              className="rounded-[16px] bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-24px_rgba(47,107,255,0.6)] transition hover:-translate-y-0.5"
            >
              Обсудить проект
            </a>
            <a
              href="#cases"
              className="rounded-[16px] border border-slate-200/80 bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              Смотреть кейсы
            </a>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-[color:var(--muted)]">
              {[
                "Next.js",
                "UI/UX",
                "SEO-ready",
                "Аналитика",
                "Поддержка",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </RevealItem>
        </div>
        <RevealItem className="relative lg:col-span-5">
          <div className="absolute -left-10 top-6 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.4)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-12 right-0 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.34)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute -right-20 top-1/2 -z-20 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.22)_0%,transparent_70%)] blur-[140px]" />
          <div className="relative rounded-[28px] border border-slate-200/70 bg-white/75 p-6 shadow-[var(--shadow-soft)] backdrop-blur before:absolute before:inset-0 before:rounded-[28px] before:shadow-[0_0_0_1px_rgba(47,107,255,0.2)] before:content-['']">
            <div className="relative flex items-center justify-between text-xs font-semibold text-[color:var(--muted)]">
              <span>Product panel</span>
              <span className="rounded-full bg-[color:var(--accent)]/10 px-2 py-1 text-[10px] text-[color:var(--accent)]">
                live
              </span>
            </div>
            <div className="relative mt-4 grid grid-cols-1 gap-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { title: "Скорость", value: "95–100", note: "Lighthouse" },
                  { title: "Конверсия", value: "+12–28%", note: "после редизайна" },
                  { title: "Сроки", value: "14–28 дней", note: "типовой проект" },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200/70 bg-white/80 p-3 text-sm shadow-[0_10px_22px_-18px_rgba(15,23,42,0.2)]"
                  >
                    <p className="text-xs text-[color:var(--muted)]">
                      {card.title}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                      {card.value}
                    </p>
                    <p className="mt-1 text-[11px] text-[color:var(--muted)]">
                      {card.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className={`${cardMuted} border-slate-200/70 p-4`}>
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
                      <span className="h-1 w-10 rounded-full bg-[linear-gradient(120deg,rgba(47,107,255,0.35),rgba(139,92,246,0.35))]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealItem>
      </Reveal>
    </section>
  );
}

export function StatsStrip() {
  const items = [
    {
      title: "Полный цикл",
      desc: "UI/UX, разработка, запуск",
    },
    {
      title: "Сроки",
      desc: "2–6 недель под задачу",
    },
    {
      title: "Качество",
      desc: "90+ Lighthouse",
    },
    {
      title: "Поддержка",
      desc: "рост и аналитика",
    },
  ];

  return (
    <section className="relative border-b border-[color:var(--border)] bg-slate-50/70 py-10">
      <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(47,107,255,0.35),transparent)]" />
      <div className="absolute inset-y-0 right-0 w-px bg-[linear-gradient(180deg,transparent,rgba(139,92,246,0.35),transparent)]" />
      <Reveal className={`${containerClass} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`} staggerChildren>
        {items.map((item) => (
          <RevealItem
            key={item.title}
            className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-left shadow-[0_16px_32px_-28px_rgba(15,23,42,0.2)]"
          >
            <p className="text-sm font-semibold text-[color:var(--text)]">
              {item.title}
            </p>
            <p className="text-xs text-[color:var(--muted)]">{item.desc}</p>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "Проектирование",
      desc: "Аналитика, структура, UX-прототип",
      details: ["UX прототип", "контент-план"],
    },
    {
      title: "Дизайн",
      desc: "UI/UX, адаптив, дизайн-система",
      details: ["дизайн-система", "mobile-first"],
    },
    {
      title: "Разработка",
      desc: "Next.js, интеграции, CMS",
      details: ["интеграции", "CMS-ready"],
    },
    {
      title: "Поддержка",
      desc: "Развитие, аналитика, A/B гипотезы",
      details: ["A/B гипотезы", "аналитика"],
    },
  ];

  return (
    <section
      id="services"
      className="relative border-b border-[color:var(--border)] bg-slate-50/70 py-24"
    >
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className={containerClass}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <RevealItem>
                <h2 className="text-3xl font-semibold">Услуги</h2>
              </RevealItem>
              <RevealItem>
                <p className="mt-3 text-base text-[color:var(--muted)]">
                  Полный цикл — от структуры до запуска и развития.
                </p>
              </RevealItem>
            </Reveal>
          </div>
          <Reveal>
            <RevealItem className="text-sm font-medium text-[color:var(--muted)]">
              Под ключ · Поэтапно · Поддержка
            </RevealItem>
          </Reveal>
        </div>
        <Reveal className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerChildren>
          {services.map((service) => (
            <RevealItem
              key={service.title}
              className={`group cursor-pointer p-6 ${cardClass}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(120deg,rgba(47,107,255,0.25),rgba(139,92,246,0.25))] text-[color:var(--accent)] shadow-[0_10px_20px_-16px_rgba(47,107,255,0.5)]">
                <span className="text-lg">◉</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {service.desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                {service.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-slate-200/70 bg-white/80 px-2 py-1"
                  >
                    {detail}
                  </span>
                ))}
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] transition group-hover:text-[color:var(--accent-2)] group-hover:underline">
                Подробнее →
              </span>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Cases() {
  const cases = [
    {
      title: "Fintech-платформа",
      type: "Корпоративный сайт",
      metrics: ["Скорость 98", "Конверсия +18%"],
      badge: "Корп. сайт",
    },
    {
      title: "SaaS-сервис",
      type: "Лендинг + продуктовые страницы",
      metrics: ["Lighthouse 96", "Заявки +22%"],
      badge: "SaaS",
    },
    {
      title: "Проект под NDA",
      type: "Проекты в разработке",
      metrics: ["NDA", "Запросить примеры"],
      badge: "Лендинг",
    },
  ];

  return (
    <section
      id="cases"
      className="border-b border-[color:var(--border)] bg-white/70 py-24"
    >
      <div className={containerClass}>
        <Reveal>
          <RevealItem>
            <h2 className="text-3xl font-semibold">Кейсы</h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-3 text-base text-[color:var(--muted)]">
              Показываем результат, а не только дизайн.
            </p>
          </RevealItem>
        </Reveal>
        <Reveal className="mt-10 grid gap-6 lg:grid-cols-3" staggerChildren>
          {cases.map((item) => (
            <RevealItem
              key={item.title}
              className={`group cursor-pointer overflow-hidden ${cardClass}`}
            >
              <div className="relative h-44 overflow-hidden bg-[linear-gradient(135deg,rgba(47,107,255,0.18),rgba(139,92,246,0.12))]">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
                <div className="absolute -right-6 top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.5)_0%,transparent_70%)] blur-2xl" />
                <div className="absolute bottom-6 left-8 h-10 w-10 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.45)_0%,transparent_70%)] blur-xl" />
                <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  {item.badge}
                </div>
                <div className="relative flex h-full items-center justify-center text-xs font-semibold uppercase tracking-widest text-slate-600 transition-transform duration-300 group-hover:scale-[1.02]">
                  Case preview
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--accent)]/10 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[color:var(--accent)] shadow-sm">
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
                      className="rounded-full border border-slate-200/70 bg-white/80 px-2 py-1"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                <button className="text-sm font-semibold text-[color:var(--accent)] transition group-hover:text-[color:var(--accent-2)] group-hover:underline">
                  Смотреть кейс
                </button>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
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
    <section
      id="process"
      className="border-b border-[color:var(--border)] bg-slate-50/70 py-24"
    >
      <div className={containerClass}>
        <Reveal>
          <RevealItem>
            <h2 className="text-3xl font-semibold">Процесс</h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-3 text-base text-[color:var(--muted)]">
              Четкая последовательность шагов и прозрачные сроки.
            </p>
          </RevealItem>
        </Reveal>
        <Reveal className="mt-10 grid gap-4" staggerChildren>
          {steps.map((step, index) => (
            <RevealItem
              key={step.title}
              className={`group relative flex flex-wrap items-center justify-between gap-4 p-5 ${cardClass} ${
                index < steps.length - 1
                  ? "after:absolute after:left-10 after:top-full after:h-6 after:w-px after:bg-slate-200/80"
                  : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-y-2 right-2 w-20 rounded-full bg-[linear-gradient(120deg,rgba(47,107,255,0.12),rgba(139,92,246,0.12))] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-sm font-semibold text-[color:var(--accent)] transition group-hover:border-[color:var(--accent)]/40 group-hover:bg-[color:var(--accent)]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold">{step.title}</p>
              </div>
              <p className="text-sm text-[color:var(--muted)]">
                {step.time}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
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
    <section
      id="about"
      className="border-b border-[color:var(--border)] py-24"
    >
      <Reveal className={`${containerClass} grid gap-10 lg:grid-cols-2`} staggerChildren>
        <RevealItem>
          <h2 className="text-3xl font-semibold">Технологии и подход</h2>
          <p className="mt-4 text-base text-[color:var(--muted)]">
            Next.js, TypeScript, Tailwind, Headless CMS (по запросу),
            интеграции (CRM, оплаты, формы), аналитика (GA/Я.Метрика).
          </p>
          <p className="mt-4 text-base text-[color:var(--muted)]">
            Работаем в связке дизайн + разработка, чтобы продукт выглядел
            современно и стабильно рос после запуска.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind",
              "CMS",
              "Integrations",
              "Analytics",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </RevealItem>
        <RevealItem>
          <div className="rounded-[24px] border border-slate-200/70 bg-white/75 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Что вы получаете</h3>
              <span className="h-1 w-16 rounded-full bg-[linear-gradient(120deg,rgba(47,107,255,0.5),rgba(139,92,246,0.5))]" />
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealItem>
      </Reveal>
    </section>
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
    <section
      className="border-b border-[color:var(--border)] bg-white/70 py-24"
    >
      <div className={containerClass}>
        <Reveal>
          <RevealItem>
            <h2 className="text-3xl font-semibold">FAQ</h2>
          </RevealItem>
        </Reveal>
        <Reveal className="mt-8 space-y-3" staggerChildren>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <RevealItem
                key={faq.question}
                className={`rounded-[22px] border bg-white/80 transition-colors ${
                  isOpen
                    ? "border-[color:var(--accent)]/30 bg-slate-50/80 shadow-[var(--shadow-soft)]"
                    : "border-slate-200/70"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold"
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index
                    )
                  }
                >
                  <span>{faq.question}</span>
                  <span className="text-xl text-[color:var(--muted)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      key="content"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-5 text-sm text-[color:var(--muted)]">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section
      id="contacts"
      className="border-b border-[color:var(--border)] bg-slate-50/70 py-24"
    >
      <div className={containerClass}>
        <Reveal>
          <RevealItem className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 p-10 shadow-[var(--shadow-soft)] backdrop-blur">
          <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(47,107,255,0.3)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 left-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25)_0%,transparent_70%)] blur-3xl" />
          <h2 className="text-3xl font-semibold">Обсудим ваш проект?</h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">
            Ответим в течение дня. Соберём требования и предложим план работ.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@dsg.studio"
              className="rounded-[16px] bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-24px_rgba(47,107,255,0.6)] transition hover:-translate-y-0.5"
            >
              Оставить заявку
            </a>
            <a
              href="https://t.me/dsgstudio"
              className="rounded-[16px] border border-slate-200/80 bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              Написать в Telegram
            </a>
          </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-white/70 py-12">
      <div className={`${containerClass} grid gap-8 md:grid-cols-3`}>
        <div>
          <p className="text-sm font-semibold">DSG studio</p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            digital-студия разработки сайтов и продуктов.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[color:var(--muted)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Навигация
          </p>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="text-sm text-[color:var(--muted)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Контакты
          </p>
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
