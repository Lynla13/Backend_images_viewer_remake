import Controller from '../controllers/index';

module.exports = function(app) {
    // MuonSach Router
    app.route('/')
        .get(Controller.Api.insert_api)
};