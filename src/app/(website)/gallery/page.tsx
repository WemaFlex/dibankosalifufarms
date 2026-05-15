import BreadCrum from "@/app/components/BreadCrum";
import VideoGallery from "@/app/components/VideoGallery";
import GallerySection from "../home/GallerySection";

export default function GalleryPage() {
    return (
        <>
            <BreadCrum slug="Gallery" />
            <GallerySection />
            <VideoGallery />
        </>
    )
}
