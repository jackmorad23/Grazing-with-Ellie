import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import ellieAsset from "@/assets/uploads/ellie.jpeg.asset.json";
import ellieDeliveryAsset from "@/assets/uploads/ellie-delivery.jpeg.asset.json";
import ellieEventAsset from "@/assets/uploads/ellie-event.jpeg.asset.json";
import logoAsset from "@/assets/uploads/ellie-logo.png.asset.json";
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
import largeBoardAsset from "@/assets/uploads/large-board.jpeg.asset.json";
import gal9847 from "@/assets/gallery/IMG_9847.jpeg.asset.json";
import gal9839 from "@/assets/gallery/IMG_9839.jpeg.asset.json";
import gal9899 from "@/assets/gallery/IMG_9899.jpeg.asset.json";
import gal9869b from "@/assets/gallery/IMG_9869-2.jpeg.asset.json";
import gal9865 from "@/assets/gallery/IMG_9865.jpeg.asset.json";
import gal8433 from "@/assets/gallery/IMG_8433.jpeg.asset.json";
import gal8379 from "@/assets/gallery/IMG_8379.jpeg.asset.json";
import gal8388 from "@/assets/gallery/IMG_8388.jpeg.asset.json";
import gal6678 from "@/assets/gallery/IMG_6678.jpeg.asset.json";
import gal0524 from "@/assets/gallery/IMG_0524.jpeg.asset.json";
import ellieVideoAsset from "@/assets/ellie-grazing.mp4.asset.json";
import { supabase } from "@/integrations/supabase/client";

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
const largeBoard = largeBoardAsset.url;

const heroBoard = uploaded8410;
const menuCup = uploaded8214;
const menuSmall = uploaded8884;
const menuMedium = uploaded7228;
const menuLarge = largeBoard;
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
    name: "Individual Charcuterie Cups",
    serves: "Serves 1",
    img: menuCup,
    price: null,
    desc: "Personal grazing cups styled with cured meats, cheese, fresh fruit, olives, crackers and rosemary — perfect party favours, birthdays and bridal showers. Fully customizable with themed toppers.",
  },
  {
    name: "Small Board",
    serves: "Serves 6–8",
    img: menuSmall,
    price: "$160",
    desc: "A thoughtfully composed round platter with assorted cheeses, cured meats, fresh and dried fruit, olives, nuts and crackers. Date nights, small gatherings, hostess gifts.",
  },
  {
    name: "Medium Board",
    serves: "Serves 10–12",
    img: menuMedium,
    price: "$250",
    desc: "A generous round board layered with artisan cheeses, cured meats, seasonal fruit, olives, nuts and crackers — the perfect middle-ground for dinner parties and get-togethers.",
  },
  {
    name: "Large Board",
    serves: "Serves 15–18",
    img: menuLarge,
    price: "$360",
    imgFit: "contain" as const,
    desc: "An abundant, beautifully styled board with multiple artisan cheeses, salami roses, prosciutto, seasonal berries, dried fruit and edible flowers. The signature centerpiece.",
  },
  {
    name: "Grazing Table",
    serves: "Serves 20+",
    img: menuTable,
    price: null,
    desc: "A showstopping table-length display styled in your venue — tortellini skewers, shrimp, sandwiches, charcuterie, fresh florals and seasonal abundance.",
  },
];

const GALLERY = [
  { src: gal9847.url, alt: "Gold-framed fruit platter with macarons and florals" },
  { src: gal9839.url, alt: "Crudité board with cabbage hummus bowl" },
  { src: gal9899.url, alt: "Rainbow carrot crudité board with herb dip" },
  { src: gal9869b.url, alt: "Full grazing table with tortellini skewers and charcuterie" },
  { src: gal9865.url, alt: "Dessert spread with chocolate-dipped strawberries and macarons" },
  { src: gal8433.url, alt: "Smoked salmon crostini with capers and microgreens" },
  { src: gal8379.url, alt: "Mini croissant chicken-salad sliders with edible florals" },
  { src: gal8388.url, alt: "Cucumber and dill cream cheese tea sandwiches" },
  { src: gal6678.url, alt: "Abundant cheese and charcuterie spread with fruit and olives" },
  { src: gal0524.url, alt: "Whimsical veggie crudité box with bell pepper character" },
];

