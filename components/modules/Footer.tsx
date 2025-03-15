import React from "react";
import Image from "next/image";

import FooterBG from "@/public/assets/images/footer-bg.jpg";
import Logo from "@/public/assets/images/logo.png";
import {
    Facebook,
    Linkedin,
    Skype,
    Location,
    Mobile,
    ArrowRight,
} from "../svgs";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="w-screen text-white">
            <div className="relative">
                <Image
                    className="absolute h-full w-full top-0 left-0 object-cover"
                    src={FooterBG}
                    alt="Etech footer background"
                />
                <div className="absolute h-full w-full top-0 left-0 bg-linear-to-b from-purple to-pink opacity-70"></div>
                <div className="absolute h-full w-full top-0 left-0 bg-black/80 z-10"></div>
                <div className="absolute h-full w-full top-0 left-0 bg-linear-to-b from-blue to-transparent opacity-50 z-20"></div>
                <div className="relative h-full w-full top-0 left-0 z-30 flex justify-center items-center py-10 md:py-[100px]">
                    <div className="md:w-[85%] w-full md:px-0 px-4 flex justify-between md:items-start items-center flex-col xl:flex-row xl:gap-0 gap-[68px]">
                        <div className="flex flex-col gap-10">
                            <Image
                                className="h-24 object-contain w-fit"
                                src={Logo}
                                alt="Etech logo"
                            />
                            <div className="flex gap-6 w-fit">
                                <Skype className="text-[40px]" />
                                <Facebook className="text-[40px]" />
                                <Linkedin className="text-[40px]" />
                            </div>
                        </div>
                        <div className="flex gap-10 md:flex-row flex-col">
                            <div className="flex md:gap-10 gap-5 flex-col items-start max-w-[410px]">
                                <p className="text-2xl font-bold">
                                    {t("address.title")}
                                </p>
                                <div className="flex justify-center items-start gap-3">
                                    <Location className="text-[40px]" />
                                    <div className="flex flex-col gap-3 text-sm">
                                        <p>{t("address.detail")}</p>
                                        <p>{t("address.sub")}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <Mobile className="text-[40px]" />
                                    <div className="flex gap-2 text-sm">
                                        <p>(+1) 555-0108-000</p>
                                        <p>{t("phone")}</p>
                                        <p>(+236) 555-0108</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:gap-10 gap-5 flex-col items-start max-w-[410px]">
                                <p className="text-2xl font-bold">
                                    {t("suscribe.title")}
                                </p>
                                <div className="flex gap-3 flex-col">
                                    <p className="text-sm">
                                        {t("suscribe.detail")}
                                    </p>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder={t("suscribe.input")}
                                            className="w-full text-sm pl-3.5 py-[18px] border-1 border-white rounded-[8px]"
                                        />
                                        <ArrowRight className="text-2xl absolute top-1/2 -translate-y-1/2 right-3.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-lg flex justify-center items-center h-20 bg-black">
                2017 Copyright. Policy.
            </div>
        </footer>
    );
}
