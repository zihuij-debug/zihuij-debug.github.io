import React, { useEffect, useState } from "react";

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    arrowRight: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    github: (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.8 6-6A4.7 4.7 0 0 0 18.7 5 4.4 4.4 0 0 0 18.6 1S17.4.6 15 2.4a12.3 12.3 0 0 0-6 0C6.6.6 5.4 1 5.4 1a4.4 4.4 0 0 0-.1 4A4.7 4.7 0 0 0 4 8.5c0 4.2 3 6 6 6A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    sparkles: (
      <svg {...common}>
        <path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2Z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
        <path d="M19 17v4" />
        <path d="M17 19h4" />
      </svg>
    ),
    penLine: (
      <svg {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5Z" />
        <path d="m3 13 9 5 9-5" />
        <path d="m3 18 9 5 9-5" />
      </svg>
    ),
    bot: (
      <svg {...common}>
        <rect x="5" y="8" width="14" height="10" rx="3" />
        <path d="M12 8V4" />
        <path d="M8 12h.01" />
        <path d="M16 12h.01" />
        <path d="M9 16h6" />
        <path d="M3 13h2" />
        <path d="M19 13h2" />
      </svg>
    ),
    palette: (
      <svg {...common}>
        <path d="M12 3a9 9 0 0 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h1a8 8 0 0 0 0-9Z" />
        <path d="M7.5 10.5h.01" />
        <path d="M9.5 7.5h.01" />
        <path d="M14.5 7.5h.01" />
      </svg>
    ),
    graduationCap: (
      <svg {...common}>
        <path d="m22 10-10-5-10 5 10 5Z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
        <path d="M22 10v6" />
      </svg>
    ),
  };

  return icons[name] || icons.sparkles;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const heroTags = [
  "AI Product Builder",
  "AI 产品",
  "Generative AI",
  "AIGC",
  "Creative Technology",
  "Anime Tech",
  "CMU",
];

const projects = [
  {
    title: "Anime Character Sheet Generation",
    description:
      "探索如何利用生成式 AI 生成具有一致身份、多表情、多视角的动漫角色设定图，帮助创作者更高效地完成角色视觉设定与创意表达。",
    tags: ["Generative AI", "Anime", "Identity Consistency", "Creative Tooling", "AIGC"],
    href: "/projects/anime-character-sheet-generation",
    visual: "anime",
  },
  {
    title: "AI Agent & Creative Tool Experiments",
    description:
      "未来将持续探索 AI Agent、个人效率系统与 AIGC 创意工具，把 AI 能力转化为更自然、更有用、更具创造力的产品体验。",
    tags: ["AI Agent", "Productivity", "Creative AI", "Product Experiments"],
    href: "/projects/ai-agent-creative-tools",
    visual: "agent",
  },
];

const writings = [
  {
    icon: "layers",
    title: "AI 产品观察",
    description: "关注 AI 产品形态、模型能力边界、用户体验和产品评测方法论。",
    topics: ["AI 产品评测方法论", "AI Agent 与 Workflow 的产品差异", "从产品视角理解大模型能力"],
  },
  {
    icon: "palette",
    title: "AIGC 与动漫创意媒体",
    description: "探索生成式 AI 如何影响动漫、角色创作、视觉内容生产和创作者工具。",
    topics: ["动漫生成模型的产品机会", "AIGC 工具观察", "角色一致性为什么重要"],
  },
  {
    icon: "penLine",
    title: "创业和产品思考",
    description: "记录早期产品想法、用户需求验证、长期主义和 AI 产品商业化思考。",
    topics: ["创业早期如何验证 AI 产品需求", "如何把技术能力转化成产品价值", "长期个人品牌与产品建设"],
  },
];

function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E6DED2]/80 bg-[#FAF7F2]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20">
        <button
          onClick={() => scrollToSection("#home")}
          className="group flex items-center gap-3 text-base font-medium tracking-tight text-[#1F1F1F]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6DED2] bg-white/70 shadow-sm transition group-hover:scale-105">
            O
          </span>
          <span>oolongAI</span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-[#E6DED2] bg-white/60 p-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="rounded-full px-5 py-2.5 text-[15px] text-[#6B665F] transition hover:bg-[#F1ECE4] hover:text-[#1F1F1F]"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("#contact")}
          className="rounded-full bg-[#1F1F1F] px-5 py-2.5 text-[15px] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#3A3733]"
        >
          联系我
        </button>
      </nav>
    </header>
  );
}

