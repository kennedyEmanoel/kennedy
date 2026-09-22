import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/kennedyemanoel",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kennedyemanoel",
    icon: LinkedinIcon,
  },
  {
    label: "E-mail",
    href: "mailto:contato@kennedyemanoel.dev",
    icon: MailIcon,
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between sm:px-10 lg:px-16">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Kennedy Emanoel. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-5">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors hover:text-accent-dark"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
