import BreadCrum from "@/app/components/BreadCrum";
import CounterSection from "../home/CountSection";
import ShopSection from "../home/ShopSection";
import TestimonialSection from "../home/TestimonialSection";
import OurStorySection from "./OurStorySection";
import GallerySection from "../home/GallerySection";
import ChooseUsSection from "../home/ChooseUsSection";

export default function AboutUsPage() {
    return (
        <>
            <BreadCrum slug="About Us" />
            <OurStorySection />
            <CounterSection />
            <ChooseUsSection />
            <ShopSection />
            <TestimonialSection />
            <GallerySection />
        </>
    )
}
