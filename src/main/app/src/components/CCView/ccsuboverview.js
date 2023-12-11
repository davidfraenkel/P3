import '../ClientView/styling/subOverview.css';
import './styling/ccsuboverview.css';
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";

function Subtopic(props) {
    let subtopicImage;
    try {
        subtopicImage = require('../../../public/images/' + props.imagePath);
    } catch (e) {
        subtopicImage = require('../../assets/fallback.png');
    }


    return (
        <Link to={`/ccoverview/ccsub-overview/ccsubtopic?subtopicId=${props.id}`}>
        <div className="SubTopicContainer">
            <div className="subTopicCoverImage">

                <img src={subtopicImage} alt="picture" />

            </div>
            <div>
                <div className="SubTopicDateTag">
                    <span className="SubTopicDato">{props.date.toDateString()}</span>{" "}
                    <span className="subTag">
                    <Link to={`/ccoverview/ccsub-overview/create-update-subtopic?subTopicId=${props.id}`}>
                      <FiEdit2 />
                    </Link>
          </span>
                </div>
                <h2 className="SubTopicName">{props.name}</h2>
                <p className="SubTopicSummary">
                    {props.summary}
                </p>
            </div>
        </div>
        </Link>
    );
};

export default function CcSubOverview() {
    const date = new Date;
    let isSubTopicsEmpty = false;
    const [subTopics, setSubTopis] = useState([]);
    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const parentId = searchParams.get('parentId');
    const topicName = searchParams.get('name');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/api/getAllSubTopics?parentTopicId=${parentId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Success:', data);
                setSubTopis(data);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure the effect runs once on mount
    if(subTopics < 1) {
        isSubTopicsEmpty = true;
    }

    return (
        <div>
            <div className="SubOverviewContainer">
                <div className="SubOverviewHeaderContainer">
                    <h2 className="SubOverviewHeader">{topicName}</h2>
                    <p className="">
                        Overview of all the subtopics
                    </p>
                </div>
                <div className="SubTopicsContainer">
                    { isSubTopicsEmpty
                        ? <p>This topic does not contain any sub topics</p>
                        : subTopics.map(item => <Subtopic key={item._id} id={item._id} name={item.name} date={date} imagePath={item.imagePath} content={item.content} summary={item.summary}/>)}
                    <Link to={`create-update-subtopic?parentTopicId=${parentId}`}>
                        <div className="CreateUpdateSubtopicContainer FormCreateUpdateSubtopicContainer">
                            <div className="CreateUpdateSubtopic">
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}