import './styling/subOverview.css';
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import management from "../../assets/overview/subOverview/Management.jpg";
import {BsBookmark, BsFillBookmarkFill} from "react-icons/bs"


function SubTopicOverview(props) {
    return (
        <Link to='subtopic'>
            <div className="SubTopicContainer">
                <div className="subTopicCoverImage">
                    <img src={management} alt="picture"/>
                </div>
                <div>
                    <div className="SubTopicDateTag">
                        <span className="SubTopicDato">{props.date.toDateString()}</span> <span className="subTag"><BsBookmark /></span>
                    </div>
                    <h2 className="SubTopicName">{props.name}</h2>
                    <p className="SubTopicSummary">{props.content}</p>
                </div>
            </div>
        </Link>
    )
}
export default function SubOverview()  {
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
                        : subTopics.map(item => <SubTopicOverview key={item._id} id={item._id} name={item.name} date={date} imagePath={item.imagePath} content={item.content} />)}
                </div>
            </div>
        </div>
    )
}