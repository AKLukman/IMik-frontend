import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Fresh Fruits",
    slug: "fruits",
    image: "/fresh-fruits.jpg",
    description: "Fresh & juicy",
  },
  {
    name: "Vegetables",
    slug: "vegetables",
    image: "/vegtables.jpg",
    description: "Farm fresh",
  },
  {
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    image: "/dairy-eggs.jpg",
    description: "Fresh everyday",
  },
  {
    name: "Bakery",
    slug: "bakery",
    image: "/bakery.jpg",
    description: "Baked today",
  },
  {
    name: "Meat & Seafood",
    slug: "meat-seafood",
    image: "/meat.jpg",
    description: "Quality cuts",
  },
  {
    name: "Drinks",
    slug: "drinks",
    image: "/drinks.jpg",
    description: "Refreshing choices",
  },
  {
    name: "Snacks",
    slug: "snacks",
    image: "/snacks.jpg",
    description: "Something tasty",
  },
  {
    name: "Pantry",
    slug: "pantry",
    image: "/pantry.jpg",
    description: "Everyday essentials",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-base-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Shop by category
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base">
              Browse our fresh selection of groceries and everyday essentials.
            </p>
          </div>

          <Link
            href="/shop"
            className="btn btn-outline btn-sm rounded-full self-start sm:self-auto"
          >
            View all
          </Link>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-base-200">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-xs font-medium text-white/70">
                    {category.description}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
