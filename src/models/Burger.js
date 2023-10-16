import { fakeDb } from "../db/FakeDb.js"

export class Burger {
    constructor(data) {
        this.id = data.id
        this.name = data.name
    }
}