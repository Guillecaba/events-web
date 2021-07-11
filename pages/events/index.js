import EventList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data";

const EventsPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default EventsPage;
