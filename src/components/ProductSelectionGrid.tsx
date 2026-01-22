import gokuBase from "@/assets/goku-base-form.jpg";
import gokuLineArt from "@/assets/goku-line-art.jpg";
import vegetaMajin from "@/assets/vegeta-majin.jpg";

type ProductCard = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const products: ProductCard[] = [
  {
    name: "Goku — Base Form",
    description: "Minimal symbol print.",
    imageSrc: gokuBase,
    imageAlt: "Goku base form Dragon Ball Z t-shirt",
  },
  {
    name: "Goku — Super Saiyan",
    description: "Clean line-art illustration.",
    imageSrc: gokuLineArt,
    imageAlt: "Goku Super Saiyan line art t-shirt",
  },
  {
    name: "Vegeta — Majin Arc",
    description: "High-contrast graphic.",
    imageSrc: vegetaMajin,
    imageAlt: "Vegeta Majin form Dragon Ball Z t-shirt",
  },
];

export default function ProductSelectionGrid() {
  return (
    <section
      aria-labelledby="product-grid-heading"
      className="bg-neutral-950"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <header className="max-w-2xl">
          <h2
            id="product-grid-heading"
            className="font-sans text-3xl leading-tight tracking-tight text-neutral-100 md:text-4xl"
          >
            All designs. Choose your form.
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-neutral-400 md:text-lg">
            Dragon Ball T-shirts
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
          {products.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <div className="overflow-hidden rounded-xl border border-neutral-800/60">
                <img
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-sans text-lg font-normal leading-snug text-neutral-100">
                  {p.name}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-400">
                  {p.description}
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-4 py-2 font-sans text-sm font-medium text-neutral-300"
                  >
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
