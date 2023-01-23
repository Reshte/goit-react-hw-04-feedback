import React, { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'

export default class App extends Component{
 state = {
  good: 0,
  neutral: 0,
  bad: 0
  } 
  
  handleIncrement = (event) => {
    this.setState(perState => {
        const option = event.target.textContent.toLowerCase()
     return({ [option]: perState[option] + 1, })   
       //        switch (event.target.textContent) {
      //   case "Good": return { good: perState.good + 1, };
      //   case "Neutral": return { neutral: perState.neutral + 1, };
      //   case "Bad": return { bad: perState.bad + 1, };
      //   default: console.log('УПС, чет не работает')
      // }
    })
  }
  
  countTotalFeedback = () => {
     return (this.state.good + this.state.neutral +this.state.bad)
  }

  countPositiveFeedbackPercentage = () => {
      return Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)
      
 }

  render() {
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
        <FeedbackOptions options={['Good','Neutral','Bad']} onLeaveFeedback={this.handleIncrement} />
        <Statistics       
          good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()}
          positivePercentage ={this.countPositiveFeedbackPercentage()} />
       
      </section>)}
}





