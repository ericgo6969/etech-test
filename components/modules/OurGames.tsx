import React, { useEffect, useRef } from "react";
import { Card } from "../elements";
import { games } from "@/mock/games";
import { GameCard } from "@/types/games";
import { useTranslations } from "next-intl";
import gsap from "gsap";

export default function OurGames() {
    const title = useRef(null);
    const desc = useRef(null);
    const t = useTranslations("GameSection");

    useEffect(() => {
        const animation = gsap
            .timeline({ paused: true })
            .fromTo(
                title.current,
                {
                    y: 75,
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: title.current,
                        start: "-=100px bottom",
                        end: "bottom center",
                        scrub: true,
                        markers: false,
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power4.inOut",
                }
            )
            .fromTo(
                desc.current,
                {
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: desc.current,
                        start: "-=100px bottom",
                        end: "bottom center",
                        scrub: true,
                        markers: false,
                    },
                    opacity: 1,
                    duration: 0.5,
                    ease: "power4.inOut",
                }
            );
        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section
            id="our-games-section"
            className="w-full flex flex-col gap-20 justify-center items-center"
        >
            <div className="flex flex-col justify-center items-center text-center">
                <div className="h-fit overflow-hidden">
                    <h2
                        ref={title}
                        className="md:text-6xl text-[40px] font-primary font-black mb-6"
                    >
                        {t("title")}
                    </h2>
                </div>
                <p ref={desc} className="text-sm md:w-[55%] w-full md:p-0 px-4">
                    {t("desc")}
                </p>
            </div>
            <div className="w-full grid lg:grid-cols-4 grid-cols-2 md:gap-10 gap-4 lg:px-0 px-4 [&>div:nth-child(2n-2)]:top-24 [&>div:nth-child(2n-2)]:relative">
                {games.map(({ title, description, img }: GameCard) => (
                    <Card
                        key={title}
                        title={title}
                        description={description}
                        img={img}
                    />
                ))}
            </div>
        </section>
    );
}
