import BreadCrum from "@/app/components/BreadCrum";
import FaqsSection from "./FaqsSection";
import ContactFormSection from "../contact-us/ContactFormSection";

export default function FAQsPage() {
    return (
        <>
            <BreadCrum slug="Our FAQs" />
            <FaqsSection />
            <ContactFormSection />
        </>
    )
}
