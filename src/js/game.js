import { Engine, DisplayMode, Scene, Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from "./resources.js"
import { StartScreen } from "./scenes/startscreen.js"

export class Game extends Engine {
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 30,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.setupScenes())
        // this.start()
    }

    setupScenes() {
        this.add('start', new StartScreen())
        const gameScene = new Scene()
        // Add background image to game scene
        const bgSprite = Resources.Background.toSprite()
        const bgActor = new Actor({
            pos: new Vector(bgSprite.width / 2, bgSprite.height / 2),
            width: bgSprite.width,
            height: bgSprite.height
        })
        bgActor.graphics.use(bgSprite)
        gameScene.add(bgActor)
        this.add('game', gameScene)
        this.goToScene('start')
        console.log("game boot")

        this.start()
    }

    // startScene() { }

    // Add your game logic to the 'game' scene
}

new Game()
