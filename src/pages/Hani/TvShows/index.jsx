import { Navbar } from "../../../components/Hani/Navbar";
import { Landing } from "../../../components/Hani/Landing";
import { SwiperApp } from "../../../components/Hani/SwiperApp";
import { FooterInner } from '../../../components/Manar/FooterInner';


export const TvShows = () => {
    document.body.style.background = '#191b1b';

    return (
        <>
            <Navbar />
            <Landing />
            <SwiperApp />
            <FooterInner />
        </>
    )
}