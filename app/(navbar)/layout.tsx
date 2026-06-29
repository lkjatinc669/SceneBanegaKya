import Navbar from "@/components/layout-design/Navbar";
import Footer from "@/components/layout-design/Footer";

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