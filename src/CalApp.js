import React, { useState } from 'react';
import {format, addMonths, subMonths, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay, isSameMonth} from "date-fns";
import {PrevButton, NextButton, Header} from './components/Header';
import './CalApp.css';

function CalApp () {

const [currentDate, setCurrentDate] = useState(new Date());
const [selectedDate, setSelectedDate] = useState(new Date());

function Weekdays () {
//display each day of the week
const dateFormat = "E";
const days = [];
let startDate = startOfWeek(currentDate); 
for (let i = 0; i < 7; i++) {
      days.push(
         <div className="days-column">
         {format(addDays(startDate, i), dateFormat)}
         </div>
      );
   }
   return <div className="days row">{days}</div>;
}; 

function dateCells () {
const monthStart = startOfMonth(currentDate);
const monthEnd = endOfMonth(monthStart);
//the first date of the current month:
let startDate = startOfWeek(monthStart);
//the final date of the current month:
const endDate = endOfWeek(monthEnd);
//formatted date in a cell:
const dateFormat = "d";
//an array of all weeks of a given month
let rows = [];
//the start date of the month
//let day = startDate;

//an array for each calendar week
let days = [];
let formatDate = "";

while (startDate <= endDate) {
   for (let i = 0; i < 7; i++) {
   formatDate = format(startDate, dateFormat); 
      days.push(
         <div className={`column cell ${
            ! isSameMonth(startDate, monthStart) ? "disabled" 
            : isSameDay(startDate, selectedDate) ? "selected" 
            : "" }`} > 
               <span className="date-number">{formatDate}</span>
               <span className="large-date">{formatDate}</span>
      </div>
     );
     startDate = addDays(startDate, 1);
  }

rows.push(
      <div className="row" key={startDate}> {days} </div>
    );
   days = [];
 }
 return <div className="body">{rows}</div>;
}

const nextMonth = () => {
   setCurrentDate(addMonths(currentDate, 1));
};

const prevMonth = () => {
   setCurrentDate(subMonths(currentDate, 1));
};

return (
   <div className="calendar">
      <Header active={format(currentDate, 'MMMM yyyy')}/> 
      <PrevButton onButtonClick={prevMonth} />
      <NextButton onButtonClick={nextMonth} /> 
      <div>{Weekdays()}</div>
      <div>{dateCells()}</div>
   </div>
  );
};

export default CalApp;



