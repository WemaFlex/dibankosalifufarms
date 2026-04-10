
export default function Categories() {
    return (
        <div className="single-sidebar-widget">
            <div className="wid-title wow fadeInUp" data-wow-delay=".2s">
                <h3>Catagories</h3>
            </div>
            <div className="widget_categories wow fadeInUp" data-wow-delay=".4s">
                <ul>
                    <li><a href="/shop?category=crops">Crops<span>09</span></a></li>
                    <li><a href="/shop?category=livestock">Livestock<span>56</span></a></li>
                    <li><a href="/shop?category=animal-feed">Animal Feed<span>38</span></a></li>
                </ul>
            </div>
        </div>
    )
}
