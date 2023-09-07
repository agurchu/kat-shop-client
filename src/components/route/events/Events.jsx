import React from "react";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <div>
      <div className="section">
        <div className="heading">
          <h1>Popular Events</h1>
        </div>
        <div>
          <EventCard />
        </div>
      </div>
    </div>
  );
}
