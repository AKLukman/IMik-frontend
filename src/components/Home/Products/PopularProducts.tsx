import Link from "next/link";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Organic Red Apples",
    category: "Fresh Fruits",
    price: 2.49,
    oldPrice: 2.99,
    rating: 4.8,
    reviews: 124,
    image: "/apples.jpg",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Fresh Organic Bananas",
    category: "Fresh Fruits",
    price: 1.49,
    rating: 4.7,
    reviews: 98,
    image: "/banana.jpg",
    badge: "Fresh",
  },
  {
    id: 3,
    name: "Fresh Whole Milk",
    category: "Dairy & Eggs",
    price: 1.65,
    rating: 4.9,
    reviews: 156,
    image: "/milk.jpg",
  },
  {
    id: 4,
    name: "Farm Fresh Eggs",
    category: "Dairy & Eggs",
    price: 3.25,
    oldPrice: 3.75,
    rating: 4.8,
    reviews: 87,
    image: "/eggs.jpg",
    badge: "Deal",
  },
  {
    id: 5,
    name: "Fresh Sourdough Bread",
    category: "Bakery",
    price: 2.95,
    rating: 4.9,
    reviews: 76,
    image: "/bread.jpg",
  },
  {
    id: 6,
    name: "Fresh Orange Juice",
    category: "Drinks",
    price: 2.75,
    rating: 4.6,
    reviews: 63,
    image: "/orange-juice.jpg",
  },
  {
    id: 7,
    name: "Premium Mixed Vegetables",
    category: "Vegetables",
    price: 3.49,
    rating: 4.8,
    reviews: 91,
    image: "/mixed-vegtables.jpg",
  },
  {
    id: 8,
    name: "Premium Potato Crisps",
    category: "Snacks",
    price: 1.99,
    rating: 4.5,
    reviews: 54,
    image: "/potato-crisps.jpg",
  },
];

const PopularProducts = () => {
  return (
    <section className="bg-base-200/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Customer favourites
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Popular products
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base">
              Discover the groceries our customers love most.
            </p>
          </div>

          <Link
            href="/shop"
            className="btn btn-outline btn-sm rounded-full self-start sm:self-auto"
          >
            View all products
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
