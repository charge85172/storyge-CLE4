import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";
import { Keys } from "excalibur";

export class Lamp extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Lamp.width, height: Resources.Lamp.height })
        this.graphics.use(Resources.Lamp.toSprite())
        this.scale = new Vector(0.25,0.25)
        this.tag = "item";


        this.cellSize = 100

        this.allowedPositions = [
            { row: 1, column: 3 },
            { row: 1, column: 5 },
            { row: 1, column: 7 },
            { row: 1, column: 9.5 },
        ]
 
        this.currentIndex = 0;
        this.canMove = true; // Kan bewegen na spawnen

        this.placeAtPosition();

        // 7 seconde om te bewegen
        setTimeout(() => {
            this.canMove = false;
            console.log("Movement disabled after spawn");
        }, 7000); // Na 7 seconden kan je niet meer bewegen. Je moeder met je item verplaatsen.
    }

    placeAtPosition() {
        if (this.currentIndex >= this.allowedPositions.length) this.currentIndex = 0;
        if (this.currentIndex < 0) this.currentIndex = this.allowedPositions.length - 1;
        const pos = this.allowedPositions[this.currentIndex];
        this.pos.x = pos.column * this.cellSize;
        this.pos.y = pos.row * this.cellSize;
    }

    onPreUpdate(engine) {
        if (!this.canMove) return; //Fuck your movement

        const kb = engine.input.keyboard;

        if (kb.wasPressed(Keys.W) || kb.wasPressed(Keys.Up)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (kb.wasPressed(Keys.S) || kb.wasPressed(Keys.Down)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
        if (kb.wasPressed(Keys.A) || kb.wasPressed(Keys.Left)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (kb.wasPressed(Keys.D) || kb.wasPressed(Keys.Right)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
    }
    
}