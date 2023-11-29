import Carousel from "../components/Carousel";
import Courses from "../components/Courses";
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import OnlineClasses from "../components/OnlineClasses";
import Welcome from "../components/Welcome";
// import NewsSlider from "../components/Updates";
import './Main.css';

const Main = ()=>{
    return(
        <>
        <Header/>
        <NavBar/>
        <Carousel/>
        {/* <NewsSlider/> */}
        <Welcome/>
        <OnlineClasses/>
        <Courses/>
        </>
    )
}

export default Main;