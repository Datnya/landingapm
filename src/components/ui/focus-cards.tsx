"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: any;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-3xl relative bg-neutral-100 dark:bg-neutral-900 overflow-hidden h-[450px] md:h-[550px] w-full transition-all duration-500 ease-out cursor-pointer border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
                hovered !== null && hovered !== index && "blur-[6px] scale-[0.96] opacity-60"
            )}
        >
            <img
                src={card.src}
                alt={card.title}
                className="object-cover absolute inset-0 w-full h-full transition-transform duration-700"
                style={{ transform: hovered === index ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 transition-all duration-500",
                    hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
            >
                <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                        <div className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight">
                            {card.title}
                        </div>
                        <div className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
                            {card.role}
                        </div>
                    </div>
                    {card.linkedin && (
                        <a
                            href={card.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-primary p-3 rounded-full backdrop-blur-md border border-white/20 transition-all group"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Linkedin className="w-5 h-5 text-white group-hover:text-secondary" />
                        </a>
                    )}
                </div>

                <div className="text-white/80 text-sm md:text-base leading-relaxed font-medium line-clamp-6">
                    {card.description}
                </div>
            </div>

            {/* Default overlay for better text contrast if not hovered */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-300",
                hovered === index ? "opacity-0" : "opacity-100"
            )}>
                <div className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-2">
                    {card.title}
                </div>
                <div className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                    {card.role}
                </div>
            </div>
        </div>
    )
);

Card.displayName = "Card";

type CardData = {
    title: string;
    role: string;
    src: string;
    description: string;
    linkedin: string;
};

export function FocusCards({ cards }: { cards: CardData[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto px-6 w-full pb-20">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
