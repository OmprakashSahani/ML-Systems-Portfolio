import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl border-t border-white/10 py-6 text-center">
      <p className="text-sm text-gray-500">© 2026 Omprakash Sahani</p>
      <p className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-gray-600">
        <Link href="/about" className="transition hover:text-blue-300">About</Link><span aria-hidden="true">·</span>
        <Link href="/journey" className="transition hover:text-blue-300">Engineering Story</Link><span aria-hidden="true">·</span>
        <Link href="/projects" className="transition hover:text-blue-300">Projects</Link><span aria-hidden="true">·</span>
        <a href="mailto:Omprakash.Sahani1206@gmail.com" className="transition hover:text-blue-300">Email</a><span aria-hidden="true">·</span>
        <a href="https://github.com/OmprakashSahani" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-300">GitHub</a><span aria-hidden="true">·</span>
        <a href="https://www.linkedin.com/in/omprakashsahani/" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-300">LinkedIn</a>
      </p>
    </footer>
  );
}
