const {Router} = require('express');

const {FrontRouterClass}  = require('./front.route');
const {PetitionRouterClass}  = require('./api/petition/petition.route');

const mainRouter = Router();
const apiRouter = Router();

const petitionRouter = new PetitionRouterClass();

mainRouter.use('/', FrontRouterClass.init());

mainRouter.use('/api', apiRouter);
apiRouter.use('/petition', petitionRouter.init());

module.exports = { mainRouter };
