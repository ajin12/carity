import React, { Component } from 'react';
import styles from './App.css';
import Popup from './Popup'
import Chart from 'react-google-charts';
import DonationForm from './DonationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      isOpen: false,
    }
  }
  displayPopup = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <div className={styles.App} style= {{backgroundColor: this.state.isOpen ? 'rgba(0,0,0,0.2)':'white'}}>
        <div class = "center-div" style={{display: 'flex', maxWidth: 900}} id="chart">
          <Chart
            width={900}
            height={400}
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
                  ['2018', 2000]
              ]
            }
            options={{
              title: 'Your Donation History',
              chartArea: { width: '70%' },
              hAxis: {
                title: 'Year',
                minValue: 2012
              },
              vAxis: {
                minValue: 0,
                format: '$#,###'
              },
              pointSize: 5,
              pointShape: 'circle',
              backgroundColor: this.state.isOpen ? {'fill': '#000',
      'fillOpacity': 0.003 } :'white'
            }}
          />
        </div>
          <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.displayPopup}><i class="material-icons"> add</i></a>
        <Popup show={this.state.isOpen}
          onClose={this.displayPopup}> 
        <DonationForm />         
        </Popup>
      </div>
    );
  }
}

export default App;
