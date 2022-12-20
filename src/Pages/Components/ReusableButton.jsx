import { clsx } from 'clsx';
import React from 'react';
export function ReusableButton({ children, onClick, type, className }) {

    return (
        <button data-testid="reusableButton" type={type} onClick={onClick} className={clsx("bg-slate-900 p-6 hover:bg-slate-600 active:text-slate-900", className)}> {children}</button >
    )
}