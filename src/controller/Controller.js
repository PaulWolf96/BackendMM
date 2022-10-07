const Controller = require('../controller');

module.exports = class Controller {
    static async hello(req, res) {
        try {
            await ServiceWorker.hello(req, res);
            res.send();
        }catch (error) {
            res.status(404).json({error: error});
        }
    }
}