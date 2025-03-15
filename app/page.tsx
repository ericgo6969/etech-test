"use client";

import { ScrollToTop } from "@/components/elements";
import {
    About,
    Banner,
    Footer,
    Header,
    OurGames,
    OurParners,
} from "@/components/modules";

export default function Home() {
    return (
        <div className="overflow-x-hidden bg-white">
            <Header />
            <main className="w-screen flex flex-col gap-32">
                <Banner />
                <div className="lg:mx-20 mx-0 flex flex-col gap-32 ">
                    <About />
                    <OurGames />
                </div>
            </main>
            <OurParners />
            <Footer />
            <ScrollToTop />
        </div>
    );
}
