import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import { BurgerBTN, CloseBTN } from "../svgs";
import MultiLangSwitcher from "./MultiLangSwitcher";
import { useTranslations } from "use-intl";
import Link from "next/link";

Modal.setAppElement("body");

export default function MobileMenu() {
    const container = useRef(null);
    const t = useTranslations("NavbarLinks");
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = modalIsOpen ? "hidden" : "unset";
    }, [modalIsOpen]);

    return (
        <div>
            <BurgerBTN className="text-[33px]" onClick={openModal} />
            <Modal
                ref={container}
                className=""
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        zIndex: 99999,
                    },
                    content: {
                        width: "100vw",
                        height: "100vh",
                        top: 0,
                        left: 0,
                        padding: 0,
                    },
                }}
            >
                <div className="p-4">
                    <div className="flex justify-between">
                        <MultiLangSwitcher />
                        <CloseBTN className="text-3xl" onClick={closeModal} />
                    </div>
                    <ul className="w-full flex justify-center items-center flex-col [&>li:not(:first-child)]:border-t-[1px] [&>li:not(:first-child)]:border-[#EEEEEE]">
                        <li className="menu-item-holder text-sm py-6 font-bold w-full text-center">
                            <Link
                                href="#about-section"
                                onClick={closeModal}
                                scroll={true}
                            >
                                {t("about")}
                            </Link>
                        </li>
                        <li className="menu-item-holder text-sm py-6 font-bold w-full text-center">
                            <Link
                                href="#our-games-section"
                                onClick={closeModal}
                                scroll={true}
                            >
                                {t("game")}
                            </Link>
                        </li>
                        <li className="menu-item-holder text-sm py-6 font-bold w-full text-center">
                            <Link
                                href="#our-partners-section"
                                onClick={closeModal}
                                scroll={true}
                            >
                                {t("partner")}
                            </Link>
                        </li>
                        <li className="menu-item-holder text-sm py-6 font-bold w-full text-center">
                            {t("contact")}
                        </li>
                    </ul>
                </div>
            </Modal>
        </div>
    );
}
