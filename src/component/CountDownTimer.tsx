import React, { useEffect, useState } from 'react'

interface CountDownTimerProps {
  expireDate: Date;
  onTimerComplete: ()=> void
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({expireDate , onTimerComplete})=> {
  const [counter , setCounter] = useState(10)

  useEffect(() => {
      counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) :  onTimerComplete()
  }, [counter])


   return (
     <div> {counter}</div>
   )
}

export default CountDownTimer
