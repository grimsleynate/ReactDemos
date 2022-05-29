import React from 'react';
import Axios from 'axios';

class DonationForm extends React.Component {
    submitDonation(e) {
        e.preventDefault();
        Axios.post('http://localhost:5556/donations', {
            organizationName: this.refs.organizationName.value,
            dollarAmount: this.refs.dollarAmount.value,
            comment: this.refs.comment.value
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
        })
    }
    
    render() { 
        return ( 
            <div className="row">
                <h4 className="center">Add a new donation</h4>
                <form className="col s12" onSubmit={this.submitDonation.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="organizationName" ref="organizationName" type="text"/>
                            <label htmlFor="organizationName">Organization Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="dollarAmount" ref="dollarAmount" type="text"/>
                            <label htmlFor="dollarAmount">Dollar Amount</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="comment" ref="comment" type="text"/>
                            <label htmlFor="comment">Comment</label>
                        </div>
                    </div>
                    <button className="btn light-blue darken-1 waves-effect waves-light" type="submit" name="action">Add donation</button>
                </form>
            </div>
         );
    }
}
 
export default DonationForm;