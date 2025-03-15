import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import Media from "react-media";
import { MobileMenu, MultiLangSwitcher } from "../elements";
import { useTranslations } from "next-intl";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Header() {
    const container = useRef(null);
    const t = useTranslations("NavbarLinks");

    useEffect(() => {
        const animation = gsap.fromTo(
            container.current,
            {
                y: -10,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.27,
                ease: "power4.inOut",
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <header
            ref={container}
            className="flex opacity-0 justify-between items-end absolute top-0 left-0 z-50 lg:px-20 px-4 py-5 w-screen text-white"
        >
            <Image
                src={Logo}
                alt="Etech logo"
                className="lg:h-16 h-10 object-contain w-fit md:block none"
            />
            <Media query="(min-width: 1024px)">
                {(matches) => {
                    if (!matches) return <MobileMenu />;
                    else
                        return (
                            <ul className="lg:flex hidden text-sm font-bold uppercase items-center justify-around w-1/2">
                                <li>
                                    <Link href="#about-section" scroll={true}>
                                        {t("about")}
                                    </Link>{" "}
                                </li>
                                <li>
                                    <Link
                                        href="#our-games-section"
                                        scroll={true}
                                    >
                                        {t("game")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#our-partners-section"
                                        scroll={true}
                                    >
                                        {t("partner")}
                                    </Link>
                                </li>
                                <li>{t("contact")}</li>
                                <li>
                                    <MultiLangSwitcher />
                                </li>
                            </ul>
                        );
                }}
            </Media>
        </header>
    );
}
