import { fakeDb } from "../db/FakeDb.js"
import { Burger } from "../models/Burger.js"
import { BadRequest, Forbidden, UnAuthorized } from "../utils/Errors.js"

class BurgersService {
    getBurgerById(burgerId) {
        const burger = fakeDb.burgers.find(burger => burger.id == burgerId)
        if (!burger) {
            throw new BadRequest(`Invalid Burger Id: ${burgerId}`)
        }
        return burger
    }

    createBurger(burgerData) {
        burgerData.id = fakeDb.burgers.length + 1
        const newBurger = new Burger(burgerData)
        fakeDb.burgers.push(newBurger)
        return newBurger
    }

    async getBurgers() {
        const burgers = await fakeDb.burgers
        return burgers
    }

    async destroyBurger(burgerId) {
        const burgerIndex = fakeDb.burgers.findIndex(burger => burger.id == burgerId)
        if (burgerIndex == -1) {
            throw new BadRequest(`Invalid Burger Id: ${burgerId}`)
        }
        fakeDb.burgers.splice(burgerIndex, 1)
    }

    async updateBurger(burgerId, req) {
        let burger = fakeDb.burgers.find(burger => burger.id == burgerId)
        if (!burger) {
            throw new BadRequest(`Invalid burger Id: ${burgerId}`)
        }
        const keys = Object.keys(req.body)
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] != 'id') {
                burger[keys[i]] = req.body[keys[i]]
            }
        }
        return burger
    }
}

export const burgersService = new BurgersService()