const STEPS = [
  {
    n: "01",
    title: "Choose Your Board",
    text: "Browse the offerings and pick the size that suits your moment — from individual cups to a full table.",
  },
  {
    n: "02",
    title: "Customize",
    text: "Share the details — dietary notes, favourite flavours, colour palette and styling cues. We build it around you.",
  },
  {
    n: "03",
    title: "Pick Up or Delivery",
    text: "Collect your board at the agreed time, or let us deliver and style it on-site for your event.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Ellie put together a grazing board and veggie platter for our CNA Week celebration and it absolutely stole the show. Everything was fresh, beautifully arranged, and somehow tasted even better than it looked. Our whole staff couldn't stop talking about it. Ellie was easy to work with, professional, and clearly pours her heart into every board. We'll be ordering again for our next event!",
    name: "Kristina Toms, GHRC",
    event: "CNA Week",
  },
  {
    quote:
      "We ended CNA Week with a special surprise for our incredible CNAs! Our Administrator treated our incredible CNA team to a beautiful charcuterie spread from Grazing with Ellie as a thank you for their hard work, compassion, and dedication. To make the gesture even more meaningful, Ellie, who is also a school teacher, had her students create heartfelt thank-you cards for our CNAs. Their thoughtful messages brought smiles to our team and served as a wonderful reminder of the impact caregivers have every day.",
    name: "Vierra Falls Church Health & Rehab",
    event: "CNA Week",
  },
  {
    quote: "Beautiful, generous, and so thoughtfully composed. The individual cups were a hit at our birthday brunch.",
    name: "Priya K.",
    event: "Birthday Brunch",
  },
];

const FAQS = [
  {
    q: "How far in advance should I order?",
    a: "I recommend 1–2 weeks for boards and 3–4 weeks for grazing tables, especially during the holiday season. Smaller boards can often be accommodated with shorter notice — just ask.",
  },
  {
    q: "Do you accommodate dietary needs?",
    a: "Absolutely. Vegetarian, gluten-free, nut-free and dairy-conscious boards are all available — share the details in your inquiry.",
  },
  {
    q: "Delivery or pickup?",
    a: "Both. Local pickup is always available; delivery and on-site styling for grazing tables can be arranged for an additional fee based on location.",
  },
  {
    q: "Can you match a theme or colour palette?",
    a: "Yes — this is my favourite part. Share your colours, florals or theme and I'll style the board to match.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <VideoShowcase />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <InstagramBanner />
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
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/60 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Grazing with Ellie logo"
            className="h-12 w-12 rounded-full bg-white object-contain ring-1 ring-gold/40 shadow-sm sm:h-14 sm:w-14"
          />
          <span className="font-script text-2xl leading-none text-primary sm:text-3xl">Grazing with Ellie</span>
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
            Boutique charcuterie and grazing boards, lovingly composed for your celebrations, intimate gatherings and
            just-because moments.
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
            <InstagramButton variant="outline" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold/20 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] bg-card p-2 shadow-2xl shadow-burgundy/20 ring-2 ring-gold/40">
            <div className="overflow-hidden rounded-[1.65rem] ring-1 ring-border">
              <img
                src={heroBoard}
                alt="A beautifully styled charcuterie board with cheeses, meats, figs and grapes"
                width={1600}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <TagLine top="est. with love" bottom="handcrafted locally" />
        </div>
      </div>
    </section>
  );
}

