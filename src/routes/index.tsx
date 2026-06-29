import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import aboutEllie from "@/assets/about-ellie.jpg";
import uploadedBafAsset from "@/assets/uploads/BAF6B960-EDAB-48AD-BE5D-5C9C1BBC8C71.jpeg.asset.json";
import uploaded0601Asset from "@/assets/uploads/IMG_0601.jpeg.asset.json";
import uploaded0603Asset from "@/assets/uploads/IMG_0603.jpeg.asset.json";
import uploaded7228Asset from "@/assets/uploads/IMG_7228.jpeg.asset.json";
import uploaded8214Asset from "@/assets/uploads/IMG_8214.jpeg.asset.json";
import uploaded8410Asset from "@/assets/uploads/IMG_8410.jpeg.asset.json";
import uploaded8884Asset from "@/assets/uploads/IMG_8884.jpeg.asset.json";
import uploaded9867Asset from "@/assets/uploads/IMG_9867.jpeg.asset.json";
import uploaded9869Asset from "@/assets/uploads/IMG_9869.jpeg.asset.json";
import uploaded9911Asset from "@/assets/uploads/IMG_9911.jpeg.asset.json";

const uploadedBaf = uploadedBafAsset.url;
const uploaded0601 = uploaded0601Asset.url;
const uploaded0603 = uploaded0603Asset.url;
const uploaded7228 = uploaded7228Asset.url;
const uploaded8214 = uploaded8214Asset.url;
const uploaded8410 = uploaded8410Asset.url;
const uploaded8884 = uploaded8884Asset.url;
const uploaded9867 = uploaded9867Asset.url;
const uploaded9869 = uploaded9869Asset.url;
const uploaded9911 = uploaded9911Asset.url;

const heroBoard = uploaded8410;
const menuBox = uploaded8214;
const menuSmall = uploaded7228;
const menuLarge = uploaded8884;
const menuTable = uploaded9869;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grazing with Ellie — Handcrafted Charcuterie Boards" },
      {
        name: "description",
        content:
          "Boutique, made-to-order charcuterie and grazing boards for events, gifts, and gatherings. One bite at a time.",
      },
      { property: "og:title", content: "Grazing with Ellie — Handcrafted Charcuterie Boards" },
      {
        property: "og:description",
        content: "Boutique, made-to-order charcuterie and grazing boards. One bite at a time.",
      },
    ],
  }),
  component: Home,
});

const INSTAGRAM_URL = "https://instagram.com/grazingwithellie";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Offerings", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "How It Works", href: "#how" },
  { label: "Inquire", href: "#contact" },
];

const MENU = [
  {
    name: "Individual Grazing Box",
    serves: "Serves 1",
    img: menuBox,
    desc: "Personal grazing cups styled with cured meats, cheese, fresh fruit, olives, crackers and rosemary — perfect party favours, birthdays and bridal showers. Fully customizable with themed toppers.",
  },
  {
    name: "Small Board",
    serves: "Serves 4–6",
    img: menuSmall,
    desc: "A thoughtfully composed round platter with assorted cheeses, cured meats, fresh and dried fruit, olives, nuts and crackers. Date nights, small gatherings, hostess gifts.",
  },
  {
    name: "Large Board",
    serves: "Serves 8–12",
    img: menuLarge,
    desc: "An abundant, beautifully styled board with multiple artisan cheeses, salami roses, prosciutto, seasonal berries, dried fruit and edible flowers. The signature centerpiece.",
  },
  {
    name: "Grazing Table",
    serves: "Serves 20+",
    img: menuTable,
    desc: "A showstopping table-length display styled in your venue — tortellini skewers, shrimp, sandwiches, charcuterie, fresh florals and seasonal abundance.",
  },
];

