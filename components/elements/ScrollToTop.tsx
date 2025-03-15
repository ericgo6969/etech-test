import React, { useEffect, useState } from "react";
import { ArrowUp } from "../svgs";

export default function ScrollToTop() {
    const [scrollPosition, setSrollPosition] = useState<number>(0);
    const [down, setDown] = useState<boolean>(false);

    const toggleScroll = () => {
        if (down) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 800,
                left: 0,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const position = window.pageYOffset;
            setSrollPosition(position);

            if (scrollPosition < 50) {
                return setDown(false);
            } else if (scrollPosition > 50) {
                return setDown(true);
            }
        });
    }, [scrollPosition]);

    return (
        <div
            onClick={toggleScroll}
            className="z-40 w-10 h-10 flex justify-center items-center fixed bg-white right-20 bottom-3 rounded-[50%] shadow shadow-black/30"
        >
            <ArrowUp
                className={`${
                    down ? "rotate-180" : ""
                } text-base transition-all duration-300 cursor-pointer`}
            />
        </div>
    );
}
