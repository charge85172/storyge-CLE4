import { Resources } from "../resources.js"
import { Actor, Vector, Axes, Buttons } from "excalibur";

export class Window extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Window.width, height: Resources.Window.height })
        this.graphics.use(Resources.Window.toSprite())
        this.scale = new Vector(0.25, 0.25)

        this.tag = "furnitureItem";

        this.cellSize = 100

        this.allowedPositions = [
            { row: 4, column: 4 },
            { row: 4, column: 6.5 },
            { row: 4, column: 9 },
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
