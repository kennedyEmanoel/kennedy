export default function Hero() {
  return (
    <section className="mx-auto flex max-w-content flex-col justify-center px-6 pt-32 pb-24 sm:px-10 sm:pt-40 sm:pb-32 lg:px-16">
      <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent-dark">
        Desenvolvedor Fullstack
      </p>

      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tightest text-foreground sm:text-6xl">
        Kennedy Emanoel
      </h1>

      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        Construo soluções de software ponta a ponta, com foco em APIs
        robustas e arquitetura sólida. Trabalho com NestJS, TypeScript,
        Next.js e PostgreSQL para transformar processos complexos em
        sistemas simples, escaláveis e confiáveis.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projetos"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
        >
          Ver projetos
        </a>
        <a
          href="#contato"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-dark"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
