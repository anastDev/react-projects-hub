import Header from "@/components/layout/Header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import {HomeMainContent} from "@/pages/Home/components/HomeMainContent.tsx";

const Home = () => {

    return (
        <>
            <div className="h-screen relative">
                <Header/>
                <div className="h-14"></div>
                <HomeMainContent/>
                <div className="h-18"></div>
                <Footer/>
            </div>
        </>
    )
}

export default Home;