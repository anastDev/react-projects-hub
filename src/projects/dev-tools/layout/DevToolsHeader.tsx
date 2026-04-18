import {Code} from "lucide-react";

const DevToolsHeader = () => {
    return (
        <>
            <header className="text-center">
                <div className="inline-flex items-center gap-2">
                    <Code size={22} className="text-indigo-400"/>
                    <span className="text-lg font-semibold tracking-tight text-slate-100">
          dev<span className="text-indigo-400">tools</span>
        </span>
                </div>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Because 'fix stuff' isn't a <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">commit message.</span>
                </h1>

                <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
                    Two small tools for the messy middle of coding. For when you're not sure what you changed or what that block of code even does.
                </p>
            </header>
        </>
    )
}

export default DevToolsHeader;