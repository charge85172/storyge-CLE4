import { Scene, Label, Font, Color, Vector, Actor, Buttons } from "excalibur"
import { Resources } from "../resources.js"
import { StartButton } from "../assets/startbutton.js"
import { China } from "./china.js"
import { QuitButton } from "../assets/quitbutton.js"


export class StartScreen extends Scene {
    //overbodig
    // constructor() {
    //     super()
    // }

    onActivate(ctx) {
        this.clear(); // 🧼 Clear all actors from previous scene usage
        this._engine = ctx.engine;

        this._engine.backgroundColor = Color.Black; // ✅ Prevent blue flash

        // Add background
        const introbackgroundSprite = Resources.IntroBackground.toSprite();
        const screenWidth = this._engine.drawWidth;
        const screenHeight = this._engine.drawHeight;

        const introbackgroundActor = new Actor({
            pos: new Vector(screenWidth / 2, screenHeight / 2),
            width: screenWidth,
            height: screenHeight
        });

        introbackgroundActor.graphics.use(introbackgroundSprite);
        introbackgroundActor.graphics.anchor = Vector.Half;
        introbackgroundActor.scale = new Vector(
            screenWidth / introbackgroundSprite.width,
            screenHeight / introbackgroundSprite.height
        );
        this.add(introbackgroundActor);

        // Museum image
        const museumSprite = Resources.Museum.toSprite();
        const museumActor = new Actor({
            pos: new Vector(640, 360),
            width: museumSprite.width,
            height: museumSprite.height
        });
        museumActor.graphics.use(museumSprite);
        this.add(museumActor);

        // Start button
        this._startButton = new StartButton(
            new Vector(1100, 350),
            () => this.handleStart()
        );
        const startLabel = new Label({
            text: "press A to start",
            pos: new Vector(-175, 110),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White
        });
        this._startButton.addChild(startLabel);
        this.add(this._startButton);

        // Quit button
        this._quitButton = new QuitButton(
            new Vector(1050, 500),
            () => this.handleQuit()
        );
        const quitLabel = new Label({
            text: "press B to quit",
            pos: new Vector(-100, 85),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White
        });
        this._quitButton.addChild(quitLabel);
        this.add(this._quitButton);

        // Game title
        this.label = new Label({
            text: "Storyge",
            pos: new Vector(900, 250),
            font: Resources.PressStart2P.toFont({ size: 40 }),
            color: Color.White
        });
        this.add(this.label);

        // Remove any old handlers
        if (this._gamepadHandler) {
            this._engine.off('preupdate', this._gamepadHandler);
            this._gamepadHandler = undefined;
        }
    }



    onDeactivate() {
        // Remove gamepad handler
        if (this._engine && this._gamepadHandler) {
            this._engine.off('preupdate', this._gamepadHandler);
        }
    }

    initializeChina() {
        // Only add the scene if it doesn't exist yet
        if (!this.engine.scenes['china']) {
            this.engine.add('china', new China())
        }
        this.engine.goToScene('china')
        console.log("China scene initialized")
    }
    handleStart() {
        if (!this.engine.scenes['china']) {
            this.engine.add('china', new China())
        }
        this.engine.goToScene('china')
        console.log("China scene initialized")
    }
    handleQuit() {
        // Close the browser tab or window if possible
        if (window && window.close) {
            window.close();
        } else {
            // As a fallback, try to redirect to a blank page
            window.location.href = 'about:blank';
        }
    }

    onPreUpdate(engine) {
        if (!engine.mygamepad) return;
        const gp = engine.mygamepad;
        if (gp.wasButtonPressed(Buttons.Face1)) {
            this.handleStart();
        }
        if (gp.wasButtonPressed(Buttons.Face2)) {
            this.handleQuit();
        }
    }
}

// code is tot hier gemaakt door charge