import Footer from "@/components/layout/Footer.tsx";
import Header from "@/components/layout/Header/Header.tsx";
import ProjectMainContent from "@/pages/Projects/components/ProjectMainContent.tsx";

const ProjectsPage = () => {
    return (
        <>
           <div className="relative h-screen">
               <Header/>
               <ProjectMainContent/>
               <Footer/>
           </div>
        </>
    )
}

export default ProjectsPage;