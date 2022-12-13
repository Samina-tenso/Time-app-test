import { clsx } from 'clsx';

export default function ResuableButton({ children, onClick, type }) {

    return (
        <button type={type} onClick={onClick} className={clsx("bg-slate-900 p-6 hover:bg-slate-600 active:text-slate-900", props.className)}> {children}</button >
    )
}