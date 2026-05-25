export const Divider = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] tracking-widest uppercase text-gray-500">{label}</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
);