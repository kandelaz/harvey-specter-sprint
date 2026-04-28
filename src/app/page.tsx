const heroImage =
  "https://www.figma.com/api/mcp/asset/3fc1a6cd-fa38-4515-8ef9-1c9d7b3cbf54";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-neutral-400">
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
      />

      {/* Frosted glass overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-md bg-[rgba(217,217,217,0.01)]" />

      <div className="relative flex flex-col h-full px-4 md:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 shrink-0">
          <span className="text-base font-semibold tracking-[-0.04em] capitalize text-black">
            H.Studio
          </span>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-14 text-base font-semibold tracking-[-0.04em] capitalize text-black">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-opacity hover:opacity-60"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
            Let&apos;s talk
          </button>

          {/* Mobile hamburger */}
          <button className="md:hidden" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex flex-col justify-end md:justify-between pb-8 md:pb-10">
          {/* Heading block */}
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[14px] text-white uppercase mix-blend-overlay px-[18px] leading-[1.1]">
              [ Hello i&apos;m ]
            </p>
            <h1 className="text-[clamp(80px,13.75vw,198px)] font-medium text-white mix-blend-overlay text-center capitalize leading-[0.9] tracking-[-0.07em] whitespace-nowrap">
              Harvey&nbsp;&nbsp;&nbsp;Specter
            </h1>
          </div>

          {/* Description — right-aligned on desktop, left on mobile */}
          <div className="flex md:justify-end mt-6 md:mt-0">
            <div className="max-w-[294px] flex flex-col gap-4">
              <p className="text-[13px] font-bold italic text-[#1f1f1f] uppercase tracking-[-0.04em] leading-[1.1]">
                H.Studio is a{" "}
                <span className="font-normal">full-service</span> creative
                studio creating beautiful digital experiences and products. We
                are an <span className="font-normal">award winning</span> design
                and art group specializing in branding, web design and
                engineering.
              </p>
              <button className="w-fit bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
