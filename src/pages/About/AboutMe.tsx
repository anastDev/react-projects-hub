import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import AboutMainContent from "@/pages/About/components/AboutMainContent.tsx";

const AboutMePage = () => {
    return (
        <>
           <div className="relative h-screen">
               <Header />
               <AboutMainContent />
               <Footer />
           </div>
        </>
    )
}

export default AboutMePage;