import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import AboutMainContent from "@/pages/About/components/AboutMainContent.tsx";

const AboutMePage = () => {
    return (
        <>
           <div className="relative h-screen">
               <Header />
               <div className="h-26"></div>
               <AboutMainContent />
               <div className="h-12"></div>
               <Footer />
           </div>
        </>
    )
}

export default AboutMePage;