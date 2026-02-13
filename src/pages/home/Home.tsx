import Header from "@/components/layout/header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import {HomeMainContent} from "@/pages/home/components/HomeMainContent.tsx";

const Home = () => {

    return (
        <>
            <div className="h-screen relative bg-gray-900">
                <Header/>
                <HomeMainContent/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;