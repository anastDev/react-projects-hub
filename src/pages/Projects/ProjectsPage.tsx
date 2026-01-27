import Footer from "@/components/layout/Footer.tsx";
import Header from "@/components/layout/Header/Header.tsx";
import ProjectMainContent from "@/pages/Projects/components/ProjectMainContent.tsx";

const ProjectsPage = () => {
    return (
        <>
           <div className="relative bg-gray-900 min-h-screen flex flex-col">
               <Header/>
               <div className="h-14"></div>
               <ProjectMainContent/>
               <div className="h-28"></div>
               <Footer/>
           </div>
        </>
    )
}

export default ProjectsPage;