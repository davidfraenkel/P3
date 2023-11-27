import '../ClientView/styling/subOverview.css';
import './styling/ccsuboverview.css';
import React from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";

const Subtopic = ({ id, name, imageType, date }) => {
    const subtopicImage = require(`../../assets/overview/subOverview/${name}.${imageType}`);

    return (
        <div className="SubTopicContainer">
            <div className="subTopicCoverImage">
                <img src={subtopicImage} alt="picture" />
            </div>
            <div>
                <div className="SubTopicDateTag">
                    <span className="SubTopicDato">{date.toDateString()}</span>{" "}
                    <span className="subTag">
                    <Link to={`/ccoverview/ccsub-overview/create-update-subtopic?subtopicName=${name}`}>
                      <FiEdit2 />
                    </Link>
          </span>
                </div>
                <h2 className="SubTopicName">{name}</h2>
                <p className="SubTopicSummary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum ea excepturi ipsum iure maiores nesciunt non sit tempore velit. Eum ipsam numquam quia voluptate voluptatem. Aspernatur doloribus minus molestiae.
                </p>
            </div>
        </div>
    );
};

export default function CcSubOverview() {
    const date = new Date();

    return (
        <div>
            <div className="SubOverviewContainer">
                <div className="SubOverviewHeaderContainer">
                    <h2 className="SubOverviewHeader">Business</h2>
                    <p className="">
                        Overview of all the subtopics
                    </p>
                </div>
                <div className="SubTopicsContainer">
                    {subtopics.map((subtopic) => <Subtopic key={subtopic.id} id={subtopic.id} name={subtopic.name} imageType={subtopic.imageType} date={date} />)}
                    <Link to='create-update-subtopic'>
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

const subtopics = [
    { 'id': 1, 'name': 'Management', imageType: "jpg" },
    { 'id': 2, 'name': 'Law', imageType: "jpeg" },
    { 'id': 3, 'name': 'Tips', imageType: "jpeg" },
];