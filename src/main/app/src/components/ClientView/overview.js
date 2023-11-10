import './styling/overview.css';
import React from "react";
import {Link} from "react-router-dom";
import { useEffect , useState} from "react";


function Topic(props) {
    // const topicImage = require('../../assets/overview/' + props.name + '.' + props.imageType)
    // style={{backgroundImage: "url(" + topicImage + ")"}} <- Den her skal ind i TOpicCOntainer når man kan upload et foto
    return (
        <Link to=''>
            <div className="TopicContainer" >
                <div className="TopicTitle">
                    <p>{props.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default function Overview() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/api/getAllTopics')
            .then(response => response.json())
            .then(data => {
                setTopics(data);
            })
    }, []);

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
                    {/* Den skal også have Imagetype med og et rigtigt id */}
                    { topics.map(item => <Topic key={item.name} name={item.name} />)}
                </div>
            </div>
        </div>
    )
}