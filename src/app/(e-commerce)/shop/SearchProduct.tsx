
export default function SearchProduct() {
    return (
        <div className="single-sidebar-widget">
            <div className="wid-title wow fadeInUp" data-wow-delay=".2s">
                <h3>Search</h3>
            </div>
            <div className="search_widget wow fadeInUp">
                <form action="#">
                    <input type="text" placeholder="Keywords here...." />
                    <button type="submit"><i className="fal fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}
