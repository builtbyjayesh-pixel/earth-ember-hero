import gokuBase from "@/assets/goku-base-form.jpg";
import gokuLineArt from "@/assets/goku-line-art.jpg";
import vegetaMajin from "@/assets/vegeta-majin.jpg";

type ProductCard = {
  name: string;
  label: string;
  rating: number;
  imageSrc: string;
  imageAlt: string;
};

const products: ProductCard[] = [
  {
    name: "Goku — Super Saiyan",
    label: "Line-art edition",
    rating: 4.5,
    imageSrc: gokuLineArt,
    imageAlt: "Goku Super Saiyan line art t-shirt",
  },
  {
    name: "Goku — Base Form",
    label: "Symbol print",
    rating: 4.0,
    imageSrc: gokuBase,
    imageAlt: "Goku base form Dragon Ball Z t-shirt",
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
    <div className="mt-3 flex gap-0.5 text-[13px] leading-none text-neutral-500">
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
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <header className="max-w-3xl">
          <h2
            id="product-grid-heading"
            className="font-sans text-4xl leading-[1.15] tracking-tight text-neutral-100 md:text-5xl"
          >
            Choose your form.
          </h2>
          <p className="mt-4 font-sans text-sm tracking-wide text-neutral-400 md:text-base">
            Dragon Ball T-shirts
          </p>
        </header>

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-3">
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
              <div className="mt-7">
                <h3 className="font-sans text-xl font-normal leading-snug text-neutral-100">
                  {p.name}
                </h3>
                <p className="mt-1 font-sans text-sm tracking-wide text-neutral-400">
                  {p.label}
                </p>

                <Stars rating={p.rating} />

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-2 font-sans text-sm tracking-wide text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-100"
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
