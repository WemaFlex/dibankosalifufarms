import BreadCrum from "@/app/components/BreadCrum";
import Categories from "./Categories";
import SearchProduct from "./SearchProduct";
import TagsFilter from "./TagsFilter";
import Products from "./Products";
import CommingSoon from "@/app/components/CommingSoon";

export default function ShopPage() {
    return <CommingSoon />

    return (
        <>
            <BreadCrum slug="Our Products" />

            <section className="shop-section section-padding fix">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-7 order-2 order-xl-1">
                            <div className="shop-main-sidebar">
                                <SearchProduct />
                                <Categories />
                                <TagsFilter />
                                {/* <BestSellers /> */}
                                {/* <PriceFilter /> */}
                            </div>
                        </div>

                        <Products />
                    </div>
                </div>
            </section>
        </>
    )
}
