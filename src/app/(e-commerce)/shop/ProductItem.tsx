
export default function ProductCard({ product, delay = ".3s" }: { product: any; delay?: string }) {
    // We destructure the product object to keep the code clean
    const {
        id,
        title,
        image,
        price,
        originalPrice, // Optional
        discount,      // Optional
        badge,         // Optional (e.g., "Sale", "Fresh")
        rating = 5     // Defaults to 5 if not provided
    } = product;

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay}>
            <div className="shop-box-items style-inner mt-0">
                <div className="shop-image">
                    <img src={image} alt={title} />

                    {/* CONDITIONAL RENDERING: Only renders if 'badge' exists */}
                    {badge && <span className="sale-icon">{badge}</span>}

                    {/* CONDITIONAL RENDERING: Only renders if 'discount' exists */}
                    {discount && <span className="discount-icon">{discount}</span>}

                    <ul className="shop-icon d-flex justify-content-center align-items-center">
                        {/* <li>
                            <a href="/cart"><i className="far fa-heart"></i></a>
                        </li> */}
                        <li>
                            <a href="/cart"><i className="far fa-shopping-cart"></i></a>
                        </li>
                        <li>
                            {/* Dynamic linking based on the product ID */}
                            <a href={`/shop/item?id=${id}`}><i className="far fa-eye"></i></a>
                        </li>
                    </ul>
                </div>

                <div className="content">
                    {/* Dynamic Star Rating: Loops to create solid/empty stars based on the rating number */}
                    <div className="star">
                        {[...Array(5)].map((_, index) => (
                            <i key={index} className={index < rating ? "fas fa-star" : "far fa-star"}></i>
                        ))}
                    </div>

                    <h5><a href={`/shop/item?id=${id}`}>{title}</a></h5>

                    <ul>
                        <li>GH¢ {price.toFixed(2)}</li>

                        {/* CONDITIONAL RENDERING: Only shows the slashed price if originalPrice exists */}
                        {originalPrice && (
                            <li>
                                <del>GH¢ {originalPrice.toFixed(2)}</del>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}