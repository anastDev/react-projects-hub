import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import AboutMainContent from "@/pages/About/AboutMainContent.tsx";

const HomePage2 = () => {
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

export default HomePage2;