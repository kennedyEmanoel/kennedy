export type Project = {
  title: string;
  description: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    title: "MES API — Chão de Fábrica",
    description:
      "API para monitoramento e controle de processos de produção em tempo real, com rastreabilidade de ordens e integração entre setores da planta.",
    technologies: ["NestJS", "PostgreSQL", "Prisma", "Docker"],
  },
  {
    title: "Automação e Validação de Dados",
    description:
      "Pipeline de automação para validação e tratamento de dados de produção, reduzindo inconsistências manuais e tempo de processamento.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Painel de Indicadores Industriais",
    description:
      "Dashboard fullstack para acompanhamento de KPIs de produtividade, com autenticação, permissões por perfil e gráficos em tempo real.",
    technologies: ["Next.js", "NestJS", "Prisma", "Vercel"],
  },
  {
    title: "Plataforma de Gestão Interna",
    description:
      "Sistema web para gestão de cadastros e fluxos internos, com foco em arquitetura escalável e organização modular do backend.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
];
