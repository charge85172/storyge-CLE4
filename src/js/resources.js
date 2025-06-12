import { ImageSource, Loader } from "excalibur"

const Resources = {
    Background: new ImageSource('background.png'),
    Museum: new ImageSource('intro.png'),
    Quit: new ImageSource('quitbutton.png'),
    Start: new ImageSource('startbutton.png'),
    Plant: new ImageSource('plant.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }
