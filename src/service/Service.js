
module.exports = class Controller {
    static async hello(req, res) {
        try {
            return res.json({helloworld});
        }catch (error) {
            res.status(500).json({error: error});
        }
    }
}