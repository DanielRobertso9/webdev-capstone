import Events from "./Events";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Calendar.module.css";
import { Fragment, useState } from "react";
import React from "react";

const AddEvent = () => { 

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(Events);
  
    function handleAddEvent() {
      setAllEvents([...allEvents, newEvent]);
      setNewEvent({ title: "", start: "", end: "" });
    }

    return (
        <Fragment>
          <h1>Calendar</h1>
          <div className={classes.new_event}>
            <DatePicker
              placeholderText="Start Date"
              selected={newEvent.start}
              onChange={(date) => setNewEvent({ ...newEvent, start: date })}
              showTimeSelect
              dateFormat="Pp"
            />
            <DatePicker
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(date) => setNewEvent({ ...newEvent, end: date })}
              showTimeSelect
              dateFormat="Pp"
            />
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <button onClick={handleAddEvent}>Add Event</button>
          </div>
        </Fragment>
      );
    };

    export default AddEvent;