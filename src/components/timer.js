import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { isNull } from 'lodash'

function Timer() {
  const [destinationDate, setDestinationDate] = useState(moment());
  const countTimeLeft = () => {
    let targetDate = moment().valueOf();
    if(!isNull(destinationDate)) {
      targetDate = moment(moment(destinationDate._d).startOf('day')).valueOf();
    }
    let nowDate = moment().valueOf();
    let distance = targetDate - nowDate;
    let timeLeft = {};
    if (distance > 0) {
      timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60)
      };
    }
    return timeLeft;
  }
  const [timeLeft, setTimeLeft] = useState(countTimeLeft())
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(countTimeLeft());
    }, 1000);
  });

  const timerComponent = [];
  Object.keys(timeLeft).forEach(i => {
    if(!timeLeft[i]) {
      return;
    }
    timerComponent.push(
      <span key={i}>
        {timeLeft[i]} {i} {" "}
      </span>
    )
  })

  return (
    <>
      <p>
        <small>Countdown to</small> <strong>{!isNull(destinationDate) ? moment(destinationDate._d).format('DD/MM/YYYY') : moment().format('DD/MM/YYYY')}</strong>: {timerComponent.length ? timerComponent : <span className="badge badge-success badge-pill">Time's up!</span>}
      </p>

      <DatePicker 
        onChange={(date) => setDestinationDate(date)}
        format="DD/MM/YYYY" 
      />
    </>
  )
}

export default Timer;