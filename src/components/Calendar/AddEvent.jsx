import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Calendar.module.css";
import { Fragment, useState } from "react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import SelectOptions from "./SelectOptions";

const AddEvent = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "",
    start: "",
    end: "",
    id: "",
  });

  const [favorites, setFavorites] = useState([]);

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
        title: "",
        type: "",
        start: "",
        end: "",
        id: "",
      });
    });
  }

  useEffect(() => {
    axios.get("http://localhost:8080/getFavorites").then((res) => {
      setFavorites(res.data[0]);
    });
  }, []);

  return (
    <Fragment>
      <h1 className={classes.title}>My Calendar</h1>
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
        <select
          onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Dessert">Dessert</option>
        </select>
        <select
          onChange={(e) => setNewEvent({ ...newEvent, id: e.target.value, title: e.target.options[e.target.selectedIndex].text})}
        >
          <option value="">Select Recipe</option>
          {favorites.map((favorites) => (
          <SelectOptions key={favorites.ID} favorites={favorites}  />
        ))}
        </select>
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </Fragment>
  );
};

export default AddEvent;
