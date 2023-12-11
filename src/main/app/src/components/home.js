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
            <h1>Welcome to Gastromé</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, excepturi fuga illum inventore laudantium libero maiores maxime minima minus nostrum officia pariatur porro possimus quisquam recusandae rerum saepe vel voluptate.</p>
        </div>
    )
}
function Background({resultRef}) {
    return (
        <div className='HomeScreenBackgroundOverlay'>
                <BackgroundText />
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate, distinctio doloribus eius et eveniet illo labore minima molestias, necessitatibus nesciunt nisi odit pariatur porro quaerat quas repudiandae soluta voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto corporis delectus, dolore, doloremque eius fugiat harum ipsam iste iure mollitia obcaecati optio pariatur quasi repudiandae sapiente tempore veniam voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore doloremque ducimus fuga incidunt iure, laboriosam odio optio pariatur, placeat, possimus quaerat quas repellendus similique voluptate. Eligendi laboriosam nemo ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta dolorum ducimus eum facere iste iure nam natus nihil officia porro quae, qui quod similique sit sunt ullam voluptate voluptates!</p>
                </div>
                <div className='InformationSectionImage'>
                    <img src={fineDining} alt='Fine dining' />
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