function AnimeAvatar() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[470px] overflow-hidden rounded-[2.75rem] border border-[#E6DED2] bg-gradient-to-br from-white via-[#F1ECE4] to-[#EEE9FF] p-6 shadow-[0_28px_90px_rgba(67,55,42,0.16)]">
      <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-[#A78BFA]/20 blur-2xl" />
      <div className="absolute bottom-12 right-8 h-24 w-24 rounded-full bg-[#D9BFA9]/30 blur-2xl" />
      <div className="absolute inset-x-8 top-8 h-1 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />

      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-6 backdrop-blur-sm">
        <div className="z-10 flex items-center justify-between">
          <span className="rounded-full border border-[#E6DED2] bg-white/80 px-3 py-1 text-xs text-[#6B665F] shadow-sm">oolongAI Avatar</span>
          <Icon name="sparkles" className="h-5 w-5 text-[#8B7CF6]" />
        </div>

        <div className="absolute inset-6 top-16 overflow-hidden rounded-[1.6rem] border border-white/70 bg-[#F1ECE4]">
          <img
            src="/avatar.png"
            alt="oolongAI avatar"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/18 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mt-auto rounded-2xl bg-white/78 p-4 shadow-sm backdrop-blur">
          <p className="text-sm font-medium text-[#1F1F1F]">oolongAI</p>
          <p className="mt-1 text-xs leading-5 text-[#6B665F]">AI Product · AIGC · Creative Technology</p>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "anime") {
    return (
      <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#F1ECE4] via-white to-[#EEE9FF] p-3">
        <img
          src="/project-anime.png"
          alt="Anime Character Sheet Generation project cover"
          className="h-full w-full rounded-[1.25rem] object-cover object-center shadow-sm"
        />
        <div className="absolute inset-3 rounded-[1.25rem] bg-gradient-to-t from-[#1F1F1F]/28 via-transparent to-transparent" />
        <div className="absolute right-6 top-6 rounded-full bg-white/86 px-4 py-1.5 text-sm text-[#6B665F] shadow-sm backdrop-blur">
          Character Sheet
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#F1ECE4] via-white to-[#E9F0FF] p-3">
      <img
        src="/project-agent.png"
        alt="AI Agent and Creative Tool Experiments project cover"
        className="h-full w-full rounded-[1.25rem] object-cover object-center shadow-sm"
      />
      <div className="absolute inset-3 rounded-[1.25rem] bg-gradient-to-t from-[#1F1F1F]/24 via-transparent to-transparent" />
      <div className="absolute right-6 top-6 rounded-full bg-white/86 px-4 py-1.5 text-sm text-[#6B665F] shadow-sm backdrop-blur">
        AI Experiment
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-medium text-[#8B7CF6]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#1F1F1F] md:text-4xl">{title}</h2>
      <p className="mt-5 text-lg leading-9 text-[#6B665F]">{description}</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-14 pt-28 md:px-10 md:pb-16 md:pt-30 lg:px-16 xl:px-20">
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#EEE9FF]/60 blur-3xl" />
      <div className="absolute -left-24 top-52 h-72 w-72 rounded-full bg-[#E9DDD0]/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-16 md:min-h-[calc(100vh-8rem)] md:grid-cols-[1.25fr_0.75fr] lg:gap-24 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/60 px-5 py-2.5 text-[15px] text-[#6B665F] shadow-sm backdrop-blur">
            <Icon name="sparkles" className="h-4 w-4 text-[#8B7CF6]" />
            AI Product · AIGC · Creative Technology
          </div>

          <h1 className="max-w-[920px] text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#1F1F1F] md:text-7xl lg:text-[6rem] xl:text-[6.4rem]">
            <span className="block">你好，我是 oolongAI</span>
            <span className="mt-3 block text-[0.78em] leading-[1.12] text-[#4B4742]">
              专注 <span className="bg-gradient-to-r from-[#4B4742] to-[#8B7CF6] bg-clip-text text-transparent">AI 产品</span> 与创意技术
            </span>
          </h1>

          <p className="mt-8 max-w-[860px] text-xl leading-10 text-[#6B665F] md:text-[1.32rem] md:leading-[2.2rem]">
            目前在 Carnegie Mellon University 学习，关注 AI 产品、AIGC、动漫内容生成与面向真实用户的创意技术应用。
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#E6DED2] bg-white/55 px-4 py-2 text-[15px] text-[#6B665F] shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection("#projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1F1F1F] px-7 py-3.5 text-base font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#3A3733]"
            >
              查看项目
              <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center justify-center rounded-full border border-[#E6DED2] bg-white/65 px-7 py-3.5 text-base font-medium text-[#1F1F1F] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              联系我
            </button>
          </div>
        </div>

        <div className="animate-[fadeIn_1s_ease-out]">
          <AnimeAvatar />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-18 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader
          eyebrow="Selected Projects"
          title="精选项目"
          description="一些关于 AI 产品、生成式内容与创意技术的探索。"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2.25rem] border border-[#E6DED2] bg-white/62 p-5 shadow-[0_18px_55px_rgba(67,55,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#CFC2FF] hover:shadow-[0_24px_80px_rgba(67,55,42,0.12)]"
            >
              <ProjectVisual type={project.visual} />
              <div className="p-4 md:p-5">
                <h3 className="text-3xl font-semibold tracking-tight text-[#1F1F1F]">{project.title}</h3>
                <p className="mt-4 text-lg leading-9 text-[#6B665F]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#F1ECE4] px-3 py-1 text-xs text-[#6B665F]">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`#${project.href}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#1F1F1F] transition hover:text-[#8B7CF6]"
                >
                  项目详情
                  <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="bg-[#F1ECE4]/45 px-6 py-18 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader
          eyebrow="Writing / Insights"
          title="文章与思考"
          description="记录我对 AI 产品、AIGC 创意媒体和早期产品探索的观察。"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {writings.map((item) => {
            const iconName = item.icon;
            return (
              <article key={item.title} className="rounded-[1.75rem] border border-[#E6DED2] bg-[#FAF7F2]/80 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEE9FF] text-[#8B7CF6]">
                  <Icon name={iconName} className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1F1F1F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6B665F]">{item.description}</p>
                <div className="mt-6 space-y-3 border-t border-[#E6DED2] pt-5">
                  {item.topics.map((topic) => (
                    <p key={topic} className="text-sm text-[#6B665F]">· {topic}</p>
                  ))}
                </div>
                <div className="mt-6 inline-flex rounded-full bg-white/70 px-3 py-1 text-xs text-[#8B7CF6]">持续更新中</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: "graduationCap", label: "CMU", text: "Carnegie Mellon University" },
    { icon: "bot", label: "AI Product", text: "面向真实用户的 AI 应用" },
    { icon: "sparkles", label: "Generative AI", text: "AIGC 与内容生成" },
    { icon: "palette", label: "Creative Technology", text: "创意技术与文化连接" },
  ];

  return (
    <section id="about" className="px-6 py-18 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-start">
        <div>
          <p className="mb-3 text-sm font-medium text-[#8B7CF6]">About</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1F1F1F] md:text-4xl">关于我</h2>
          <p className="mt-5 leading-8 text-[#6B665F]">
            我希望把复杂的 AI 技术转化成用户能理解、能使用、愿意持续使用的产品体验。
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {cards.map((card) => {
              const iconName = card.icon;
              return (
                <div key={card.label} className="rounded-3xl border border-[#E6DED2] bg-white/60 p-4 shadow-sm">
                  <Icon name={iconName} className="mb-3 h-5 w-5 text-[#8B7CF6]" />
                  <p className="font-medium text-[#1F1F1F]">{card.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[#6B665F]">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#E6DED2] bg-white/64 p-6 shadow-[0_18px_55px_rgba(67,55,42,0.08)] md:p-8">
          <div className="space-y-5 text-[15px] leading-8 text-[#6B665F] md:text-base">
            <p>
              我是 <span className="font-medium text-[#1F1F1F]">oolongAI</span>，目前在 Carnegie Mellon University / CMU 学习，关注 AI 产品与生成式 AI 应用。
            </p>
            <p>
              我的兴趣集中在 AIGC、动漫内容生成、AI Agent、创意技术和真实用户场景。我希望把复杂的 AI 技术转化成用户能理解、能使用、愿意持续使用的产品体验。
            </p>
            <p>
              我正在向 AI 产品经理 / AI Product Manager 方向持续积累，同时也希望保持 Product Builder 的实践心态：不仅理解技术和产品，也持续通过项目、原型和内容表达来验证自己的想法。
            </p>
            <p>
              我希望未来参与或创造真正有影响力的 AI 产品，让 AI 不只是强大的技术，而是成为连接产品、创意内容与文化的新体验。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: "mail", label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/your-profile", href: "https://www.linkedin.com/in/your-profile" },
    { icon: "github", label: "GitHub", value: "github.com/your-github", href: "https://github.com/your-github" },
  ];

  return (
    <section id="contact" className="px-6 py-18 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#E6DED2] bg-gradient-to-br from-white/80 via-[#FAF7F2] to-[#EEE9FF]/70 p-8 text-center shadow-[0_24px_80px_rgba(67,55,42,0.12)] md:p-12">
        <p className="mb-3 text-sm font-medium text-[#8B7CF6]">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#1F1F1F] md:text-4xl">联系我</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6B665F]">
          如果你对 AI 产品、AIGC、创意技术或相关合作感兴趣，欢迎联系我。
        </p>

        <div className="mt-9 grid gap-3 md:grid-cols-3">
          {links.map((link) => {
            const iconName = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="group rounded-3xl border border-[#E6DED2] bg-white/70 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white"
              >
                <Icon name={iconName} className="mb-4 h-5 w-5 text-[#8B7CF6]" />
                <p className="font-medium text-[#1F1F1F]">{link.label}</p>
                <p className="mt-1 truncate text-sm text-[#6B665F]">{link.value}</p>
              </a>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-[#6B665F]">持续探索 AI、产品与创意技术之间的连接。</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E6DED2] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 text-sm text-[#6B665F] md:flex-row">
        <p>© 2026 oolongAI. 持续探索 AI、产品与创意技术。</p>
        <div className="flex gap-4">
          {navItems.slice(1).map((item) => (
            <button key={item.label} onClick={() => scrollToSection(item.href)} className="hover:text-[#1F1F1F]">
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function BackButton() {
  return (
    <a
      href="#/"
      className="inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/70 px-5 py-2.5 text-sm font-medium text-[#1F1F1F] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
    >
      ← 返回首页
    </a>
  );
}

function MetricCard({ label, value, note }) {
  return (
    <div className="rounded-[1.5rem] border border-[#E6DED2] bg-white/68 p-5 shadow-sm">
      <p className="text-sm text-[#6B665F]">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-[#1F1F1F]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[#6B665F]">{note}</p>
    </div>
  );
}

function DetailSection({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-12 md:px-10 lg:px-0">
      <p className="mb-3 text-sm font-medium text-[#8B7CF6]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#1F1F1F] md:text-4xl">{title}</h2>
      <div className="mt-6 text-lg leading-9 text-[#6B665F]">{children}</div>
    </section>
  );
}

function MethodStep({ number, title, description }) {
  return (
    <div className="rounded-[1.75rem] border border-[#E6DED2] bg-white/64 p-6 shadow-sm">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEE9FF] text-sm font-semibold text-[#8B7CF6]">
        {number}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-[#1F1F1F]">{title}</h3>
      <p className="mt-3 text-base leading-8 text-[#6B665F]">{description}</p>
    </div>
  );
}

function VideoProjectDetailPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1F1F1F]">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="border-b border-[#E6DED2]/80 bg-[#FAF7F2]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20">
          <a href="#/" className="flex items-center gap-3 text-base font-medium tracking-tight text-[#1F1F1F]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6DED2] bg-white/70 shadow-sm">O</span>
            <span>oolongAI</span>
          </a>
          <BackButton />
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-10 lg:px-16 xl:px-20">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#EEE9FF]/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <BackButton />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/70 px-5 py-2.5 text-[15px] text-[#6B665F] shadow-sm">
              <Icon name="sparkles" className="h-4 w-4 text-[#8B7CF6]" />
              AI Agent · Creative Tool · Product Demo
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#1F1F1F] md:text-7xl lg:text-[5.2rem]">
              AI Agent & Creative Tool Experiments
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-10 text-[#6B665F] md:text-[1.32rem] md:leading-[2.2rem]">
              一个关于 AI Agent、个人效率系统与 AIGC 创意工具的产品实验展示。这里可以放置 1 分钟视频，用更直观的方式呈现产品概念、交互流程或 demo 片段。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["AI Agent", "Productivity", "Creative AI", "Product Demo", "Interaction Prototype"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#E6DED2] bg-white/60 px-4 py-2 text-sm text-[#6B665F] shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#E6DED2] bg-white/60 p-5 shadow-[0_24px_80px_rgba(67,55,42,0.12)]">
            <div className="overflow-hidden rounded-[2rem] bg-[#1F1F1F] p-3">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/project-agent.png"
                className="aspect-video w-full rounded-[1.5rem] bg-black object-cover shadow-sm"
              >
                <source src="/project-agent-demo.mp4" type="video/mp4" />
                你的浏览器暂不支持 video 标签。
              </video>
            </div>
            <div className="mt-5 rounded-2xl bg-white/78 p-5 shadow-sm backdrop-blur">
              <p className="font-semibold text-[#1F1F1F]">1-minute product demo</p>
              <p className="mt-1 text-sm leading-6 text-[#6B665F]">把视频文件放到 public/project-agent-demo.mp4 后，这里就可以直接播放。</p>
            </div>
          </div>
        </div>
      </section>

      <DetailSection eyebrow="01 / Video Demo" title="视频展示">
        <div className="rounded-[2rem] border border-[#E6DED2] bg-white/64 p-7 shadow-sm">
          <p>
            这个页面用于承载项目二的视频型展示。相比纯文字 case study，视频更适合呈现 AI Agent 的交互流程、用户使用路径、产品原型演示，以及 AIGC 创意工具从输入到输出的完整体验。
          </p>
          <p className="mt-5">
            后续你可以在这里继续补充：项目背景、目标用户、核心场景、产品流程、关键功能、你的贡献，以及下一步计划。
          </p>
        </div>
      </DetailSection>

      <DetailSection eyebrow="02 / Product Notes" title="项目说明">
        <div className="grid gap-5 md:grid-cols-3">
          <MethodStep
            number="1"
            title="产品概念"
            description="用 AI Agent 帮助用户拆解任务、整理信息、生成内容或完成创意工作流。"
          />
          <MethodStep
            number="2"
            title="交互流程"
            description="通过视频展示用户输入、Agent 处理、结果生成和后续编辑的完整路径。"
          />
          <MethodStep
            number="3"
            title="未来扩展"
            description="后续可以继续加入真实原型截图、用户场景分析、评测指标和产品迭代记录。"
          />
        </div>
      </DetailSection>

      <section className="mx-auto max-w-[1180px] px-6 pb-20 pt-6 md:px-10 lg:px-0">
        <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-[#E6DED2] bg-gradient-to-br from-white/80 via-[#FAF7F2] to-[#EEE9FF]/70 p-8 shadow-sm md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-[#1F1F1F]">视频文件位置</p>
            <p className="mt-2 text-[#6B665F]">请将你的 1 分钟 mp4 视频命名为 project-agent-demo.mp4，并放入 public 文件夹。</p>
          </div>
          <a href="#/" className="rounded-full bg-[#1F1F1F] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#3A3733]">
            返回首页
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AnimeProjectDetailPage() {
  const metrics = [
    { label: "Expression Accuracy", value: "0.777", note: "最终 pipeline 在表情控制上的整体准确率。" },
    { label: "Panel Accuracy", value: "0.771", note: "按角色 sheet 聚合后的面板级表情准确率。" },
    { label: "Sheet Coverage", value: "0.802", note: "目标表情面板成功生成的覆盖比例。" },
    { label: "Identity Similarity", value: "0.486", note: "生成结果与参考角色之间的 ArcFace 相似度。" },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1F1F1F]">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="border-b border-[#E6DED2]/80 bg-[#FAF7F2]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20">
          <a href="#/" className="flex items-center gap-3 text-base font-medium tracking-tight text-[#1F1F1F]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6DED2] bg-white/70 shadow-sm">O</span>
            <span>oolongAI</span>
          </a>
          <BackButton />
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-10 lg:px-16 xl:px-20">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#EEE9FF]/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 md:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <BackButton />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/70 px-5 py-2.5 text-[15px] text-[#6B665F] shadow-sm">
              <Icon name="sparkles" className="h-4 w-4 text-[#8B7CF6]" />
              Generative AI · Anime · Identity Consistency
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#1F1F1F] md:text-7xl lg:text-[5.6rem]">
              Anime Character Sheet Generation
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-10 text-[#6B665F] md:text-[1.35rem] md:leading-[2.25rem]">
              一个面向动漫原创角色的参考图驱动生成系统：给定一张角色参考头像和多个目标表情，生成身份一致、风格统一的多表情角色设定图。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Stable Diffusion v1.5", "IP-Adapter", "Expression Control", "Candidate Reranking", "ArcFace / CLIP Eval"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#E6DED2] bg-white/60 px-4 py-2 text-sm text-[#6B665F] shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#E6DED2] bg-white/60 p-5 shadow-[0_24px_80px_rgba(67,55,42,0.12)]">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F1ECE4] via-white to-[#EEE9FF] p-3 md:h-[520px]">
              <img
                src="/project-anime.png"
                alt="Anime character sheet generation result"
                className="h-full w-full rounded-[1.65rem] object-cover object-center shadow-sm"
              />
              <div className="absolute inset-3 rounded-[1.65rem] bg-gradient-to-t from-[#1F1F1F]/25 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/78 p-5 shadow-sm backdrop-blur">
                <p className="font-semibold text-[#1F1F1F]">Final Pipeline Output</p>
                <p className="mt-1 text-sm text-[#6B665F]">multi-expression OC sheet generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DetailSection eyebrow="01 / Overview" title="项目概览">
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-[#E6DED2] bg-white/64 p-7 shadow-sm">
            <p>
              现代文生图模型已经可以生成高质量动漫头像，但在“角色设定图”任务中仍然容易失败：同一个原创角色在不同表情、不同视角之间会出现眼型、发型轮廓、配饰和色彩漂移。这个项目的目标是让模型不只是生成单张好看的图，而是生成一组看起来属于同一个角色的表情面板。
            </p>
            <p className="mt-5">
              我们提出的系统基于 Stable Diffusion v1.5 与 IP-Adapter，通过监督微调、表情局部控制和候选图重排序，解决身份漂移、表情错误和面板不一致三个核心问题。
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-[#E6DED2] bg-[#F1ECE4]/70 p-6">
              <p className="text-sm text-[#6B665F]">Task</p>
              <p className="mt-2 text-xl font-semibold text-[#1F1F1F]">Reference-guided OC emotion sheet generation</p>
            </div>
            <div className="rounded-[2rem] border border-[#E6DED2] bg-[#EEE9FF]/55 p-6">
              <p className="text-sm text-[#6B665F]">Core Challenge</p>
              <p className="mt-2 text-xl font-semibold text-[#1F1F1F]">同时控制表情与保持角色身份一致</p>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection eyebrow="02 / Dataset & Task" title="数据与任务定义">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-[#E6DED2] bg-white/64 p-6 shadow-sm">
            <p className="text-3xl font-semibold text-[#1F1F1F]">8,755</p>
            <p className="mt-2 text-base text-[#6B665F]">labeled face panels</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6DED2] bg-white/64 p-6 shadow-sm">
            <p className="text-3xl font-semibold text-[#1F1F1F]">9,798</p>
            <p className="mt-2 text-base text-[#6B665F]">reference-target expression pairs</p>
          </div>
          <div className="rounded-[1.75rem] border border-[#E6DED2] bg-white/64 p-6 shadow-sm">
            <p className="text-3xl font-semibold text-[#1F1F1F]">6</p>
            <p className="mt-2 text-base text-[#6B665F]">neutral / happy / sad / angry / surprised / crying</p>
          </div>
        </div>
        <p className="mt-7">
          数据来自 SafeBooru 中带有 expression sheet、expressions 和 multiple expressions 标签的角色表情图。处理流程包括低质量样本过滤、动漫脸检测与裁剪、按 sheet 分组、CLIP 辅助表情标注和人工检查，最终构造同一角色内部的参考图—目标表情配对样本。
        </p>
      </DetailSection>

      <DetailSection eyebrow="03 / Method" title="方法设计：AnimeSheetAdapter">
        <div className="grid gap-5 md:grid-cols-3">
          <MethodStep
            number="1"
            title="IP-Adapter Fine-tuning"
            description="冻结 Stable Diffusion v1.5 主体，只微调 IP-Adapter 的图像投影模块与 attention processors，让模型学习从参考角色到目标表情的迁移。"
          />
          <MethodStep
            number="2"
            title="Expression-local Control"
            description="在训练损失中提高眼睛、眉毛和嘴部区域的权重，鼓励模型学习表情变化，同时尽量保留发型、服装、色彩等身份线索。"
          />
          <MethodStep
            number="3"
            title="Candidate Reranking"
            description="每个目标表情生成 4 个候选图，再综合表情匹配、身份相似度、色彩一致性、复制风险、视角和背景干净程度选择最佳结果。"
          />
        </div>
      </DetailSection>

      <DetailSection eyebrow="04 / Results" title="实验结果">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
        <p className="mt-7">
          最终 pipeline 相比 zero-shot IP-Adapter 显著提升了表情准确率和 sheet coverage，同时保持了较高的身份相似度。这说明项目的核心思路有效：用参考图保持角色身份，用表情局部控制和候选重排序增强表情可控性。
        </p>
      </DetailSection>

      <DetailSection eyebrow="05 / Reflection" title="项目反思与未来方向">
        <div className="rounded-[2rem] border border-[#E6DED2] bg-white/64 p-7 shadow-sm">
          <p>
            当前系统已经能生成较可用的正脸多表情角色面板，但仍然存在细粒度身份漂移，尤其是眼型、脸部比例和发型轮廓在困难表情中会发生变化。sad、angry、crying 等表情也更容易混淆。
          </p>
          <p className="mt-5">
            后续可以继续探索 multi-reference routing、区域级身份约束、更可靠的 view/background reranking，以及 sheet-level memory，让多个面板之间拥有更强的一致性。
          </p>
        </div>
      </DetailSection>

      <section className="mx-auto max-w-[1180px] px-6 pb-20 pt-6 md:px-10 lg:px-0">
        <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-[#E6DED2] bg-gradient-to-br from-white/80 via-[#FAF7F2] to-[#EEE9FF]/70 p-8 shadow-sm md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-[#1F1F1F]">想了解更多？</p>
            <p className="mt-2 text-[#6B665F]">这个项目后续可以继续扩展为完整 case study 页面、论文式方法图和交互式 demo。</p>
          </div>
          <a href="#/" className="rounded-full bg-[#1F1F1F] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#3A3733]">
            返回首页
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function getCurrentPath() {
  if (typeof window === "undefined") return "/";
  return window.location.hash.replace("#", "") || "/";
}

export default function App() {
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    const handleHashChange = () => {
      setPath(getCurrentPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (path === "/projects/anime-character-sheet-generation") {
    return <AnimeProjectDetailPage />;
  }

  if (path === "/projects/ai-agent-creative-tools") {
    return <VideoProjectDetailPage />;
  }

  return (
    <main className="min-h-screen scroll-smooth bg-[#FAF7F2] font-sans text-[#1F1F1F]">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Navbar />
      <Hero />
      <Projects />
      <Writing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}