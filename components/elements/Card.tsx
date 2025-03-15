import { GameCard } from "@/types/games";
import Image from "next/image";
import React from "react";

export default function Card({ title, description, img }: GameCard) {
    return (
        <div className="md:h-[410px] h-[268px] w-full relative overflow-hidden rounded-[20px] shadow shadow-black/25">
            <Image
                className="h-full w-full object-cover"
                src={img}
                alt="Etech espace game"
            />
            <div className="absolute w-full left-0 bottom-0 md:pb-10 pb-3 md:px-8 px-2 text-white bg-linear-to-t from-blue/50 to-transparent from-20%">
                <p className="md:text-5xl text-2xl font-bold mb-4">{title}</p>
                <p className="md:text-sm text-xs">{description}</p>
            </div>
        </div>
    );
}
