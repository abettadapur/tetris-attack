import * as Phaser from 'phaser';
import { DefaultScene } from "./scenes/DefaultScene";

const config: GameConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1920,
    height: 1080,
    scene: {
        DefaultScene
    }
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
        this.scene.add("DefaultScene", DefaultScene);
        this.scene.start("DefaultScene");
    }
}

window.onload = () => {
    var game = new Game(config);
}