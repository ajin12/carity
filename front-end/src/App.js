import React, { Component } from 'react';
import './App.css';
import Popup from './Popup'
import Chart from 'react-google-charts';
import DonationForm from './DonationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      isOpen: false
    }
  }
  displayPopup = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <div className="App">
        <div style={{display: 'flex', maxWidth: 900}} id="chart">
          <Chart
            width={500}
            height={500}
            chartType="AreaChart"
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
              pointSize: 5,
              pointShape: 'circle'
            }}
            legendToggle
          />
        </div>
        <button onClick={this.displayPopup}>
        Add Donation
        </button>
        <Popup show={this.state.isOpen}
          onClose={this.displayPopup}> 
          <DonationForm />         
        </Popup>
      </div>
    );
  }
}

export default App;
