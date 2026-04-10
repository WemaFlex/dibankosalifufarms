import Link from "next/link";

export default function VideoSection() {
    return (
        <div className="video-section parallaxie fix">
            <div className="video-wrapper">
                <div className="video">
                    <img src="/assets/img/home-1/video.png" alt="img" />
                    <Link href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                        <i className="fas fa-play"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
