import './Landing.scss';
import EventsImage from '../../assets/image/Events.svg'
const Landing = () => {
    return (
        <div className='Landing'>
            <div className="heading_container">
                <div className="heading">
                    <div className="primary">
                        Imagine if
                    </div>
                    <div className="secondary">
                        Snapchat
                    </div>
                    <div className="primary">
                        had events.
                    </div>
                </div>
                <div className="subheading">
                    Easily host and share events with your
                    friends across any social media.
                </div>
            </div>
            <div className="events_container">
                <img src={EventsImage} />
                <input className='create_event_btn' type="button" value={` 🎉 Create my Event`} />
            </div>

        </div>
    )
}

export default Landing;