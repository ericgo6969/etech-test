import React, { startTransition, useState } from "react";
import { ArrowDownFill, Check } from "../svgs";
import Image from "next/image";

import USFLag from "@/public/assets/images/united-states.png";
import VNFLag from "@/public/assets/images/vietnam.png";
import { setUserLocale } from "@/services/locale";
import { useLocale } from "next-intl";

export default function MultiLangSwitcher() {
    const [open, setOpen] = useState(false);
    const locale = useLocale();
    const localeFlag = locale === "en" ? USFLag : VNFLag;

    const handleOpen = () => {
        setOpen(!open);
    };

    const changeLocale = (value: "en" | "vn") => {
        const locale = value;
        startTransition(() => {
            setUserLocale(locale);
        });
    };

    return (
        <div
            className="flex gap-1 relative cursor-pointer lg:bg-transparent bg-[#F6F6F6] lg:p-0 py-1.5 px-4 rounded-lg"
            onClick={handleOpen}
        >
            <div className="flex justify-center items-center h-10 w-10">
                <Image className="h-8 object-contain" src={localeFlag} alt="" />
            </div>
            <div className="flex justify-center items-center h-10 w-6 ">
                <ArrowDownFill className="text-[10px] lg:[&>path]:fill-white [&>path]:fill-black" />
            </div>
            {open && (
                <div
                    className="absolute lg:right-0 lg:left-auto right-auto left-0 top-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className="py-1" role="none">
                        <div
                            className="flex items-center px-4 py-2 gap-2.5 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => changeLocale("vn")}
                        >
                            {locale === "vn" ? (
                                <Check className="text-base" />
                            ) : (
                                <div className="w-4"></div>
                            )}
                            <div className="flex items-center gap-2">
                                <Image
                                    className="h-8 object-contain"
                                    src={VNFLag}
                                    alt=""
                                />
                                <p className="text-[10px] font-bold">
                                    Vietnamese
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center px-4 py-2 gap-2.5 text-sm text-gray-700 relative after:content-[''] after:absolute after:w-[80%] after:h-[1px] after:bg-[#C4C4C4] after:top-0 after:left-1/2 after:-translate-x-1/2"
                            role="menuitem"
                            tabIndex={-1}
                            onClick={() => changeLocale("en")}
                        >
                            {locale === "en" ? (
                                <Check className="text-base" />
                            ) : (
                                <div className="w-4"></div>
                            )}
                            <div className="flex items-center gap-2">
                                <Image
                                    className="h-8 object-contain"
                                    src={USFLag}
                                    alt=""
                                />
                                <p className="text-[10px] font-bold">English</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
