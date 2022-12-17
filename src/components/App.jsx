import React, {Component} from 'react';
import {Feedback} from './Feedback/Feedback';
import {Notification} from './Notification/Notification';
import {Section} from './Section/Section';
import {Statistics} from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState(
      prevState => ({
        [option]: prevState[option] + 1,
      }));
  };

  countTotalFeedback = evt => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = evt => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);

  };
  render() {
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'}}>
          <Section title="Please leave feedback">
            <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistcs">
            {this.state.good > 0 ||
            this.state.neutral > 0 ||
            this.state.bad > 0 ? (
              <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
            ) : (
              <Notification message="There is no feedback"/>
            )}
          </Section>

      </div>
    );
  }
}