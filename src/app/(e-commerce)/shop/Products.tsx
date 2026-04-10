import CommingSoon from "@/app/components/CommingSoon";
import Pagination from "./Pagination";
import ProductCard from "./ProductItem";
import { products } from "./data";

export default function Products() {


    return (
        <div className="col-xl-8 order-1 order-xl-2">
            <div className="row g-4">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        delay={`0.${(index % 3 * 2) + 3}s`}
                    />
                ))}
            </div>
            <Pagination />
        </div>
    )
}
