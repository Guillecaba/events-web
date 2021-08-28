import EventContent from "../../../components/event-detail/event-content";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventSummary from "../../../components/event-detail/event-summary";
import { Fragment } from "react";
import { getEventById } from "../../../dummy-data";
import { useRouter } from "next/router";

const EventDetailPage = () => {
  const router = useRouter();
  console.log(router.query.eventId);
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event);
  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventDetailPage;
