import Navbar from "@/component/layout-design/navbar/Navbar";
import Footer from "@/component/layout-design/footer/Footer";

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main> 
      <Footer />
    </>
  );
}