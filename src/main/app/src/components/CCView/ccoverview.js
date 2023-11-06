import '../ClientView/styling/overview.css';
import './styling/ccoverview.css';
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

export default function CcOverview() {
    return (
        <div>
            <h1>Hello user.name!</h1>
            <div>
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
                    <Link to='createUpdateTopic'>
                        <div className="CreateUpdateTopicContainer FormCreateUpdateTopicContainer">
                            <div className="CreateUpdateTopic">
                            </div>
                        </div>
                    </Link>
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