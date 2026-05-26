export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-ink/60 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Krambo AB · Org.nr 559xxx-xxxx</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink">Köpvillkor</a>
          <a href="#" className="hover:text-ink">Integritet</a>
          <a href="mailto:hej@krambo.se" className="hover:text-ink">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
