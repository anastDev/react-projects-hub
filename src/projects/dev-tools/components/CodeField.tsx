import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CodeFieldProps {
    id?: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
}

const CodeField = ({ id, label, placeholder, value, onChange }: CodeFieldProps) => {
    return (
        <div className="space-y-1.5">
            <Label
                htmlFor={id}
                className="text-xs font-medium uppercase tracking-wide text-slate-400"
            >
                {label}
            </Label>
            <Textarea
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={6}
                className="resize-y border-slate-700 bg-slate-950/60 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500"
            />
        </div>
    )
}

export default CodeField;