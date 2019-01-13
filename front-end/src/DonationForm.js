import React from 'react';

export default class DonationForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <form>
          <div class = "container"> 
            <h1> Add a donation </h1>
            <label for = "organization"><b> Organization </b></label>
            <input type = "text" placeholder= "Enter organization name" name = "organization" required />

            <label for = "amount"><b> Amount donated </b></label>
            <input type = "amount" placeholder="Enter amount donated" name = "amount" required />
            <button onClick={this.props.closePopup}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
