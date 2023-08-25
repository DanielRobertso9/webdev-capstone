import React, { Fragment } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]); 
    
  useEffect(() => {
    axios
      .get('http://localhost:8080/events')
      .then((res) => {
        setEvents(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  , []);

  const cleanedEvents = events.map((event) => {
    return {
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
    };
  });

  return (
    <Fragment>
      <Calendar
        localizer={localizer}
        events={cleanedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        onSelectEvent={(event) => {
          navigate(`/recipe/${event.id}`);
        }}
      />
    </Fragment>
  );
};

export default MyCalendar;
