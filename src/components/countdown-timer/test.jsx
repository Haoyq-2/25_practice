import React from 'react'
import CountdownTimer from '.'

function CountDownTimerTest () {
  
  function handleTimeFinish() {
    
  }

  return (
    <div className='countdown-timer-container'>
      <h1>CountDown Timer</h1>
      <CountdownTimer
        initialTime={300}
        onTimeFinish={handleTimeFinish}
      />
    </div>
  )
}

export default CountDownTimerTest