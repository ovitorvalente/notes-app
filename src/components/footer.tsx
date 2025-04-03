export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ovitorvalente",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ovitorvalente/",
    },
    {
      name: "Portfolio",
      url: "https://euvitordev.vercel.app/",
    },
  ];
  return (
    <footer className="bottom-0 fixed py-4">
      <div className="flex gap-24">
        <a
          target="_blank"
          href="https://github.com/ovitorvalente"
          className="text-sm text-slate-300 font-medium hover:text-blue-500 duration-200 delay-75 transition-all"
          rel="noopener noreferrer"
        >
          Criado por <span className="font-bold">Vitor Valente</span> com ❤️
          para tornar sua produtividade mais eficiente!
        </a>

        <div className="flex items-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-opacity-80 text-sm font-bold hover:text-slate-100 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
