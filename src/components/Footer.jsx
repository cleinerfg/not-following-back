import GithubIcon from "../assets/github.svg?react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900/30 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} Desenvolvido por Cleiner Furlani.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/cleinerfg"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
