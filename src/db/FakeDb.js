import { Burger } from "../models/Burger.js";

class FakeDb {
    constructor() {
        this.burgers = [
            new Burger({
                name: 'Double Double 💗 Stopper',
                id: 1
            }),
            new Burger({
                name: 'Big Bacon',
                id: 2
            }),
            new Burger({
                name: 'Grease beast',
                id: 3
            }),
            new Burger({
                name: 'Heart Eraser',
                id: 4
            })
        ]
    }
}

export const fakeDb = new FakeDb()