import { clsx } from 'clsx';
import React from 'react';

type CardProps = {
    title?: string | null;
    children: React.ReactNode;
    padding?: string;
    borderColor?: string;
};

export default function Card({ title = null, children, padding = 'p-[1px]', borderColor = 'bg-yellow-300' }: CardProps) {
    return (
        <div className={clsx(` [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]`, padding, borderColor)}>
            {title && (
                <div className={clsx("text-start bg-black text-black [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)] mb-[1px]")}>
                    <h2 className="p-2 uppercase text-xl text-yellow-300 font-extrabold">{title}</h2>
                </div>
            )}

            <div className={clsx('bg-black p-3', { '[clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]': !title })}>
                {children}
            </div>
        </div>
    );
}
