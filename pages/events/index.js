import React from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
