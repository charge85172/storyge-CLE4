import { Resources } from "../resources.js"
import { Actor, Vector, Axes, Buttons } from "excalibur";

export class Shelf extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Shelf.width, height: Resources.Shelf.height })
        this.graphics.use(Resources.Shelf.toSprite())
        this.scale = new Vector(0.15, 0.15)
        this.tag = "furnitureItem";
        this.cellSize = 100
        this.allowedPositions = [
            { row: 2, column: 4 },
            { row: 2, column: 6.5 },
            { row: 2, column: 9 },
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
        if (gp.wasButtonPressed(12)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (gp.wasButtonPressed(13)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
        if (gp.wasButtonPressed(14)) {
            this.currentIndex--;
            this.placeAtPosition();
        }
        if (gp.wasButtonPressed(15)) {
            this.currentIndex++;
            this.placeAtPosition();
        }
    }
}
