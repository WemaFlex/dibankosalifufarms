import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import ChooseUsSection from "./ChooseUsSection";
import GallerySection from "./GallerySection";
import CtaSection from "./CtaSection";
import ShopSection from "./ShopSection";
import ContactSection from "./ContactSection";
import VideoSection from "./VideoSection";
import TestimonialSection from "./TestimonialSection";
import CounterSection from "./CountSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <AboutSection />
            <ServiceSection />
            <CounterSection />
            <ChooseUsSection />
            {/* <BrandSection /> */}
            <GallerySection />
            <CtaSection />
            <ShopSection />
            <VideoSection />
            <TestimonialSection />
            <ContactSection />
            {/* <NewsSection /> */}
        </>
    );
}
