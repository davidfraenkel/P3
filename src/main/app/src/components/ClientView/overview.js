import './styling/overview.css';
import React from "react";
import {Link} from "react-router-dom";
import { useEffect , useState} from "react";

function Topic(props) {
    const topicImage = require('../../assets/overview/' + props.name + '.' + props.imageType)
    return (
        <Link to={`/overview/sub-overview?parentId=${props.id}&name=${props.name}`}>
            <div className="TopicContainer" style={{backgroundImage: `url(${topicImage})`}}>
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
                    { topics.map(item => <Topic key={item._id} id={item._id} name={item.name} imageType={item.imagePath} />)}
                </div>
            </div>
        </div>
    )
}
