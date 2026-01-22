import crochetBag from "@/assets/crochet-bag.jpg";
import potteryHero from "@/assets/pottery-hero.jpg";

type ProductCard = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const products: ProductCard[] = [
  {
    name: "Vegeta Tee",
    description: "Clean graphic, everyday fit.",
    imageSrc: crochetBag,
    imageAlt: "Vegeta Dragon Ball Z T-shirt product photo",
  },
  {
    name: "Dragon Ball Hub",
    description: "A calm, central collage look.",
    imageSrc: potteryHero,
    imageAlt: "Dragon Ball Z hub graphic product image",
  },
  {
    name: "Goku Line Art Tee",
    description: "Minimal line art on black.",
    imageSrc: crochetBag,
    imageAlt: "Goku line art black crew neck tee product photo",
  },
];

export default function ProductSelectionGrid() {
  return (
    <section aria-labelledby="product-grid-heading" className="bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <header className="max-w-2xl">
          <h2
            id="product-grid-heading"
            className="font-sans text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            All designs. Choose your form.
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
            Dragon Ball T-shirts
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
          {products.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <div className="overflow-hidden rounded-xl border border-border">
                <img
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-sans text-lg font-medium leading-snug text-foreground">{p.name}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-4 py-2 font-sans text-sm font-medium text-foreground/80"
                  >
                    View details
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
