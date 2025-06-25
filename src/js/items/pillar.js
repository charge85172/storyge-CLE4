import { Resources } from "../resources.js"
import { Actor, Vector, Axes, Buttons } from "excalibur";

export class Pillar extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Pillar.width, height: Resources.Pillar.height })
        this.graphics.use(Resources.Pillar.toSprite())
        this.scale = new Vector(0.57, 0.57)
        this.tag = "item";
        this.cellSize = 100
        this.allowedPositions = [
            { row: 3, column: 1 },
            { row: 3, column: 12 },
            { row: 3, column: 2 },
            { row: 3, column: 10.7 },
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
        // Use left stick for movement
        const x = gp.getAxes(Axes.LeftStickX);
        if (x < -0.5) {
            this.currentIndex--;
            this.placeAtPosition();
        } else if (x > 0.5) {
            this.currentIndex++;
            this.placeAtPosition();
        }
    }
}