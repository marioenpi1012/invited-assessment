import './Event.scss'
import Cake from '../../assets/image/Birthday cake.png'
import {BsCalendar3} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {GrFormNext} from 'react-icons/gr'
const Event = () => {
    return (
        <div className="Event">
            <div className="event_container">
                <div className="image">
                    <img src={Cake} alt=""/>
                </div>
                <div className="event_info">
                    <div className="name">Birthday Bash</div>
                    <div className="hosted_by">
                        <span className="hosted_text">Hosted by
                        </span>
                        <span className='hosted_name'>Elysia</span>
                    </div>
                    <div className="event_date">
                        <div className="calendar_icon">
                            <BsCalendar3/>
                        </div>
                        <div className="date">
                            <div className="date_from">
                                18 August 6:00PM
                            </div>
                            <div className="date_to">
                                to 
                                <span className="secondary_text">19 August 1:00PM</span>
                                UTC +10
                            </div>
                        </div>
                    </div>
                    <div className="event_location">
                        <div className="location_icon">
                            <GoLocation/>
                        </div>
                        <div className="street_name">
                            <span className='street'>Street name</span>
                            <span className="name">Suburd, State, Poscode</span>
                        </div>
                    </div>
                </div>
                <div className="next">
                    <GrFormNext />
                </div>
            </div>
        </div>
    )
}

export default Event;