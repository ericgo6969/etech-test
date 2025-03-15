import Image from "next/image";
import React, { useEffect, useRef } from "react";

import Background from "@/public/assets/images/banner-bg.jpg";
import BackgroundCutShape from "@/public/assets/images/banner-bg--shape.png";
import Fairy from "@/public/assets/images/fairy.png";
import { ArrowRight } from "../svgs";
import { Countdown } from "../elements";
import { useTranslations } from "next-intl";

import gsap from "gsap";
import Link from "next/link";

export default function Banner() {
    const title = useRef(null);
    const desc = useRef(null);
    const input = useRef(null);
    const t = useTranslations("Header");

    useEffect(() => {
        const animation = gsap
            .timeline({ paused: false })
            .fromTo(
                title.current,
                {
                    y: 75,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.inOut",
                }
            )
            .fromTo(
                input.current,
                {
                    xPercent: 10,
                    opacity: 0,
                },
                {
                    xPercent: 0,
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
                    opacity: 1,
                    duration: 0.3,
                    ease: "power4.inOut",
                }
            );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div className="relative h-screen min-h-[695px] w-screen xl:mb-8 mb-[228px]">
            <div className="bg-linear-to-b from-blue to-transparent absolute h-full w-full bottom-0 left-0 opacity-50 to-50%"></div>
            <div className="absolute w-full h-full bottom-0 left-0 flex justify-center items-end z-30 pb-5">
                <div className="bg-radial-[at_50%_50%] from-[#210544] via-[#170544]/30 via-40% rounded-[50%] backdrop-blur-[3px] bg-blend-normal to-transparent h-1/2 w-4/7"></div>
            </div>
            <Link href="/">
                <Image
                    className="h-full w-full object-cover"
                    src={Background}
                    alt="Etech Logo"
                />
            </Link>
            <Image
                className="h-fit w-full object-contain absolute -bottom-1 left-0"
                src={BackgroundCutShape}
                alt="Etech Shape"
            />
            <Image
                className="w-fit md:h-2/3 h-[258px] object-contain absolute xl:bottom-0 md:-bottom-1/3 -bottom-[200px] md:left-0 md:translate-0 left-1/2 -translate-x-1/2"
                src={Fairy}
                alt="Etech Fairy"
            />
            <div className="flex justify-center items-center absolute w-full h-full gap-10 top-0 left-0 z-40 flex-col pt-24">
                <div className="flex justify-center items-center gap-5 flex-col md:p-0 px-4">
                    <div className="h-fit overflow-hidden">
                        <h1
                            ref={title}
                            className="opacity-0 md:text-[80px] text-[40px] font-primary font-black text-white text-center"
                        >
                            {t("title")}
                        </h1>
                    </div>
                    <Countdown />
                </div>
                <div className="flex justify-center items-center gap-8 flex-col">
                    <p
                        ref={desc}
                        className="opacity-0 md:text-lg text-xs text-center md:w-[45ch] w-full text-white"
                    >
                        {t("desc")}
                    </p>
                    <div className="relative w-full md:p-0 px-4">
                        <input
                            ref={input}
                            type="text"
                            placeholder={t("input")}
                            className="opacity-0 w-full text-sm pl-3.5 py-[18px] border-1 bg-white text-gray rounded-[8px] border-none"
                        />
                        <ArrowRight className="text-2xl absolute top-1/2 -translate-y-1/2 md:right-3.5 right-7 [&>path]:fill-gray" />
                    </div>
                </div>
            </div>
        </div>
    );
}
