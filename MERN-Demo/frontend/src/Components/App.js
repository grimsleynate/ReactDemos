import './App.css';
import DonationList from './Donation/DonationList';
import DonationForm from './Donation/DonationForm';
import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      donations: [],
      currentDonation: {},
    }

    this.updateCurrentDonation = this.updateCurrentDonation.bind(this)
  }

  componentDidMount() {
    const url = 'http://localhost:5556/donations';

    Axios.get(url, { crossdomain: true })
      .then((response) => {
        this.setState({
          donations: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  updateCurrentDonation(item) {
    this.setState({
      currentDonation: item
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s6 offset-s3 card container light-blue darken-1 white-text center"><p className="title">Food Insecurity Work</p></div>
        </div>
        <div className="row">
          <div className="col s10"><DonationList donations={this.state.donations} updateCurrentDonation={this.updateCurrentDonation}/></div>
        </div>
        <div className="row">
          <div className="col s10"><DonationForm /></div>
        </div>
      </div>
    );
  }

}

export default App;
