import './styling/subOverview.css';
import React from "react";
import {Link} from "react-router-dom";
import management from "../../assets/overview/subOverview/Management.jpg";
import {BsBookmark, BsFillBookmarkFill} from "react-icons/bs"
export default function SubOverview()  {
    const date = new Date;

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
                    <Link to='subtopic'>
                        <div className="SubTopicContainer">
                            <div className="subTopicCoverImage">
                                <img src={management} alt="picture"/>
                            </div>
                            <div>
                                <div className="SubTopicDateTag">
                                    <span className="SubTopicDato">{date.toDateString()}</span> <span className="subTag"><BsBookmark /></span>
                                </div>
                                <h2 className="SubTopicName">Management</h2>
                                <p className="SubTopicSummary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum ea excepturi ipsum iure maiores nesciunt non sit tempore velit. Eum ipsam numquam quia voluptate voluptatem. Aspernatur doloribus minus molestiae.</p>
                            </div>
                        </div>
                    </Link>
                    <div className="SubTopicContainer">
                        <div className="subTopicCoverImage">
                            <img src={management} alt="picture"/>
                        </div>
                        <div>
                            <div className="SubTopicDateTag">
                                <span className="SubTopicDato">{date.toDateString()}</span> <span className="subTag"><BsBookmark /></span>
                            </div>
                            <h2 className="SubTopicName">Law</h2>
                            <p className="SubTopicSummary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum ea excepturi ipsum iure maiores nesciunt non sit tempore velit. Eum ipsam numquam quia voluptate voluptatem. Aspernatur doloribus minus molestiae.</p>
                        </div>
                    </div>

                    <div className="SubTopicContainer">
                        <div className="subTopicCoverImage">
                            <img src={management} alt="picture"/>
                        </div>
                        <div>
                            <div className="SubTopicDateTag">
                                <span className="SubTopicDato">{date.toDateString()}</span> <span className="subTag"><BsBookmark /></span>
                            </div>
                            <h2 className="SubTopicName">Tips</h2>
                            <p className="SubTopicSummary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum ea excepturi ipsum iure maiores nesciunt non sit tempore velit. Eum ipsam numquam quia voluptate voluptatem. Aspernatur doloribus minus molestiae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}