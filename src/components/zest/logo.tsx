import { cn } from "@/lib/utils";
import React, { useEffect, useState } from 'react';

function Leaf({ className, }: { className?: string }) {
    return (
        <svg className={
            cn(
                "w-[20%] lg:w-[13%] fill-[#f7efe5] stroke-black stroke-[0.4px] absolute origin-bottom transition duration-1000 transform ease-in-out delay-500",
                className,
            )
        }
            viewBox="0 0 6.35 6.35">
            <path d="M-120.946-110.542c1.787 1.498 1.668 3.887.12 5.292-2.626-1.878-.785-4.317-.12-5.292z" transform="translate(124.09 111.07)" />
        </svg>
    );
}

export function Logo({ className }: { className?: string }) {

    const [shouldAnimate, setShouldAnimate] = useState(false);


    useEffect(() => {
        // Trigger the animation shortly after the component mounts
        const timer = setTimeout(() => {
            setShouldAnimate(true);
        }, 50); // Add a slight delay to ensure DOM is ready

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);

    return (
        <div className={
            cn(
                "group w-full flex items-center justify-center",
                className,
            )}>
            <Leaf />
            <Leaf className={shouldAnimate ? "rotate-[25deg] z-[15]" : "rotate-0"} />
            <Leaf className={shouldAnimate ? "rotate-[-25deg] z-[15]" : "rotate-0"} />
            <Leaf className={shouldAnimate ? "rotate-[50deg] z-[30]" : "rotate-0"} />
            <Leaf className={shouldAnimate ? "rotate-[-50deg] z-[30]" : "rotate-0"} />
            <Leaf className={shouldAnimate ? "rotate-[70deg] z-[1]" : "rotate-0"} />
            <Leaf className={shouldAnimate ? "rotate-[-70deg] z-[1]" : "rotate-0"} />
        </div>
    );
}