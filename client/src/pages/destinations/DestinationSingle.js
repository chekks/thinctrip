import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import t from '../../assets/scss/client/tourSingle.module.scss'
import h from "../../assets/scss/client/homepage.module.scss"
import { SidePanel, HeaderTitle, Container } from '../../mainStyles'

//Component
import HeaderPanel from '../../component/HeaderPanel'
import InnerNavbar from '../../component/widgets/InnerNavbar'
import Accordion from '../../component/Accordion'
import EnquiryForm from '../../component/forms/EnquiryForm'
import GoogleMap from '../../component/GoogleMap'
import GuideWidget from '../../component/widgets/GuideWidget'
import Gallery from '../../component/Gallery'
import { itineraryData } from '../../component/Data'
import Review from '../../component/reviews/Review'
import TourSlider from '../../component/TourSlider'
import Article from '../../component/Article'
import DestinationSpecialtiesSlider from './DestinationSpecialtiesSlider'
import Modal from '../../component/widgets/Modal'

import { 
  thumbData, 
  articleData,
} from '../../component/Data'

//Icons
import { 
    FaRegClock, 
    FaCalendarAlt,
    FaTicketAlt,
    FaUser,
    FaMapSigns,
    FaRegFileAlt,
    FaCameraRetro,
    FaPlaneDeparture,
    FaPlaneArrival,
    FaCommentAlt
} from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import { BsCheck } from 'react-icons/bs'

//temporary

import img_01 from '../../assets/images/destinations/specialties/img_01.jpg';
import img_02 from '../../assets/images/destinations/specialties/img_02.jpg';
import img_03 from '../../assets/images/destinations/specialties/img_03.jpg';
import img_04 from '../../assets/images/destinations/specialties/img_04.jpg';

const local = [
    {
        title: 'Pinikpikan',
        description: 'Best in Cafe by The Ruins Dua',
        img: img_01,
    },
    {
        title: 'Champorado',
        description: 'Best in Cafe by The Ruins Dua',
        img: img_02,
    },
    {
        title: 'Sans rival',
        description: 'Best in Sizzling Plate',
        img: img_03,
    },
    {
        title: 'Pancit',
        description: 'Best in Solibao Restaurant',
        img: img_04,
    },
    {
        title: 'Pinikpikan',
        description: 'Best in Cafe by The Ruins Dua',
        img: img_01,
    },
    {
        title: 'Champorado',
        description: 'Best in Cafe by The Ruins Dua',
        img: img_02,
    },
]

const attractions = [
    {
        title: 'Strawberry Farm',
        description: 'On your list of “Things to do in Baguio,” never forget to include the strawberry picking activity in the Strawberry Farm in La Trinidad Valley, Benguet. Though it is costly, gathering strawberries at the farm with the Igorots (Cordillerans) is an experience worth keeping and sharing.',
        img: 'https://staging.thinctrip.com/wp-content/uploads/2019/11/Strawberry-Farm-Baguio.jpg',
    },
    {
        title: 'Tam-Awan Village',
        description: 'Art, indeed, tells the story of its town. While at your Baguio tour, never forget to drop by at Tam-Awan village, literally translates as ‘vantage point,’ which exhibits the original artworks of Baguio artists. Established on 1998 by National Artist BenCab and Chanum Foundation, it is now a must-visit tourist spot for those who want to have a taste of the culture and way of living of the Cordillera people.',
        img: 'https://staging.thinctrip.com/wp-content/uploads/2019/11/tamawan.jpg',
    },
    {
        title: 'Mt. Ulap and Mt. Pulag Hike',
        description: 'Baguio City has a detour for adventure seekers! After a 40-minute ride from the Burnham Park via jeepney transport, you can already reach the clouds! Mt. Ulap in Itogon, Benguet is the place where you can be at peace with nature as you take the route of its Eco-Trail starting from Brgy. Ampucao to Brgy. Sta. Fe, Itogon. See the stunning beauty of the whole Cordillera with its pine and grassland ridges, mountains, burial caves, and hanging bridges. Witness a glimpse of the town’s villages at the highest point of Mt. Ulap! Meanwhile, enjoy and learn on your Mt. Pulag hike! As its name means, ‘The Playground of the Gods,’ it is also one of the must-sees in Benguet as it is declared as the 3rd highest summit of topographical magnificence and splendor in the Philippines. Its title speaks for itself as it is also the home of the endemic Pinus insularis or dwarf bamboo – the pride of Benguet. Mt. Pulag hike is not just your usual hiking activity for it is where you can see the Pilandok or the Philippine deer – one of the many endangered species inhibiting in the mountain.',
        img: 'https://staging.thinctrip.com/wp-content/uploads/2019/11/pulag.jpg',
    },
    {
        title: 'The Burnham Park',
        description: 'Named after its architect Daniel Hudson Burnham, Burnham Park already witnessed thousands of  laughter, love, and enjoyment from the people of various nationalities, however, one must not forget that once, it also provided shelter for its residents after the occurrence of the earthquake that shook the city on 1990.Forget your names, but not your cameras if you are going to Burnham Park. Covering a total land mass of 32.84 hectares, Burnham Park, located at Jose Abad Santos Drive, Baguio City 2600 Benguet Philippines, is the perfect place to take photographs and spend quality time with your loved ones. Dubbed as the ‘Heart of Baguio City,’ the park will welcome you with its green pasture, relaxing temperature and various activities enjoyed both by the locals and tourists, such as biking, boat riding, and skating – in a very affordable price! Likewise, tourists can also enjoy Filipino street food around the park. Never forget to have a taste of the place’s best and authentic “binatog” (boiled and sweetened white kernels) which you’ll not just enjoy, but will also help you warm up from the cold weather.',
        img: 'https://staging.thinctrip.com/wp-content/uploads/2019/11/burnhampark.jpg',
    },
]

