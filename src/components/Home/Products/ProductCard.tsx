import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-base-200 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-base-200">
          {/* Badge */}
          {product.badge && (
            <div className="absolute left-3 top-3 z-10">
              <span className="badge badge-primary font-medium">
                {product.badge}
              </span>
            </div>
          )}

          {/* Wishlist */}
          <button
            type="button"
            aria-label={`Add ${product.name} to wishlist`}
            className="btn btn-circle btn-sm absolute right-3 top-3 z-10 border-none bg-base-100/90 shadow-sm backdrop-blur transition hover:bg-base-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>
          </button>

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wide text-base-content/40">
          {product.category}
        </p>

        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 line-clamp-2 min-h-12 text-base font-semibold transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex items-center text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.56-.95L12 2.5Z" />
            </svg>
          </div>

          <span className="text-sm font-medium">{product.rating}</span>

          <span className="text-xs text-base-content/40">
            ({product.reviews})
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                £{product.price.toFixed(2)}
              </span>

              {product.oldPrice && (
                <span className="text-sm text-base-content/40 line-through">
                  £{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            type="button"
            className="btn btn-primary btn-sm btn-circle"
            aria-label={`Add ${product.name} to cart`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-1.5 1.5A1 1 0 0 0 6.2 16h10.3M9 19.5a1 1 0 1 0 0 .01M17 19.5a1 1 0 1 0 0 .01"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