const GALLERY = [
  { src: uploadedBaf, alt: "Uploaded grazing board photo from Ellie" },
  { src: uploaded0601, alt: "Uploaded vegetable platter photo from Ellie" },
  { src: uploaded0603, alt: "Uploaded fruit platter photo from Ellie" },
  { src: uploaded7228, alt: "Uploaded round charcuterie tray photo from Ellie" },
  { src: uploaded8214, alt: "Uploaded individual grazing cups photo from Ellie" },
  { src: uploaded8410, alt: "Uploaded grand charcuterie board photo from Ellie" },
  { src: uploaded8884, alt: "Uploaded floral charcuterie board photo from Ellie" },
  { src: uploaded9867, alt: "Uploaded grazing table detail photo from Ellie" },
  { src: uploaded9869, alt: "Uploaded full grazing table photo from Ellie" },
  { src: uploaded9911, alt: "Uploaded celebration food spread photo from Ellie" },
];

const STEPS = [
  { n: "01", title: "Choose Your Board", text: "Browse the offerings and pick the size that suits your moment — from a grazing box to a full table." },
  { n: "02", title: "Customize", text: "Share the details — dietary notes, favourite flavours, colour palette and styling cues. We build it around you." },
  { n: "03", title: "Pick Up or Delivery", text: "Collect your board at the agreed time, or let us deliver and style it on-site for your event." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-script text-3xl leading-none text-primary">
          Grazing with Ellie
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-charcoal/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Inquire
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
        >
          <span className="block h-px w-5 bg-current relative before:absolute before:-top-1.5 before:left-0 before:h-px before:w-5 before:bg-current after:absolute after:top-1.5 after:left-0 after:h-px after:w-5 after:bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="eyebrow border-b border-border/40 py-3 text-foreground/80"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* soft cream gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-dark/40 via-background to-background" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="eyebrow text-primary/80">Handcrafted · Made to Order</p>
          <h1 className="mt-5 font-script text-6xl leading-[0.95] text-primary sm:text-7xl lg:text-8xl">
            Grazing
            <br />
            with Ellie
          </h1>
          <p className="mx-auto mt-6 max-w-md font-serif-display text-2xl italic text-charcoal/70 sm:text-3xl lg:mx-0">
            One bite at a time.
          </p>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0">
            Boutique charcuterie and grazing boards, lovingly composed for your
            celebrations, intimate gatherings and just-because moments.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="rounded-full border border-foreground/30 px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View Offerings
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/20 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-burgundy/20 ring-1 ring-border">
            <img
              src={heroBoard}
              alt="A beautifully styled charcuterie board with cheeses, meats, figs and grapes"
              width={1600}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] rounded-2xl bg-background px-5 py-4 shadow-xl ring-1 ring-border sm:block">
            <p className="font-script text-3xl leading-none text-primary">est. with love</p>
            <p className="eyebrow mt-1 text-muted-foreground">handcrafted locally</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow text-primary/80">{eyebrow}</p>
      <h2 className="mt-4 font-serif-display text-4xl text-charcoal sm:text-5xl">
        {title}
        {accent && <span className="font-script text-primary"> {accent}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[1.5rem] shadow-xl ring-1 ring-border">
            <img
              src={aboutEllie}
              alt="Hands styling cheese and prosciutto on a wooden board"
              width={1100}
              height={1300}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-gold/40 blur-2xl md:block" />
        </div>
        <div>
          <SectionHeader
            align="left"
            eyebrow="Meet Ellie"
            title="A little story"
            accent="behind the boards"
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/80">
            <p>
              Hi, I'm Ellie! I'm a full-time teacher with a passion for bringing people together through food. My love for creating charcuterie boards started by making them for family gatherings, holidays, and friends' celebrations. Before I knew it, what began as a creative hobby turned into a business I truly love.
            </p>
            <p>
              Every board I create is unique because I love customizing each one to match the occasion, theme, and personality of my clients. Whether it's an intimate date night, a bridal shower, a birthday, or a large event, my goal is always the same: to create something beautiful that makes people feel special and leaves a lasting impression.
            </p>
            <p>
              Seeing people smile and enjoy the experience is my favorite part, and that's what inspires every board I make. It's not just about the food — it's about creating a memorable centerpiece that brings people together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="relative bg-cream-dark/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Offerings"
          title="Boards for every"
          accent="occasion"
          description="From a quiet night in to a celebration that fills the room — there's a board for the moment you're planning."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MENU.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-burgundy/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow text-gold">{item.serves}</p>
                <h3 className="mt-2 font-serif-display text-2xl text-charcoal">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <p className="mt-5 eyebrow text-primary">Reach out for pricing</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-xl text-center text-sm italic text-muted-foreground">
          Every board is custom — pricing varies with size, season and styling.
          <a href="#contact" className="ml-1 text-primary underline-offset-4 hover:underline">
            Send an inquiry
          </a>{" "}
          for a personal quote.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="A taste of"
          accent="past boards"
          description="A little peek at boards from recent gatherings, gifts and grazing tables."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl bg-cream-dark ring-1 ring-border ${
                i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow inline-flex items-center gap-2 text-primary hover:text-primary/80"
          >
            See more on Instagram <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative bg-charcoal py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">How it works</p>
          <h2 className="mt-4 font-serif-display text-4xl text-cream sm:text-5xl">
            Three simple steps to your
            <span className="font-script text-gold"> board</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <p className="font-script text-6xl leading-none text-gold">{s.n}</p>
              <h3 className="mt-4 font-serif-display text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";
    if (name.length < 2 || name.length > 100) nextErrors.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      nextErrors.email = "Please share a valid email.";
    if (message.length < 5 || message.length > 1000)
      nextErrors.message = "Tell us a little about your event.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Inquire"
            title="Let's build your"
            accent="board"
            description="Tell me about your event and I'll be in touch within 48 hours with ideas and a personal quote."
          />
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow text-gold">Email</dt>
              <dd className="mt-1 font-serif-display text-xl text-charcoal">
                <a href="mailto:hello@grazingwithellie.com" className="hover:text-primary">
                  hello@grazingwithellie.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-gold">Instagram</dt>
              <dd className="mt-1 font-serif-display text-xl text-charcoal">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @grazingwithellie
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-gold">Service Area</dt>
              <dd className="mt-1 font-serif-display text-xl text-charcoal">
                Local pickup & delivery
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border sm:p-10"
        >
          {submitted && (
            <div className="mb-6 rounded-md border border-olive/40 bg-olive/10 px-4 py-3 text-sm text-charcoal">
              Thank you — your inquiry is in. I'll be in touch soon.
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" error={errors.name} required maxLength={100} />
            <Field
              label="Email"
              name="email"
              type="email"
              error={errors.email}
              required
              maxLength={255}
            />
            <Field label="Phone" name="phone" type="tel" maxLength={30} />
            <Field label="Event Date" name="date" type="date" />
            <Field label="Guest Count" name="guests" type="number" />
            <div className="flex flex-col gap-2">
              <label className="eyebrow text-charcoal/70" htmlFor="board">
                Board Type
              </label>
              <select
                id="board"
                name="board"
                defaultValue=""
                className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {MENU.map((m) => (
                  <option key={m.name} value={m.name}>
                    {m.name}
                  </option>
                ))}
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="eyebrow text-charcoal/70" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              required
              className={`rounded-md border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 ${
                errors.message ? "border-destructive" : "border-input"
              }`}
              placeholder="Tell me about your event, vibe, dietary notes…"
            />
            {errors.message && (
              <p className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-primary px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow text-charcoal/70" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className={`rounded-md border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 ${
          error ? "border-destructive" : "border-input"
        }`}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream-dark/30 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <p className="font-script text-4xl leading-none text-primary">Grazing with Ellie</p>
          <p className="mt-3 font-serif-display italic text-charcoal/70">One bite at a time.</p>
        </div>
        <div>
          <p className="eyebrow text-gold">Visit</p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Stay in touch</p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
            <li>
              <a href="mailto:hello@grazingwithellie.com" className="hover:text-primary">
                hello@grazingwithellie.com
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                @grazingwithellie
              </a>
            </li>
            <li>Local pickup & delivery</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Grazing with Ellie. Handcrafted with love.
      </p>
    </footer>
  );
}