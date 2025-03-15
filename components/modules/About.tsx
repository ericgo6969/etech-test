import React, { useEffect, useRef } from "react";
import { Calendar, PenTool, Team } from "../svgs";
import Image from "next/image";

import Witch from "@/public/assets/images/witch.png";
import Globe from "@/public/assets/images/globe.png";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function About() {
    const title = useRef(null);
    const desc = useRef(null);
    const witch = useRef(null);
    const globeWrap = useRef(null);
    const globe = useRef(null);
    const t = useTranslations("AboutSection");

    function mouseMoveAnimation(
        container: HTMLDivElement | null,
        target: HTMLDivElement | null
    ) {
        if (container)
            container.addEventListener("mousemove", function (e) {
                const speed = 0.3,
                    x = e.screenX / (40 / speed),
                    y = e.screenY / (40 / speed);

                gsap.to(target, {
                    x: -x,
                    y: -y,
                });
            });
    }

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
                    duration: 1,
                    stagger: 0.1,
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
            )
            .fromTo(
                witch.current,
                {
                    x: 300,
                    y: -200,
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: witch.current,
                        start: "-=100px bottom",
                        end: "bottom center",
                        scrub: true,
                        markers: false,
                    },
                    motionPath: {
                        path: [
                            { x: 300, y: -200 },
                            { x: 200, y: -100 },
                            { x: -50, y: 0 },
                            { x: -200, y: -100 },
                            { x: -100, y: -70 },
                            { x: 0, y: 0 },
                        ],
                    },
                    opacity: 1,
                    duration: 5,
                    ease: "power1.inOut",
                }
            );

        const repateAnimation = gsap.timeline({ repeat: -1 }).fromTo(
            witch.current,
            {
                y: 0,
            },
            {
                y: 30,
                repeat: -1,
                duration: 3,
                ease: "power0.easeNone",
                yoyo: true,
            }
        );

        mouseMoveAnimation(globeWrap.current, globe.current);
        return () => {
            animation.kill();
            repateAnimation.kill();
        };
    }, []);

    return (
        <section
            id="about-section"
            className="flex justify-center items-center flex-col"
        >
            <svg id="motionPath" className="hidden" viewBox="-20 0 557 190">
                <path id="path" fill="black" d="M 500 100 Q 500 350 300 200" />
            </svg>
            <div className="md:w-[80%] w-full flex justify-between xl:flex-row flex-col xl:gap-0 gap-10">
                <div className="xl:w-1/2 w-full flex flex-col gap-20">
                    <div className="flex gap-10 flex-col md:p-0 px-4">
                        <h2
                            ref={title}
                            className="md:text-6xl text-[40px] font-black font-primary"
                        >
                            {t("title")}
                        </h2>
                        <p
                            ref={desc}
                            className="text-sm text-lightgray md:pr-4 w-full"
                        >
                            {t("desc")}
                        </p>
                    </div>
                    <div className="flex gap-10 xl:flex-col flex-row md:p-0 px-4">
                        <div>
                            <p className="md:text-[80px] text-[44px] font-bold text-pastelblue">
                                600<span className="text-[40px]">M</span>+
                            </p>
                            <p className="text-2xl font-bold">
                                {t("subDesc.user")}
                            </p>
                        </div>
                        <div>
                            <p className="md:text-[80px] text-[44px] font-bold text-pastelblue">
                                135+
                            </p>
                            <p className="text-2xl font-bold">
                                {t("subDesc.game")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:w-1/2 w-full items-stretch bg-[#EEEEEE] flex flex-col justify-center gap-10 md:px-16 px-4 xl:py-0 py-16">
                    <div className="flex gap-6 items-start">
                        <div className="p-3.5 bg-lightblue rounded-[50%]">
                            <Calendar className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-1">
                                {t("benefits.time.title")}
                            </p>
                            <p className="text-sm text-lightgray">
                                {t("benefits.time.desc")}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="p-3.5 bg-lightblue rounded-[50%]">
                            <PenTool className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-1">
                                {t("benefits.design.title")}
                            </p>
                            <p className="text-sm text-lightgray">
                                {t("benefits.design.desc")}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="p-3.5 bg-lightblue rounded-[50%]">
                            <Team className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-1">
                                {t("benefits.team.title")}
                            </p>
                            <p className="text-sm text-lightgray">
                                {t("benefits.team.desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={globeWrap} className="mt-16 flex flex-col items-center">
                <Image
                    className="h-[533px] w-fit object-contain z-10"
                    ref={witch}
                    src={Witch}
                    alt="Etech about witch"
                />
                <Image
                    ref={globe}
                    className="w-full h-fit -mt-28 object-contain"
                    src={Globe}
                    alt="Etech about globe"
                />
            </div>
        </section>
    );
}
