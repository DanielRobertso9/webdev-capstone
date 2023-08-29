import React, { useState, useEffect } from "react";
import axios from "axios";
import GroceryList from "./GroceryList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./GroceryList.module.css";

const GroceryListScreen = () => {
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [event, setEvent] = useState({
    title: "",
    type: "",
    start: "",
    end: "",
    id: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/getEvents")
      .then((res) => {
        setEvents(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredEvents = events.filter((event) => {
    return new Date(event.Start) >= startDate && new Date(event.End) <= endDate;
  });

  if (events.length === 0) {
    return null;
  } else {
    return (
      <div className={classes.GroceryList_container}>
        <div className={classes.Options_container}>
          <div>
            <h3>Start Date</h3>
            <DatePicker
              placeholderText="Start Date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          </div>
          <div>
            <h3>Start Date</h3>
            <DatePicker
              placeholderText="End Date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>
        <div className={classes.list_container}>
          <h2>Shopping List</h2>
          <GroceryList events={filteredEvents} />
        </div>
      </div>
    );
  }
};

export default GroceryListScreen;
