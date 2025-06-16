import { Scene, Label, Font, Color, Vector, Actor } from "excalibur"
import { Resources } from "../resources.js"
import { StartButton } from "../assets/startbutton.js"
import { China } from "./china.js"
import { QuitButton } from "../assets/quitbutton.js"


export class StartScreen extends Scene {
    constructor() {
        super()
    }

    onActivate() {
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
        const startButton = new StartButton(
            new Vector(1100, 350),
            () => this.handleStart()
        )
        this.add(startButton)

        // Add Quit button (right side, below start)
        const quitButton = new QuitButton(
            new Vector(1050, 500),
            () => this.handleQuit()
        )
        this.add(quitButton)

        // Add a label above the buttons
        this.label = new Label({
            text: "Welcome!",
            pos: new Vector(1100, 250),
            font: new Font({
                family: 'Arial',
                size: 60,
                color: Color.Black,
                unit: 'px',
                textAlign: 'center',
                baseAlign: 'middle'
            })
        })
        this.add(this.label)
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