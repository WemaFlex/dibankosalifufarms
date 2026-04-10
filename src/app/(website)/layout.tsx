import BackToTop from "../components/BackToTop";
import ContactUsOffCanvas from "../components/ContactUsOffCanvas";
import CustomMouseCursor from "../components/CustomMouseCursor";
import PreLoader from "../components/Preloader";
import StickyHeader from "../components/StickyHeader";
import TopHeader from "../components/TopHeader";
import FooterSection from "../components/FooterSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PreLoader />
      <BackToTop />
      <CustomMouseCursor />
      <ContactUsOffCanvas />
      <TopHeader />
      <StickyHeader />
      {children}
      <FooterSection />
    </>
  );
}
