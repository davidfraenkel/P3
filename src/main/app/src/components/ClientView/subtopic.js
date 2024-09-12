import './styling/subtopic.css';
import {Link} from "react-router-dom";
import ManagementPicture from "../../assets/overview/subOverview/Management.jpg"
import { GoHome } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import Footer from "../../Footer";

export default function Subtopic() {
    return(
        <div className="SubtopicContainer">
            <div className="SubtopicHeaderContainer">
                <div className="Breadcrumbs"><Link to='/overview'><GoHome className="GoHome" /></Link> <BsChevronRight /> <Link to='/overview/sub-overview'>Business</Link> <BsChevronRight /><Link to='/overview/sub-overview/subtopic'>Management</Link></div>
                <h1 className="Title">Management</h1>
                <p className="SubtopicSummary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt expedita laborum optio perspiciatis? Ad beatae eos ipsum iste itaque laboriosam nihil nisi tenetur voluptas. Architecto magni nesciunt ullam veniam.</p>
            </div>
                <hr />
                <div>
                    <h2>What do you need to manage a restaurant?</h2>
                    <p className="SubtopicParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur delectus doloremque error excepturi exercitationem fuga harum iste libero minus necessitatibus nihil nisi, quaerat quo quos recusandae temporibus totam!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cumque distinctio ducimus et, facilis harum ipsam laboriosam modi neque possimus quam quia recusandae reiciendis sapiente similique sunt vel voluptas voluptatum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea excepturi, facilis fugiat hic ipsam iste labore mollitia nam necessitatibus nesciunt odio officia perspiciatis ratione, repellat suscipit temporibus vero voluptatem?</p>
                    <p className="SubtopicParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi, doloremque doloribus dolorum eaque excepturi exercitationem facilis hic illo ipsa ipsum nemo nesciunt obcaecati quam quia quo repellendus sit voluptatibus.</p>
                </div>
                <div className="image">
                    <img src={ManagementPicture} alt="Management" />
                </div>
                <h2>Managers</h2>
                <div className="SubtopicParagraph">
                    <p className="SubtopicParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consectetur delectus doloremque error excepturi exercitationem fuga harum iste libero minus necessitatibus nihil nisi, quaerat quo quos recusandae temporibus totam!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cumque distinctio ducimus et, facilis harum ipsam laboriosam modi neque possimus quam quia recusandae reiciendis sapiente similique sunt vel voluptas voluptatum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea excepturi, facilis fugiat hic ipsam iste labore mollitia nam necessitatibus nesciunt odio officia perspiciatis ratione, repellat suscipit temporibus vero voluptatem?</p>
                    <p className="SubtopicParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi, doloremque doloribus dolorum eaque excepturi exercitationem facilis hic illo ipsa ipsum nemo nesciunt obcaecati quam quia quo repellendus sit voluptatibus.</p>
                </div>

                <div className="SubtopicVideo">
                    <iframe width="1400" height="790" src="https://www.youtube.com/embed/HE9JioDuXkQ?si=jklIb-aJowon8--R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <hr />
                <Footer/>
        </div>
    )
}