export default class DestinationSingle extends Component {
    state = {
        active_item : {
            description: "",
            img: ""
        }
    }
    openModal = (item) =>{
        this.setState({active_item : item}, ()=>{
          let modal = document.getElementById("destination_modal");
          modal.style.display = "block";
          modal.style.transition = "0.5s;"
        });
    }

    render() {
        return (
            <div className={t.tour}>
                <Modal item = {this.state.active_item} modal_id="destination_modal"/>
                <HeaderPanel
                    type="destination_single"
                    title="Baguio"
                    subtitle="[bah-gee-oh]"
                    bg="https://staging.thinctrip.com/wp-content/uploads/2019/07/Baguio-Main.jpg"
                />
    
                <InnerNavbar align_text="center" />
    
                <div className="destination__container">
                    <div className="destination__content">
                        <section className="destination__overview">
                            <p>There is more to Baguio City than being just the Summer Capital of the Philippines. 
                                If not, then why do you think thousands of tourists endure the long hours of trip 
                                every summer or holiday only to step foot on the land of the well-known ‘City of Pines?’ 
                                Still wondering? Then, here are just some answers to your “Whys?”</p>
                                
                        </section>
    
                        <section className="destination__local"> 
                            <h3 className="destination__header"><i class="fa fa-cutlery pr-10" aria-hidden="true"></i>Local Specialties</h3>
                            
                            <DestinationSpecialtiesSlider data={local}/>
                        </section>
    
                        <section className="destination__attraction">
                            <h3 className="destination__header"><i class="fa fa-map-signs pr-10" aria-hidden="true"></i>Attractions</h3>
                            <div className="destination__attraction--container pt-40">
                                {attractions.map((item, index) =>
                                    <div className="destination__attraction--item" key={index}>
                                        <div className={index % 2 === 0 ? 'destination__attraction--inner' : 'destination__attraction--inner row-reverse'}>
                                            <div className="destination__attraction--thumb">
                                                <img src={item.img} alt="Image"/>
                                            </div>
    
                                            <div className="destination__attraction--details" className={index % 2 === 0 ? 'destination__attraction--details pl-90' : 'destination__attraction--details pr-90'}>
                                                <h3>{item.title}</h3>
                                                <p>{item.description.length > 300 ? `${item.description.substring(0, 299)}...` : item.description}
                                                <button id="myBtn" className="btn_item_see_more" onClick={() =>this.openModal(item)}>[SEE MORE]</button>
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                        
                    </div>
                    
                </div>
    
                <div className={h.tourPackages}>
                    <TourSlider data={thumbData}/>
                </div>
    
                <section className="destination__videos pb-100">
                    <h3 className="destination__header"><i class="fa fa-video-camera pr-10" aria-hidden="true"></i>Featured Videos</h3>
                    <div className="destination__videos--container pt-40">
                        <div className="destination__videos--main pr-20">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rzdiOgOCFFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="destination__videos--thumb">
                            <iframe className="mb-15" width="200" height="150" src="https://www.youtube.com/embed/rzdiOgOCFFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <iframe width="200" height="150" src="https://www.youtube.com/embed/rzdiOgOCFFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
                
    
                <Container>
                    <div className={h.header}>
                        <HeaderTitle colorDark>Related Articles</HeaderTitle>
                        <Link to="/" className={h.headerSubtitle}>/ Read All Articles</Link>
                    </div>
    
                    <Article data={articleData}/>
                </Container>
    
            </div>
        )
    }
}



