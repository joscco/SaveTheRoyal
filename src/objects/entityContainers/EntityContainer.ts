import Container = Phaser.GameObjects.Container;
import {Vector2} from "../../general/MathUtils";
import {MainGameScene} from "../../scenes/MainGameScene";

export abstract class EntityContainer extends Container {
    constructor(scene: MainGameScene, x: number, y: number) {
        super(scene, x, y);
    }

    async blendIn() {
        await this.tweenScale(1)
    }

    async blendOut() {
        await this.tweenScale(0)
    }

    private async tweenScale(scale: number) {
        return new Promise<void>(resolve => this.scene.tweens.add({
            targets: this,
            duration: 300,
            scaleX: scale,
            scaleY: scale,
            ease: Phaser.Math.Easing.Quadratic.InOut,
            onComplete: () => resolve()
        }))
    }

    async tweenMove(pos: Vector2) {
        return new Promise<void>(resolve => this.scene.tweens.add({
            targets: this,
            duration: 300,
            x: pos.x,
            y: pos.y,
            ease: Phaser.Math.Easing.Quadratic.InOut,
            onComplete: () => resolve()
        }))
    }

    async rotate(degrees: number) {
        return new Promise<void>((resolve) => this.scene.tweens.add({
            targets: this,
            angle: degrees,
            duration: 400,
            ease: Phaser.Math.Easing.Sine.Out,
            onComplete: () => resolve()
        }))
    }
}