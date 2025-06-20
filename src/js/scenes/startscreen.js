import { Scene, Label, Font, Color, Vector, Actor } from "excalibur"
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
        this._engine = ctx.engine;

        // Background behind the museum
        const introbackgroundSprite = Resources.IntroBackground.toSprite()
        const screenWidth = this._engine.drawWidth
        const screenHeight = this._engine.drawHeight
        const introbackgroundActor = new Actor({
            pos: new Vector(screenWidth / 2, screenHeight / 2),
            width: screenWidth,
            height: screenHeight
        })
        // Stretch the sprite to fill the actor
        introbackgroundActor.graphics.use(introbackgroundSprite)
        introbackgroundActor.graphics.anchor = new Vector(0.5, 0.5)
        introbackgroundActor.scale = new Vector(
            screenWidth / introbackgroundSprite.width,
            screenHeight / introbackgroundSprite.height
        )
        this.add(introbackgroundActor)

        // Add background image (museum)
        const museumSprite = Resources.Museum.toSprite()
        const museumActor = new Actor({
            pos: new Vector(640, 360),
            width: museumSprite.width,
            height: museumSprite.height
        })
        museumActor.graphics.use(museumSprite)
        this.add(museumActor)

        // Add Start button (right side, above quit)
        this._startButton = new StartButton(
            new Vector(1100, 350),
            () => this.handleStart()
        )
        const startLabel = new Label({
            text: "press S to start",
            pos: new Vector(-175, 110),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
        })
        this._startButton.addChild(startLabel)
        this.add(this._startButton)

        // Add Quit button (right side, below start)
        this._quitButton = new QuitButton(
            new Vector(1050, 500),
            () => this.handleQuit()
        )
        const quitLabel = new Label({
            text: "press Q to quit",
            pos: new Vector(-100, 85),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
        })
        this._quitButton.addChild(quitLabel)
        this.add(this._quitButton)

        // Add a label above the buttons
        this.label = new Label({
            text: "Storyge",
            pos: new Vector(900, 250),
            font: Resources.PressStart2P.toFont({ size: 40 }),
            color: Color.White,
        })
        this.add(this.label)

        // Keyboard event handling for S and Q
        this._keyHandler = (evt) => {
            if (evt.key === 'KeyS') {
                this.handleStart();
            }
            if (evt.key === 'KeyQ') {
                this.handleQuit();
            }
        }
        this._engine.input.keyboard.on('press', this._keyHandler);
        setTimeout(() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                canvas.focus();
            }
        }, 500);
    }

    onDeactivate() {
        // Remove keyboard event handler when scene is deactivated
        if (this._engine && this._keyHandler) {
            this._engine.input.keyboard.off('press', this._keyHandler)
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

    }
}

// code is tot hier gemaakt door charge