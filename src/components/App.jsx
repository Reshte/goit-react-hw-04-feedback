import React, { useState } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'


export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleIncrement = (e) => {
    const option = e.target.textContent.toLowerCase()
    switch (option) {
      case 'good':
        setGood(state => state + 1)
        break;
      case 'neutral':
        setNeutral(state => state + 1)
        break;
      case 'bad':
        setBad(state => state + 1)
         break;
     default:
        throw new Error()
          }    
  }

  const countTotalFeedback = () => {
     return (good + neutral + bad)
  }

  const countPositiveFeedbackPercentage = () => {
      return Math.round((good / (good + neutral + bad)) * 100)
      
 }


   return (
      <section style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}>
        <FeedbackOptions options={['Good','Neutral','Bad']} onLeaveFeedback={handleIncrement} />
        <Statistics       
          good={good} neutral={neutral} bad={bad} total={countTotalFeedback()}
          positivePercentage ={countPositiveFeedbackPercentage()} />
       
      </section>)
  
}

