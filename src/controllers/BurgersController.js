import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
            .delete('/:burgerId', this.destroyBurger)
            .put('/:burgerId', this.updateBurger)
    }

    async createBurger(req, res, next) {
        try {
            const burger = await burgersService.createBurger(req.body)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async getBurgerById(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            const burger = await burgersService.getBurgerById(burgerId)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async getBurgers(req, res, next) {
        try {
            const burgers = await burgersService.getBurgers()
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async destroyBurger(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            await burgersService.destroyBurger(burgerId)
            res.send('Burger Deleted')
        } catch (error) {
            next(error)
        }
    }

    async updateBurger(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            const burger = await burgersService.updateBurger(burgerId, req)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }
}