import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Detail.module.css";
import { useState } from "react";
import axios from "axios";

const AddToCalendar = ({ recipe }) => {
  const [newEvent, setNewEvent] = useState({
    title: recipe.title,
    type: "",
    start: "",
    end: "",
    id: recipe.id,
  });

  function handleAddEvent() {
    const body = {
      Title: newEvent.title,
      ID: newEvent.id,
      Type: newEvent.type,
      Start: newEvent.start,
      End: newEvent.end,
    };
    axios.post("http://localhost:8080/addEvent", body).then((res) => {
      setNewEvent({
        type: "",
        start: "",
        end: "",
      });
    });
  }

  return (
    <div className={classes.add_to_calendar}>
      <h3>Add to Calendar</h3>
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
        <select onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}>
            <option value="">Select Type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
        </select>
      <button className={classes.add_to_calendar_btn}onClick={handleAddEvent}>Add To Calendar</button>
    </div>
  );
};

export default AddToCalendar;
