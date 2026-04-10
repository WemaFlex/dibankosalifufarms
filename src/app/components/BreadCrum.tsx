
export default function BreadCrum({ slug }: { slug: string }) {
    return (
        <section className="breadcrumb-wrapper bg-cover fix" style={{ backgroundImage: "url('/assets/img/inner-page/breadcroumb.jpg')" }}>
            <div className="shape-1 float-bob-y">
                <img src="/assets/img/inner-page/shape-1.png" alt="img" />
            </div>
            <div className="shape-2 float-bob-x">
                <img src="/assets/img/inner-page/shape-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="page-heading">
                    <ul className="breadcrumb-list wow fadeInUp">
                        <li>Home</li>
                        <li>{"//"}</li>
                        <li>{slug}</li>
                    </ul>
                    <h1 className="breadcrumb-title text-anim">{slug}</h1>
                </div>
            </div>
        </section>
    )
}
