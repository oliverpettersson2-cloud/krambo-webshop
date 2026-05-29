export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-ink/60 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="font-medium text-ink">Art by Cecilia K.</p>
          <p className="mt-1">Cecilia Kristoffersson · Södra Sverige</p>
        </div>
        <div className="flex flex-col md:items-end gap-1">
          <a href="mailto:cecilia.kristoffersson71@gmail.com" className="hover:text-ink">cecilia.kristoffersson71@gmail.com</a>
          <a href="tel:+46708734215" className="hover:text-ink">+46 708 73 42 15 (Curator: Magnus Florin)</a>
          <p className="mt-2">© {new Date().getFullYear()} Art by Cecilia K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
