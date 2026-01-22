import gokuBase from "@/assets/goku-base-form.jpg";
import gokuLineArt from "@/assets/goku-line-art.jpg";
import vegetaMajin from "@/assets/vegeta-majin.jpg";

type ProductCard = {
  name: string;
  label: string;
  rating: number; // 0–5, half steps allowed
  imageSrc: string;
  imageAlt: string;
};

const products: ProductCard[] = [
  {
    name: "Goku — Base Form",
    label: "Symbol print",
    rating: 4.0,
    imageSrc: gokuBase,
    imageAlt: "Goku base form Dragon Ball Z t-shirt",
  },
  {
    name: "Goku — Super Saiyan",
    label: "Line-art edition",
    rating: 4.5,
    imageSrc: gokuLineArt,
    imageAlt: "Goku Super Saiyan line art t-shirt",
  },
  {
    name: "Vegeta — Majin Arc",
    label: "Graphic edition",
    rating: 4.0,
    imageSrc: vegetaMajin,
    imageAlt: "Vegeta Majin form Dragon Ball Z t-shirt",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  return (
    <div className="mt-3 flex gap-0.5 text-neutral-500">
      {[...Array(5)].map((_, i) => {
        if (i < full) return <span key={i}>★</span>;
        if (i === full && half) return <span key={i}>☆</span>;
        return <span key={i}>☆</span>;
      })}
    </div>
  );
}

export default function ProductSelectionGrid() {
  return (
    <section aria-labelledby="product-grid-heading" className="bg-neutral-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <header className="max-w-2xl">
          <h2
            id="product-grid-heading"
            className="font-sans text-3xl leading-tight tracking-tight text-neutral-100 md:text-4xl"
          >
            Choose your form.
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-neutral-400 md:text-lg">
            Dragon Ball T-shirts
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="flex flex-col">
              {/* Image */}
              <div className="rounded-2xl bg-neutral-100 p-6">
                <img
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="aspect-square w-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <h3 className="font-sans text-lg font-normal leading-snug text-neutral-100">
                  {p.name}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-neutral-400">
                  {p.label}
                </p>

                <Stars rating={p.rating} />

                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-4 py-2 font-sans text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-100"
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
