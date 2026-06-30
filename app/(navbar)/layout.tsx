import Navbar from "@/components/layout-design/navbar/Navbar";
import Footer from "@/components/layout-design/footer/Footer";

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main> {/* This represents about, contact, gallery, etc. */}
      <Footer />
    </>
  );
}