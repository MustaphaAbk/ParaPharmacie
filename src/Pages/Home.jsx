import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/main";

import '../Styles/Home.css'

export default function Home() {
    return(<div>
        <Header/>
        <Main/>
        <AboutUs/>
        <Footer/>
    </div>)
}