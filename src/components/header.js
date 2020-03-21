import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Player from './audio'

const Header = () => {
  const [nowTime, setNowTime] = useState(moment().format('hh:mm:ss A'));
  useEffect(() => {
    setTimeout(() => {
      setNowTime(moment().format('hh:mm:ss A'));
    }, 1000)
  })

  return (
    <header>
      <div className="d-flex justify-space-between align-center px-3">
        <p> {moment().format('ddd DD/MM/YYYY')} </p>
        <p className="position-absolute left-50"> {nowTime} </p>
        <Player />
      </div>
    </header>
  )
}
export default Header;