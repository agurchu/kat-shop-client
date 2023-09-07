import React from "react";
import Header from "../components/layout/Header";
import EventCard from "../components/route/events/EventCard";

export default function EventsPage() {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} />
      <EventCard active={true} />
    </div>
  );
}
