import React, { useEffect, useState } from 'react'

interface CountDownProps {
  expireDate: Date;
}

const CountDown: React.FC<CountDownProps> = ({expireDate})=> {
  const [counter , setCounter] = useState(10)

  React.useEffect(() => {
      counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) :  console.log('handle in onCounterComplete')
  }, [counter])


   return (
     <div> {counter}</div>
   )
}

export default CountDown
