import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/Swiper";
import { SwiperApp2 } from "../../../components/Hani/Swiper2";
import { Footer } from '../../../components/Manar/Footer';


export const HomeIn = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp />
            <SwiperApp2 />
            <Footer />
        </>
    )
}