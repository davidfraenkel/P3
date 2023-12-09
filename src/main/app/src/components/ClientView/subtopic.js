import './styling/subtopic.css';
import {Link, useLocation} from "react-router-dom";
import ManagementPicture from "../../assets/overview/subOverview/Management.jpg"
import { GoHome } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import Footer from "../../Footer";
import {useEffect, useRef, useState} from "react";

const textDiv = (element) => {
    return (
        <div className="SubtopicParagraph"><p className="SubtopicParagraph">{element.value}</p></div>
    )
}

const imageDiv = (element) => {
    const imageName = element.fileName; // Adjust this based on your element's structure
    const imageSrc = require('../../../public/images/' + imageName); // Construct the image source dynamically
    return (
        <div className="image">
            <img src={imageSrc} alt={imageName} />
        </div>
    );
}

const youtubeDiv = (element) => {
    const videoId = element.value.split("v=")[1];
    return <YouTubeVideo videoId={videoId} />;
}

function YouTubeVideo({ videoId }) {
    const playerRef = useRef(null);

    useEffect(() => {
        // Load the YouTube iframe API asynchronously
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);

        // Initialize the YouTube Player when the script is loaded
        script.onload = () => {
            window.YT.ready(() => {
                playerRef.current = new window.YT.Player("youtube-player", {
                    videoId: videoId,
                    width: "1400", // Set the width dynamically
                    height: "790", // Set the height dynamically
                    playerVars: {
                        controls: 0, // Hide player controls
                        modestbranding: 1, // Remove YouTube logo
                        rel: 0, // Disable related videos
                    },
                });
            });
        };

        return () => {
            // Clean up the player when the component unmounts
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [videoId]);

    return (
        <div className="SubtopicVideo">
            <div id="youtube-player"></div>
        </div>
    );
}

export default function Subtopic() {
    const [subTopicData, setSubTopicData] = useState([]);
    const [subTopicContent, setSubTopicContent] = useState([]);
    const location = useLocation();
    const searchParams= new URLSearchParams(location.search);
    const subtopicId = searchParams.get('subtopicId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/api/getSubTopic?subTopicId=${subtopicId}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const content = JSON.parse(data.content);
                setSubTopicData(data);
                setSubTopicContent(content);

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure the effect runs once on mount

    function CreateContent(props) {
            const element = props.element;
           switch (element.type) {
                case "text":
                    return textDiv(element);
                case "file":
                    return imageDiv(element);
                case "youtube":
                    return youtubeDiv(element);
                default:
                    return null;
            }
    }
    return(
        <div className="SubtopicContainer">
            <div className="SubtopicHeaderContainer">
                <div className="Breadcrumbs"><Link to='/overview'><GoHome className="GoHome" /></Link> <BsChevronRight /> <Link to='/overview/sub-overview'>Business</Link> <BsChevronRight /><Link to='/overview/sub-overview/subtopic'>Management</Link></div>
                <h1 className="Title">{subTopicData.name}</h1>
                <p className="SubtopicSummary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt expedita laborum optio perspiciatis? Ad beatae eos ipsum iste itaque laboriosam nihil nisi tenetur voluptas. Architecto magni nesciunt ullam veniam.</p>
            </div>
            <hr />
                {subTopicContent.map(object => <CreateContent key={object.order} element={object} />)}
            <hr />
            <Footer/>
        </div>
    )
}