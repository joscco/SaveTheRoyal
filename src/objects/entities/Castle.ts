import {GridEntity} from "../GridEntity";
import {EntityName} from "../EntityData";
import Image = Phaser.GameObjects.Image;
import {Knight} from "./Knight";

export class Castle extends GridEntity {

    castleImage: Image

    createEntityContainer(): Phaser.GameObjects.Container {
        this.castleImage = this.scene.add.image(0, -50, "entities.castle")
        return this.scene.add.container(0, 0, [this.castleImage]);
    }

    getName(): EntityName {
        return "castle";
    }

}