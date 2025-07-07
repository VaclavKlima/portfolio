import { clsx } from 'clsx';
import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    padding?: string;
    borderColor?: string;
};
export default function Button({ children, padding = 'p-[1px]', borderColor = 'bg-yellow-300' }: ButtonProps) {
    return (
        <button className={clsx(`min-w-[10rem] [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)] cursor-pointer`, padding, borderColor)}>
            <div className={clsx('bg-black hover-background hover:text-yellow-300 p-3 [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]',)}>
                {children}
            </div>
        </button>
    );
}
