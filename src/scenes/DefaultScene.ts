import * as Phaser from "phaser";

export class DefaultScene extends Phaser.Scene {
    preload(): void {
        this.load.image('logo', 'assets/logo.png');
    }

    create(): void {
        var logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}