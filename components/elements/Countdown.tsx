import { useCountdown } from "@/hooks/useCountdown";
import { useTranslations } from "next-intl";
import React from "react";

export default function Countdown() {
    const t = useTranslations("Header");
    const [days, hours, minutes, seconds] = useCountdown(1744497657759);

    return (
        <div className="w-full flex md:justify-center justify-around items-center md:gap-[52px] bg-white rounded-[21px] py-6 md:px-0 px-6 md:leading-0 leading-3 shadow shadow-black/25">
            <div>
                <p className="font-primary md:text-6xl text-4xl font-black md:leading-20 leading-10">
                    {days}
                </p>
                <p className="md:text-base text-xs font-bold text-center">
                    {t("days")}
                </p>
            </div>
            <p className="md:text-[65px] text-[40px]">:</p>
            <div>
                <p className="font-primary md:text-6xl text-4xl font-black  md:leading-20 leading-10">
                    {hours}
                </p>
                <p className="md:text-base text-xs font-bold text-center">
                    {t("hours")}
                </p>
            </div>
            <p className="md:text-[65px] text-[40px]">:</p>
            <div>
                <p className="font-primary md:text-6xl text-4xl font-black  md:leading-20 leading-10">
                    {minutes}
                </p>
                <p className="md:text-base text-xs font-bold text-center">
                    {t("minutes")}
                </p>
            </div>
            <p className="md:text-[65px] text-[40px]">:</p>
            <div>
                <p className="font-primary md:text-6xl text-4xl font-black  md:leading-20 leading-10">
                    {seconds}
                </p>
                <p className="md:text-base text-xs font-bold text-center">
                    {t("second")}
                </p>
            </div>
        </div>
    );
}
