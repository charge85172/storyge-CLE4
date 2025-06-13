import { Scene, Label, Font, Color, Vector, Actor } from "excalibur"
import { Resources } from "../resources.js"

export class LoadingScreen extends Scene {
    constructor() {
        super()
    }

    onActivate() {
        console.log("LoadingScreen activated")
        // Show video, hide canvas
        const video = document.getElementById("loading-video")
        const canvas = document.querySelector("canvas")
        if (video && canvas) {
            video.style.display = "block"
            video.play()
            canvas.style.display = "none"
        }
    }
    onDeactivate() {
        // Hide video, show canvas
        const video = document.getElementById("loading-video")
        const canvas = document.querySelector("canvas")
        if (video && canvas) {
            video.pause()
            video.style.display = "none"
            canvas.style.display = "block"
        }
    }
}
