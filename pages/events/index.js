import {getFeaturedEvents} from '../../dummy-data';

const EventsPage = () => {
    const featuredEvents = getFeaturedEvents();
    return (<div>
        <h1>AllEvents</h1>
    </div>)
}

export default EventsPage;