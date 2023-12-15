import './styling/home.css'
import startBusiness from "../assets/homepage/startBusiness.jpg";
import businessRelations from "../assets/homepage/businessRelations.jpg";
import trainStaff from "../assets/homepage/trainStaff.jpg";
import fineDining from "../assets/homepage/fine_dining.jpg";
import {forwardRef, useRef} from 'react';
import { SlArrowDown } from "react-icons/sl";
import Overview from "./ClientView/overview";

function BackgroundText() {
    return (
        <div className='HomeScreenBackgroundContainer'>
            <h1>Masterclass</h1>
            <h2 style={{marginTop: '-30px'}}>by Gastromé</h2>
            <p>Dive into the world of gastronomy with our expert-led masterclass.
                Designed for new restaurant owners, this course offers insights from the seasoned team at [Michelin Star Restaurant Name].
                Learn everything from exquisite menu creation to efficient business management, all crafted to elevate your restaurant to new heights.
                Join us for an inspiring journey into culinary and operational mastery</p>
        </div>
    )
}

function Background({resultRef}) {
    return (
        <div className='HomeScreenBackgroundOverlay'>
            <BackgroundText/>
            <div className='HomeScreenBackground'>
            </div>
            <ScrollArrow resultRef={resultRef}/>
        </div>

    )
}

function ScrollArrow({resultRef}) {
    const executeScroll = (e) => {
        e.preventDefault();
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className='scrollDownArrow'>
            <span onClick={executeScroll}><SlArrowDown className='scrollDownArrowIcon' /></span>
        </div>
    )
}


function InformationSection() {
    return (
        <div className='InformationSection'>
            <div className='InformationContainer'>
                <div className='InformationSectionText'>
                    <h2>Learn from a established restaurant</h2>
                    <p>This masterclass isn't just about learning; it's about transforming your vision into reality.
                        Whether you're dreaming of opening a cozy bistro or a high-end gastronomic destination, our
                        curated content, interactive sessions,
                        and personalized feedback will equip you with the tools you need to succeed.</p>
                    <h2>What you will learn</h2>
                    <p>Our masterclass bridges the gap between aspiration and reality, offering a blend of traditional
                        expertise and modern innovation. With exclusive insights from Gastromé's celebrated chefs and
                        industry experts, you'll learn not just the hows but also the whys of restaurant management.
                        Embrace the journey of culinary excellence with us and turn your passion into a thriving
                        gastronomic venture.</p>
                </div>
                <div className='InformationSectionImage'>
                    <img src={fineDining} alt='Fine dining' style={{ maxWidth: '100%', maxHeight: '480px'}}/>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    const resultRef = useRef(null);
    return (
        <div className='HomeStyling'>
            <Background resultRef={resultRef}/>
            <Overview />
            <InformationSection />
            <div className='EmptyDiv'></div>
        </div>
    )

}

