const studentService = require("../service/UserService");
const winston = require('winston');

const consoleTransport = new winston.transports.Console()
/**
 * Posee las llamadas a los servicios correspondientes
 * para cada operación del CRUD
 * 
 */
 const myWinstonOptions = {
  transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)


module.exports = class UserController {

  /**
   * Método usado para llamar al servicio 
   * correspondiente para registrar un nuevo ususario
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async save(req, res) {
    try {  
      logger.info(req.body.firstname);
      await userService.save(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para actualizar un usuario
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async update(req, res) {
    try {
      await userService.update(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para eliminar un usuario
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async delete(req, res) {
    try {
      await userService.delete(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para buscar un usuario
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findOne(req, res) {
    try {
      await userService.findOne(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  /**
   * Método usado para llamar al servicio 
   * correspondiente para buscar todos los usuarios
   * @param {*HttpRequest} req 
   * @param {*HttpResponse} res 
   */
  static async findAll(req, res) {
    try {
      await userService.findAll(req, res);
      res.send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
