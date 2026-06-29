export default function TypographyShowcase() {
    return (
        <main className="min-h-screen bg-[#121212] text-[#F5F1EB]">
            <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">
                {/* Label */}
                <div className="mb-10">
                    <span className="rounded-full border border-[#E07A4F]/20 bg-[#E07A4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E07A4F]">
                        Typography System
                    </span>
                </div>

                {/* Hero */}
                <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                    <div>
                        <h1
                            className="font-heading text-6xl font-extrabold leading-[0.9] tracking-[-0.06em] md:text-8xl"
                        >
                            Visual Stories
                            <br />
                            That Convert.
                        </h1>

                        <p
                            className="mt-8 max-w-xl font-heading text-lg font-medium leading-relaxed text-[#A39D95]"
                        >
                            Manrope delivers clarity, confidence, and modern elegance.
                            It's used across all English headlines, UI elements, and
                            supporting content.
                        </p>
                    </div>

                    <div>
                        <h2
                            className="font-hindi text-5xl font-extrabold leading-tight md:text-7xl"
                        >
                            सीन बनेगा क्या?
                        </h2>

                        <p
                            className="mt-8 max-w-lg font-hindi text-xl leading-relaxed text-[#A39D95]"
                        >
                            हम सिर्फ वीडियो नहीं बनाते,
                            हम कहानियों को सिनेमैटिक अनुभव में बदलते हैं।
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Font Scale */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* English */}
                    <div className="rounded-[2rem] border border-white/5 bg-[#1D1D1F] p-10">
                        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#E07A4F]">
                            English Typography
                        </p>

                        <div className="space-y-6">
                            <h1 className="font-heading text-6xl font-extrabold">
                                Heading XL
                            </h1>

                            <h2 className="font-heading text-4xl font-bold">
                                Heading Large
                            </h2>

                            <h3 className="font-heading text-2xl font-semibold">
                                Heading Medium
                            </h3>

                            <p className="font-heading text-base text-[#A39D95]">
                                This is body text using Manrope Medium. It is designed
                                to be highly readable while maintaining a premium and
                                modern brand appearance.
                            </p>
                        </div>
                    </div>

                    {/* Hindi */}
                    <div className="rounded-[2rem] border border-white/5 bg-[#1D1D1F] p-10">
                        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#E07A4F]">
                            हिन्दी टाइपोग्राफी
                        </p>

                        <div className="space-y-6">
                            <h1 className="font-hindi text-6xl font-extrabold">
                                मुख्य शीर्षक
                            </h1>

                            <h2 className="font-hindi text-4xl font-bold">
                                बड़ा शीर्षक
                            </h2>

                            <h3 className="font-hindi text-2xl font-semibold">
                                माध्यम शीर्षक
                            </h3>

                            <p className="font-hindi text-base text-[#A39D95]">
                                यह मुख्य सामग्री के लिए उपयोग किया जाने वाला पाठ है।
                                मुक्ता फ़ॉन्ट उच्च पठनीयता और आधुनिक दृश्य पहचान
                                प्रदान करता है।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Brand Example */}
                <div className="mt-20 rounded-[2rem] border border-[#E07A4F]/10 bg-gradient-to-br from-[#E07A4F]/5 to-transparent p-12">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#E07A4F]">
                        Brand Example
                    </p>

                    <h2 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">
                        Scene Banega Kya?
                    </h2>

                    <p className="mt-6 font-hindi text-3xl font-bold">
                        कहानी ऐसी, जो याद रह जाए।
                    </p>

                    <p className="mt-8 max-w-3xl font-heading text-lg text-[#A39D95]">
                        A typography system built for cinematic storytelling,
                        premium branding, and modern content creation.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 pt-16">
                    {/* Manrope */}
                    <div className="rounded-3xl border border-white/5 bg-[#1D1D1F] p-8">
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#E07A4F]">
                            English Typography
                        </p>

                        <h3
                            className="text-4xl font-extrabold"
                            style={{
                                fontFamily: "var(--font-manrope)",
                            }}
                        >
                            Manrope
                        </h3>

                        <p className="mt-3 text-[#A39D95]">
                            Headlines, UI & Body
                        </p>

                        <div className="mt-6 space-y-2 text-sm text-[#8A847C]">
                            <p>Weight: 500 / 700 / 800</p>
                            <p>Style: Modern Sans Serif</p>
                            <p>Usage: Headings, Navigation, Buttons</p>
                        </div>
                    </div>

                    {/* Mukta */}
                    <div className="rounded-3xl border border-white/5 bg-[#1D1D1F] p-8">
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#E07A4F]">
                            Hindi Typography
                        </p>

                        <h3
                            className="text-4xl font-bold"
                            style={{
                                fontFamily: "var(--font-mukta)",
                            }}
                        >
                            Mukta
                        </h3>

                        <p className="mt-3 text-[#A39D95]">
                            Hindi Content
                        </p>

                        <div className="mt-6 space-y-2 text-sm text-[#8A847C]">
                            <p>Weight: 400 / 500 / 700</p>
                            <p>Style: Humanist Sans</p>
                            <p>Usage: Hindi Body, UI & Paragraphs</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}