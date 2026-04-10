export default function PreLoader() {
    return (
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner-wrapper ">
                    <div className="spinner"></div>
                    <img src="/assets/img/logo/black-logo-top.svg" alt="Logo" className="spinner-logo" />
                </div>
                <div className="logo-loading mt-3 text-center">
                    <img
                        width={300}
                        src="/assets/img/logo/black-logo-bottom.svg"
                        alt="Logo"
                        className="preloader-custom-logo"
                    />
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
