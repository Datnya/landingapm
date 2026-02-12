"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Shadcn UI Carousel Imports
import useEmblaCarousel, {
    type EmblaCarouselType,
    type EmblaOptionsType,
} from "embla-carousel-react";
import { Button, type ButtonProps } from "@/components/ui/button";

// --- Carousel Context ---
type CarouselApi = EmblaCarouselType | undefined;
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}

// --- Main Carousel Component ---
export const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins,
        );
        const [canScrollPrev, setCanScrollPrev] = React.useState(false);
        const [canScrollNext, setCanScrollNext] = React.useState(false);

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) return;
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }, []);

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = React.useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    scrollPrev();
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    scrollNext();
                }
            },
            [scrollPrev, scrollNext],
        );

        React.useEffect(() => {
            if (!api || !setApi) return;
            setApi(api);
        }, [api, setApi]);

        React.useEffect(() => {
            if (!api) return;
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return () => {
                api?.off("select", onSelect);
            };
        }, [api, onSelect]);

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation,
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    },
);
Carousel.displayName = "Carousel";

// --- Carousel Content ---
export const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className,
                )}
                {...props}
            />
        </div>
    );
});
CarouselContent.displayName = "CarouselContent";

// --- Carousel Item ---
export const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className,
            )}
            {...props}
        />
    );
});
CarouselItem.displayName = "CarouselItem";

// --- Carousel Controls ---
export const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
        <Button
            ref={ref}
            variant={variant as any}
            size={size as any}
            className={cn(
                "absolute h-10 w-10 rounded-full",
                "right-2 top-1/2 -translate-y-1/2",
                className,
            )}
            onClick={scrollNext}
            disabled={!canScrollNext}
            {...props}
        >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
        </Button>
    );
});
CarouselNext.displayName = "CarouselNext";

export const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return (
        <Button
            ref={ref}
            variant={variant as any}
            size={size as any}
            className={cn(
                "absolute h-10 w-10 rounded-full",
                "left-2 top-1/2 -translate-y-1/2",
                className,
            )}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            {...props}
        >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
});
CarouselPrevious.displayName = "CarouselPrevious";

// --- Service Card & Carousel Section ---
export interface Service {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    image: string;
}

// Sub-component for individual cards
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
            },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            className={cn(
                "relative flex h-[500px] w-full flex-col justify-between overflow-hidden rounded-[40px] p-10 group cursor-pointer",
                "bg-secondary/5 border border-white/10"
            )}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500",
                    "group-hover:opacity-100",
                    service.gradient
                )}></div>
            </div>

            {/* Card Content */}
            <div className="z-10 flex flex-col items-start text-left">
                <span className="mb-8 text-xs font-black font-mono text-white/40 tracking-[0.2em]">
                    {service.number}
                </span>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 mb-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                </div>
            </div>

            <div className="z-10 mt-auto">
                <h3 className="mb-3 text-2xl font-black uppercase tracking-wider text-white">
                    {service.title}
                </h3>
                <p className="text-white/70 text-sm font-medium leading-relaxed mb-6 group-hover:text-white transition-colors">
                    {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explorar más <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </motion.div>
    );
};

// Main exportable component
export const ServiceCarousel = ({ services }: { services: Service[] }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div className="w-full max-w-7xl mx-auto px-6">
            <Carousel
                ref={ref}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="relative group/carousel"
            >
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <CarouselContent className="-ml-6">
                        {services.map((service, index) => (
                            <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                <div className="h-full">
                                    <ServiceCard service={service} index={index} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </motion.div>

                <div className="flex justify-center gap-4 mt-12 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                    <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-white/5 border-white/10 hover:bg-primary hover:text-secondary text-white" />
                    <CarouselNext className="static translate-y-0 h-14 w-14 bg-white/5 border-white/10 hover:bg-primary hover:text-secondary text-white" />
                </div>
            </Carousel>
        </div>
    );
};
