import CommitMessageCard from "@/projects/dev-tools/components/CommitMessageCard.tsx";
import ExplainCodeCard from "@/projects/dev-tools/components/ExplainCodeCard.tsx";
import DevToolsHeader from "@/projects/dev-tools/layout/DevToolsHeader.tsx";
import DevToolsFooter from "@/projects/dev-tools/layout/DevToolsFooter.tsx";
import {ChevronLeft} from "lucide-react";
import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button.tsx";

const DevToolsLandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
               <div className="container mx-auto">
                   <nav>
                       <div className="pt-6">
                           <Button
                               variant="ghost"
                               onClick={() => navigate("/projects")}
                               className="flex items-center gap-1.5 text-xs text-slate-100 tracking-widest uppercase  transition-colors no-underline"
                           >
                               <ChevronLeft />
                               Projects
                           </Button>
                       </div>
                   </nav>
                   <div className="max-auto w-full max-w-3xl lg:max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-16">
                       <DevToolsHeader/>
                       <div className="mt-12 flex flex-col gap-8 sm:mt-16 lg:flex-row">
                           <CommitMessageCard />
                           <ExplainCodeCard />
                       </div>
                       <DevToolsFooter/>
                   </div>
               </div>
            </main>
        </>
    );
}

export default DevToolsLandingPage;