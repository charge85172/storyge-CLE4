import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";
import { Keys } from "excalibur";

export class SunWukong extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseSunWukong.width, height: Resources.ChineseSunWukong.height })
        this.graphics.use(Resources.ChineseSunWukong.toSprite())
        this.scale = new Vector(0.06, 0.06)

        this.tag = "chineseItem"

        this.cellSize = 100

        this.allowedPositions = [
            { row: 2, column: 4 },
            { row: 2, column: 6.5 },
            { row: 2, column: 9 },
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
