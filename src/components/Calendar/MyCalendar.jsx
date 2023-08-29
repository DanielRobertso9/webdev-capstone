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
      .get('http://localhost:8080/getEvents')
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
      key: event.Key,
      id: event.ID,
      title: event.Title,
      start: new Date(event.Start),
      end: new Date(event.End),
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
