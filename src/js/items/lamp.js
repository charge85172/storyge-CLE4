import { Resources } from "../resources.js"
import { Actor, Vector, Axes, Buttons } from "excalibur";

export class Lamp extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Lamp.width, height: Resources.Lamp.height })
        this.graphics.use(Resources.Lamp.toSprite())
        this.scale = new Vector(0.18, 0.18)
        this.tag = "item";
        this.cellSize = 100
        this.allowedPositions = [
            { row: 1, column: 3 },
            { row: 1, column: 5 },
            { row: 1, column: 7 },
            { row: 1, column: 9.5 },
        ]
        this.currentIndex = 0;
        this.canMove = true;
        this.placeAtPosition();
        setTimeout(() => {
            this.canMove = false;
            console.log("Movement disabled after spawn");
        }, 7000);
    }
    placeAtPosition() {
        if (this.currentIndex >= this.allowedPositions.length) this.currentIndex = 0;
        if (this.currentIndex < 0) this.currentIndex = this.allowedPositions.length - 1;
        const pos = this.allowedPositions[this.currentIndex];
        this.pos.x = pos.column * this.cellSize;
        this.pos.y = pos.row * this.cellSize;
    }
    onPreUpdate(engine) {
        if (!this.scene || this.scene.engine.currentSceneKey !== 'china') return;
        if (!engine.mygamepad) return;
        if (!this.canMove) return;
        const gp = engine.mygamepad;
        if (gp.isButtonPressed(12)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (gp.isButtonPressed(13)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
        if (gp.isButtonPressed(14)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (gp.isButtonPressed(15)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
    }
}