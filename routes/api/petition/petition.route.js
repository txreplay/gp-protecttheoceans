const express = require('express');
const bodyParser = require('body-parser');

const petitionRouter = express.Router();

const {addSignature, getNbSignatures} = require('./petition.controller');
const {gotBody, checkFields} = require('../../../services/request.service');
const {sendBodyError, sendFieldsError, sendApiSuccess, sendApiError} = require('../../../services/response.service');

class PetitionRouterClass {
    routes() {
        petitionRouter.post('/', (req, res) => {
            if (gotBody(req.body)) sendBodyError(res);

            const {validity, extra, miss} = checkFields(['email', 'firstname', 'lastname', 'postalCode'], req.body);

            if (!validity) {
                sendFieldsError(res, extra, miss);
            } else {
                addSignature(req.body)
                    .then(apiRes => sendApiSuccess(res, apiRes, 'Signature successfully added.'))
                    .catch(apiResErr => sendApiError(res, null, apiResErr));
            }
        });

        petitionRouter.get('/', (req, res) => {
            getNbSignatures()
                .then(apiRes => sendApiSuccess(res, apiRes, 'Number of all signatures.'))
                .catch(apiResErr => sendApiError(res, null, apiResErr));
        });
    }

    init() {
        petitionRouter.use(bodyParser.urlencoded({ extended: true }));
        petitionRouter.use(bodyParser.json());

        this.routes();

        return petitionRouter;
    }
}

module.exports = {PetitionRouterClass};
