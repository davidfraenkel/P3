import './home.css'
import startBusiness from "../assets/homepage/startBusiness.jpg";
import businessRelations from "../assets/homepage/businessRelations.jpg";
import trainStaff from "../assets/homepage/trainStaff.jpg";

function BackgroundText() {
    return (
        <div className='HomeScreenBackgroundContainer'>
            <h1>Welcome to Gastromé</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, excepturi fuga illum inventore laudantium libero maiores maxime minima minus nostrum officia pariatur porro possimus quisquam recusandae rerum saepe vel voluptate.</p>
        </div>
    )
}
function Background() {
    return (
        <div className='HomeScreenBackgroundOverlay'>
                <BackgroundText />
            <div className='HomeScreenBackground'>
            </div>
        </div>

    )
}

function LearnHowTo() {
    return (
        <div className='LearnHowToContainer'>
            <h1>Learn how to...</h1>
            <div className='HomepageCardContainer'>
                { homepageCars.map(item => <HomepageCard key={item.id} name={item.name} image={item.image} />)}
            </div>
        </div>
    )
}

function HomepageCard(card) {
    return (
        <div className='HomepageCard'>
            <div className='HomepageCardImage'>
                <img src={card.image} alt='Start a business'/>
            </div>
            <div className='HomepageCardHeadline'>
                {card.name}
            </div>
        </div>
    )
}
export default function Home() {
    return (
        <div className='HomeStyling'>
            <Background />
            <LearnHowTo />
        </div>
    )
}

const homepageCars = [
    {'id': 1,'name': 'Start a business', 'image': startBusiness},
    {'id': 2,'name': 'Train new Staff', 'image': trainStaff},
    {'id': 3,'name': 'Make business relations', 'image': businessRelations},
]

