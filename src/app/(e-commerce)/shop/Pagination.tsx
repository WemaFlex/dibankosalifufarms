
export default function Pagination() {
    return (
        <div className="page-nav-wrap text-center">
            <ul>
                <li className="active"><a className="page-numbers" href="javascript:void(0)"><i className="fal fa-long-arrow-left"></i></a></li>
                <li><a className="page-numbers" href="javascript:void(0)">01</a></li>
                <li><a className="page-numbers" href="javascript:void(0)">02</a></li>
                <li className="active"><a className="page-numbers" href="javascript:void(0)"><i className="fal fa-long-arrow-right"></i></a></li>
            </ul>
        </div>
    )
}
