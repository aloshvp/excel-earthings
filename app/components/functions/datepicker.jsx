//"use client";
import { getMonth, getYear } from 'date-fns';
import React from 'react'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import { alert } from './alertmessage';

const DatePickerComponent = ({placeHolder,selectedDate, onChange,isdisabled=false,rangeFrom="",rangeTo="",name="",maxDate="",minDate="",IconClass=""}) => {
    const range = (start, end) => {
        return new Array(end - start).fill().map((d, i) => i + start);
      };

    let years="";
    if(rangeFrom==""&&rangeTo==""){
       years = range(1990, getYear(new Date()) + 1, 1);
    }else{
       years = range(rangeFrom, rangeTo, 1);
    }

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const handleBlur = () => {
      if (!selectedDate) {
        alert('Please select a valid date');
      }
    };

    const handleDateChange = (date) => {
      if (date) {
        // Ensure we get the local date components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        onChange(dateString); // Pass the YYYY-MM-DD string to the parent
      } else {
        onChange(null); // If date is cleared, pass null
      }
    };

    return (
      <DatePicker disabled={isdisabled}      
      className={`commonDatePicker ${IconClass}`}
      placeholderText={placeHolder}
      name={name}    
      autoComplete='off'
      minDate={minDate}
      maxDate={maxDate}
      dateFormat="dd-MMM-yyyy"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} type="button">
              {"<"}
            </button>
            <select
           
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} type="button">
              {">"}
            </button>
          </div>
        )}
        selected={selectedDate}
        //onChange={onChange}
        onChange={handleDateChange}
        onBlur={handleBlur}
      />
    );
}

export default DatePickerComponent