import { Resources } from "../resources.js"
import { Actor, Vector, Axes, Buttons } from "excalibur";

export class HangedPlant extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.HangedPlant.width, height: Resources.HangedPlant.height })
        this.graphics.use(Resources.HangedPlant.toSprite())
        this.scale = new Vector(0.15, 0.15)
        this.tag = "item";
        this.cellSize = 100
        this.allowedPositions = [
            { row: 4, column: 4 },
            { row: 4, column: 6.5 },
            { row: 4, column: 9 },
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