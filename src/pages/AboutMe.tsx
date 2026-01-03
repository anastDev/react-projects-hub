import Header from "@/pages/layout/Header.tsx";
import Footer from "@/pages/layout/Footer.tsx";
import AboutMainContent from "@/pages/layout/AboutMainContent.tsx";

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