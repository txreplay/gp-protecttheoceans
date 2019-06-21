const express = require('express');
const path = require('path');

const frontRouter = express();

class FrontRouterClass {
    static routes() {
        frontRouter.get('/', (req, res) => res.render('pages/index'));
    }

    static config() {
        frontRouter.use(express.static(path.join(__dirname, '../public')));
        frontRouter.set('views', path.join(__dirname, '../views'));
        frontRouter.set('view engine', 'ejs');
    }

    static init() {
        FrontRouterClass.config();
        FrontRouterClass.routes();

        return frontRouter;
    }
}

module.exports = {FrontRouterClass};
