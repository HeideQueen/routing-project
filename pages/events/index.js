import Head from 'next/head';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

import { getAllEvents } from '../../helpers/api-util';

function AllEventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot great events that allow you to evolve'
        />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
