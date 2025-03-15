import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {
    BookPro,
    Disney,
    EAGame,
    FirstPower,
    Game,
    Partner2K,
    Sega,
} from "@/public/assets/images/partners";
import { ArrowQuareLeft, ArrowQuareRight } from "../svgs";
import { useTranslations } from "next-intl";

export default function OurParners() {
    const title = useRef(null);
    const t = useTranslations("PartnerSection");
    const swiperRef = useRef<SwiperType>(null);

    useEffect(() => {
        const animation = gsap.timeline({ paused: true }).fromTo(
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
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
            }
        );
        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section id="our-partners-section" className="py-32 mt-32">
            <h2
                ref={title}
                className="md:text-6xl text-[40px] font-primary font-black mb-20 text-center"
            >
                {t("title")}
            </h2>
            <div className="relative md:w-[85%] w-screen m-auto">
                <div className="md:w-full w-[120vw] md:m-0 -ml-10">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={12}
                        breakpoints={{
                            768: { slidesPerView: 5, spaceBetween: 0 },
                        }}
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{
                            delay: 6000,
                        }}
                        loop
                    >
                        <SwiperSlide className="h-[100px]">
                            <Image
                                className="h-full object-contain"
                                src={EAGame}
                                alt="Etech Partner"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="h-[100px]">
                            <Image
                                className="h-full object-contain"
                                src={Game}
                                alt="Etech Partner"
                            />
                        </SwiperSlide>{" "}
                        <SwiperSlide className="h-[100px]">
                            <Image
                                className="h-full object-contain"
                                src={FirstPower}
                                alt="Etech Partner"
                            />
                        </SwiperSlide>{" "}
                        <SwiperSlide className="h-[100px]">
                            <Image
                                className="h-full object-contain"
                                src={Disney}
                                alt="Etech Partner"
                            />
                        </SwiperSlide>{" "}
                        <SwiperSlide className="h-[100px]">
                            <Image
                                className="h-full object-contain"
                                src={BookPro}
                                alt="Etech Partner"
                            />
                        </SwiperSlide>{" "}
                        <SwiperSlide className="h-[100px]">
                            <Image
                                className="h-full object-contain"
                                src={Sega}
                                alt="Etech Partner"
                            />
                        </SwiperSlide>{" "}
                        <SwiperSlide className="h-[100px]">
                            <Image
                                className="h-full object-contain"
                                src={Partner2K}
                                alt="Etech Partner"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <ArrowQuareLeft
                    className="shadow shadow-black/25 bg-black/25 rounded-xl text-[32px] cursor-pointer absolute md:-left-[37px] left-5 top-1/2 -translate-y-1/2 z-30"
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <ArrowQuareRight
                    className="shadow shadow-black/25 bg-black/25 rounded-xl text-[32px] cursor-pointer absolute md:-right-[37px] right-5 top-1/2 -translate-y-1/2 z-30"
                    onClick={() => swiperRef.current?.slideNext()}
                />
            </div>
        </section>
    );
}
