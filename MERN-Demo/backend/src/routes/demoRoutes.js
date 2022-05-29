import { addNewDonation, getDonations, getDonationWithID, updateDonation, deleteDonation } from '../controllers/demoController';

const routes = (app) => {
    //create route for donations
    app.route('/donations')
        //create the GET request
        .get(getDonations)
        //the POST request
        .post(addNewDonation);

    //create a new route so you can get entries by their ID
    app.route('/donations/:donationID')
        //create GET request
        .get(getDonationWithID)
        //create PUT request
        .put(updateDonation)
        //create DELETE request
        .delete(deleteDonation)
}

export default routes;