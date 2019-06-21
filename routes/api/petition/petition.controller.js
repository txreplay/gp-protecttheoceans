const PetitionModel = require('../../../models/petition.model');

const addSignature = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            return PetitionModel.create(body)
                .then((mongoRes) => resolve(mongoRes))
                .catch((mongoResErr) => reject(mongoResErr));

        } catch (e) {
            reject(e);
        }
    });
};

const getNbSignatures = () => {
    return new Promise((resolve, reject) => {
        PetitionModel.countDocuments({}, (error, count) => {
            console.log(count);
            if (error) {
                return reject(error);
            } else {
                return resolve(count);
            }
        });
    });
};

module.exports = {addSignature, getNbSignatures};
