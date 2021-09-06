import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from 'next/router';

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler=(year,month) => {
    const fullPath= `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default EventsPage;
