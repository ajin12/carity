import React, { Component } from 'react';
import './App.css';
import Chart from 'react-google-charts';
import DonationForm from './DonationForm.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      displayPopup: false
    }
  }
  displayPopup = () => {
    this.setState({displayPopup: !this.state.displayPopup})
  }
  render() {
    let popup = null;
    if (this.state.displayPopup) {
      popup = (<DonationForm />);
    }
    return (
      <div className="App">
        <div style={{display: 'flex', maxWidth: 900}} id="chart">
          <Chart
            width={500}
            height={500}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={
              [
                  ['Year', 'Donations'],
                  ['2012', 1234],
                  ['2013', 1000],
                  ['2014', 1300],
                  ['2015', 1500],
                  ['2016', 1200],
                  ['2017', 1100],
                  ['2018', 1200]
              ]
            }
            options={{
              title: 'Donations',
              chartArea: { width: '100%' },
              hAxis: {
                title: 'Year',
                minValue: 2012,
              },
              vAxis: {
                title: 'Donations',
              },
            }}
            legendToggle
          />
        </div>
        <button onClick={this.displayPopup}>
        Add Donation
        </button>
        {popup}
      </div>
    );
  }
}

export default App;
