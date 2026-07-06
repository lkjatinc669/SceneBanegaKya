import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import OfficeLocation from "./OfficeLocation";
import FAQ from "./FAQ";
import CTASection from "./CTASection";

export default function ContactPage() {
  return (
    <main className="relative bg-background min-h-screen text-foreground antialiased select-none">
      <ContactHero />
      
      {/* Main Structural Split Layout Container */}
      <section className="relative py-12 bg-background">
        <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <OfficeLocation />
      <FAQ />
    </main>
  );
}