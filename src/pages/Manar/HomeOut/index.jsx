import { Section } from "../../../components/Manar/Section";
import { SectionReverse } from "../../../components/Manar/SectionReverse";
import './style.css'
import {Header} from "../../../components/Manar/Header";
import {Footer} from "../../../components/Manar/FooterBlack";

export const HomeOut = () => {
    return (
        <>
            <Header/>
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <Section />
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <SectionReverse />
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <Section/>
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <SectionReverse />
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <Footer />
            
        </>
    )
}