import { Actor, Vector, Keys, Axes, Buttons } from "excalibur";
import { Resources } from "../resources.js";

export class Bench extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Bench.width, height: Resources.Bench.height });
        this.graphics.use(Resources.Bench.toSprite());
        this.scale = new Vector(0.2, 0.2);
        this.tag = "furnitureItem";

        this.cellSize = 100;

        this.allowedPositions = [
            { row: 6, column: 4 },

            // { row: 6, column: 6.5 }, deze row outcommenten zodat de box zichtbaar is.
            { row: 6, column: 9 },
        ];

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
        if (!this.scene || this.scene.engine.currentSceneKey !== 'china') return;
        if (!engine.mygamepad) return;
        if (!this.canMove) return;
        const gp = engine.mygamepad;
        if (typeof this._lastX !== 'number') this._lastX = 0;
        const x = gp.getAxes(Axes.LeftStickX);
        // Edge-detection for left/right movement
        if (x < -0.5 && this._lastX >= -0.5) {
            this.currentIndex--;
            this.placeAtPosition();
        } else if (x > 0.5 && this._lastX <= 0.5) {
            this.currentIndex++;
            this.placeAtPosition();
        }
        this._lastX = x;
    }
}
