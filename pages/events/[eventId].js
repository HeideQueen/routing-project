import React from 'react';

import { getEventById, getFeaturedEvents } from '../../helpers/api-util';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function EventDetailPage({ selectedEvent }) {
  if (!selectedEvent) {
    return (
      <div className='center'>
        <p>Loading...</p>;
      </div>
    );
  }

  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps({ params }) {
  const eventId = params.eventId;

  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      selectedEvent,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export default EventDetailPage;