function TagLine({
  top,
  bottom,
  position = "bottom-left",
  className = "",
}: {
  top: string;
  bottom: string;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  className?: string;
}) {
  const posClasses = {
    "bottom-left": "-bottom-5 -left-5 rotate-[-3deg]",
    "bottom-right": "-bottom-5 -right-5 rotate-[3deg]",
    "top-left": "-top-5 -left-5 rotate-[-3deg]",
    "top-right": "-top-5 -right-5 rotate-[3deg]",
  };
  return (
    <div
      className={`absolute hidden rounded-2xl bg-background px-5 py-4 shadow-xl ring-1 ring-border sm:block ${posClasses[position]} ${className}`}
    >
      <p className="font-script text-2xl leading-none text-primary">{top}</p>
      <p className="eyebrow mt-1 text-muted-foreground">{bottom}</p>
    </div>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function InstagramButton({
  variant = "solid",
  label = "Follow on Instagram",
  className = "",
}: {
  variant?: "solid" | "outline" | "ghost";
  label?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.28em] transition-all";
  const styles = {
    solid: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
    outline: "border border-foreground/30 text-foreground hover:border-primary hover:text-primary",
    ghost: "text-primary hover:text-primary/80",
  }[variant];
  return (
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <InstagramIcon />
      {label}
    </a>
  );
}

function InstagramBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-cream-dark/60 via-background to-gold/20 px-8 py-12 text-center shadow-sm ring-2 ring-gold/30 sm:py-14">
          <InstagramIcon className="h-10 w-10 text-primary" />
          <p className="eyebrow text-primary/80">@grazingwithellie</p>
          <h2 className="font-serif-display text-3xl text-charcoal sm:text-4xl">
            See every board on <span className="font-script text-primary">Instagram</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Fresh inspiration, behind-the-scenes styling and the latest grazing tables — straight from the prep board.
          </p>
          <InstagramButton label="Follow @grazingwithellie" />
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
      {description && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[1.5rem] bg-card p-2 shadow-xl ring-2 ring-gold/40">
            <div className="overflow-hidden rounded-[1.15rem] ring-1 ring-border">
              <img
                src={ellieAsset.url}
                alt="Ellie, founder of Ellie's Eats, behind a grand grazing table"
                width={1100}
                height={1300}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <TagLine position="bottom-right" top="teacher by day" bottom="grazer by heart" />
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-gold/40 blur-2xl md:block" />
        </div>
        <div>
          <SectionHeader align="left" eyebrow="Meet Ellie" title="A little story" accent="behind the boards" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/80">
            <p>
              Hi, I'm Ellie! I'm a full-time teacher with a passion for bringing people together through food. My love
              for creating charcuterie boards started by making them for family gatherings, holidays, and friends'
              celebrations. Before I knew it, what began as a creative hobby turned into a business I truly love.
            </p>
            <p>
              Every board I create is unique because I love customizing each one to match the occasion, theme, and
              personality of my clients. Whether it's an intimate date night, a bridal shower, a birthday, or a large
              event, my goal is always the same: to create something beautiful that makes people feel special and leaves
              a lasting impression.
            </p>
            <p>
              Seeing people smile and enjoy the experience is my favorite part, and that's what inspires every board I
              make. It's not just about the food — it's about creating a memorable centerpiece that brings people
              together one bite at a time.
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
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {MENU.map((item, idx) => (
            <article
              key={item.name}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-2 ring-gold/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-burgundy/15 hover:ring-gold/60 ${
                idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div
                className={`relative overflow-hidden ${idx < 3 ? "aspect-[4/5]" : "aspect-[5/4]"} ${
                  item.imgFit === "contain" ? "bg-cream-dark/60" : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                {idx === 4 && (
                  <TagLine
                    position="bottom-right"
                    top="custom styled"
                    bottom="at your venue"
                    className="!bottom-3 !right-3"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow text-gold">{item.serves}</p>
                <h3 className="mt-2 font-serif-display text-2xl text-charcoal">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <p className="mt-5 eyebrow text-primary">{item.price ? item.price : "Reach out for pricing"}</p>
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
              className={`relative overflow-hidden rounded-xl bg-card p-1.5 shadow-md ring-2 ring-gold/30 transition-all hover:shadow-lg hover:ring-gold/60 ${
                i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full rounded-md object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="font-serif-display text-lg italic text-charcoal/70">More moments, fresh weekly</p>
          <InstagramButton label="See more on Instagram" />
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="In motion"
          title="See a board"
          accent="come to life"
          description="A behind-the-scenes look at the color, texture and care that goes into every Grazing With Ellie creation."
        />
        <div className="mt-12 overflow-hidden rounded-3xl bg-card p-2 shadow-xl ring-2 ring-gold/40">
          <video
            src={ellieVideoAsset.url}
            className="h-full w-full rounded-2xl object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-dark/50 via-background to-cream-dark/30" />
      <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-burgundy/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="How it works" title="Three simple steps to your" accent="board" />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => {
            const imgs = [uploaded8884, uploaded0601, ellieDeliveryAsset.url];
            return (
              <div
                key={s.n}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-2 ring-gold/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-burgundy/10 hover:ring-gold/60"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={imgs[i]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 grid h-14 w-14 place-items-center rounded-full bg-background/95 font-script text-3xl text-primary shadow-md ring-1 ring-gold/40">
                    {s.n}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 text-center">
                  <h3 className="font-serif-display text-2xl text-charcoal">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";
    if (name.length < 2 || name.length > 100) nextErrors.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      nextErrors.email = "Please share a valid email.";
    if (message.length < 5 || message.length > 1000) nextErrors.message = "Tell us a little about your event.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const phone = (data.get("phone") as string)?.trim() || null;
    const date = (data.get("date") as string)?.trim() || null;
    const guestsRaw = (data.get("guests") as string)?.trim() ?? "";
    const guests = guestsRaw ? Number(guestsRaw) : null;
    const board = (data.get("board") as string)?.trim() || null;

    setSubmitting(true);
    try {
      const { error } = await supabase.from("inquiries").insert({
        name,
        email,
        phone,
        event_date: date,
        guest_count: Number.isFinite(guests) ? guests : null,
        board_type: board,
        message,
      });
      if (error) throw error;
      // Also open the user's email client with a pre-filled message so
      // Ellie gets a real email immediately while the sender domain is
      // being set up. Once a verified domain is wired in, this can be
      // removed in favor of automatic background sends.
      const subject = `New inquiry from ${name}`;
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        date ? `Event date: ${date}` : null,
        guests ? `Guests: ${guests}` : null,
        board ? `Board type: ${board}` : null,
        "",
        "Message:",
        message,
      ].filter(Boolean) as string[];
      const mailto = `mailto:grazingwithellie@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.open(mailto, "_blank");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Inquiry submission failed", err);
      setSubmitError("Something went wrong sending your inquiry. Please email grazingwithellie@gmail.com directly.");
    } finally {
      setSubmitting(false);
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
                <a href="mailto:grazingwithellie@gmail.com" className="hover:text-primary">
                  grazingwithellie@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-gold">Instagram</dt>
              <dd className="mt-1 font-serif-display text-xl text-charcoal">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  @grazingwithellie
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-gold">Service Area</dt>
              <dd className="mt-1 font-serif-display text-xl text-charcoal">Local pickup & delivery</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border sm:p-10">
          {submitted && (
            <div className="mb-6 rounded-md border border-olive/40 bg-olive/10 px-4 py-3 text-sm text-charcoal">
              Thank you — your inquiry is in. Ellie will be in touch within 48 hours.
            </div>
          )}
          {submitError && (
            <div className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {submitError}
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" error={errors.name} required maxLength={100} />
            <Field label="Email" name="email" type="email" error={errors.email} required maxLength={255} />
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
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full rounded-full bg-primary px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Sending…" : "Send Inquiry"}
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
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Grazing with Ellie logo"
              className="h-14 w-14 rounded-full bg-white object-contain ring-1 ring-gold/40"
            />
            <p className="font-script text-4xl leading-none text-primary">Grazing with Ellie</p>
          </div>
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
              <a href="mailto:grazingwithellie@gmail.com" className="hover:text-primary">
                grazingwithellie@gmail.com
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
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

function Testimonials() {
  return (
    <section className="relative bg-cream-dark/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Kind words"
          title="Loved by"
          accent="clients & guests"
          description="A few notes from the gatherings, weddings and celebrations I've had the joy of styling."
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] bg-card p-2 shadow-xl ring-2 ring-gold/40">
              <div className="overflow-hidden rounded-[1.65rem] ring-1 ring-border">
                <img
                  src={ellieEventAsset.url}
                  alt="Ellie styling a grazing table at a Vierra Communities event"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <TagLine position="bottom-left" top="on-site styling" bottom="every detail considered" />
          </div>
          <p className="font-serif-display text-2xl italic leading-relaxed text-charcoal/80 sm:text-3xl">
            "From hospital appreciation weeks to backyard birthdays — every board is built with the same care, color and
            abundance."
          </p>
          <p className="mt-4 font-serif-display text-lg text-charcoal/70">— Ellie Morad, Owner, Grazing With Ellie</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm ring-2 ring-gold/30 transition-shadow hover:shadow-lg"
            >
              <p className="font-script text-5xl leading-none text-gold">"</p>
              <blockquote className="mt-2 flex-1 font-serif-display text-lg italic leading-relaxed text-charcoal/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <p className="font-serif-display text-base text-charcoal">{t.name}</p>
                <p className="eyebrow mt-1 text-muted-foreground">{t.event}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="Good to know" title="Frequently asked" accent="questions" />
        <div className="mt-12 divide-y divide-border/70 rounded-2xl bg-card ring-2 ring-gold/30">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-display text-lg text-charcoal">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/50 text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
