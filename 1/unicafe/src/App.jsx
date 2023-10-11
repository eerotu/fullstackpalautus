import { useState } from 'react'

// Define the Button component with props
const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

//Define the statisticsline component with props
const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

// Define the Statistic component with props
const Statistic = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.total}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{props.average % 1 === 0 ? props.average.toFixed(0) : props.average.toFixed(2)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{`${props.positive % 1 === 0 ? props.positive.toFixed(0) : props.positive.toFixed(2)} %`}</td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const FEEDBACK_HEADING = 'give feedback'
  const STATISTICS_HEADING = 'statistics'

  // Define constants for the button labels
  const GOOD_LABEL = 'good'
  const NEUTRAL_LABEL = 'neutral'
  const BAD_LABEL = 'bad'

  // Define state variables for the button values
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Calculate the sum of the button values
  const total = good + neutral + bad

  // Calculate the average of the button values
  const average = (good - bad) / total

  // Calculate the percentage of the good button values
  const positive = good / total * 100

  return (
    <div>
      <h1>{FEEDBACK_HEADING}</h1>
      <Button handleClick={() => setGood(good + 1)} text={GOOD_LABEL} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={NEUTRAL_LABEL} />
      <Button handleClick={() => setBad(bad + 1)} text={BAD_LABEL} />
      <h1>{STATISTICS_HEADING}</h1>
      {total > 0 ? (
        <Statistic good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}
export default App