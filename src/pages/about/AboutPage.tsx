import Header from "@/components/layout/header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import AboutMainContent from "@/pages/about/components/AboutMainContent.tsx";

const AboutPage = () => {
    return (
        <>
           <div className="relative h-screen bg-gray-900">
               <Header />
               <AboutMainContent />
               <Footer />
           </div>
        </>
    )
}

export default AboutPage;