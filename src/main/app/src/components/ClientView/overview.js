import './styling/overview.css';
import Header from '../../Header';
import React from "react";
import {Link} from "react-router-dom";


function Topic(props) {
    const topicImage = require('../../assets/overview/' + props.name + '.' + props.imageType)
    return (
        // Skal have linket til subtopic siden
        <Link to=''>
            <div className="TopicContainer" style={{backgroundImage: "url(" + topicImage + ")"}}>
                <div className="TopicTitle">
                    <p>{props.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default function Overview() {
    return (
        <div>
            <h1>Hello user.name!</h1>
            <div>
                <Header />
                <div className="overview-content">
                </div>
            </div>
            <div className="OverviewContainer">
                <div className="OverviewHeaderContainer">
                    <h2 className="OverviewHeader">Topics</h2>
                    <p className="">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="TopicsContainer">
                    { topics.map(item => <Topic key={item.id} name={item.name} imageType={item.imageType} />)}
                </div>
            </div>
        </div>
    )
}
/* Dummy Data vi skal have dette fra backend folket? */
const topics = [
    {'id': 1,'name': 'Economy', imageType: "jpg"},
    {'id': 2,'name': 'Business', imageType: "jpeg"},
]

