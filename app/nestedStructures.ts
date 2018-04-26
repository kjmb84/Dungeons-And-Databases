import mongoose = require('mongoose');
import Character from './models/mongo/Character';
import CharacterService from './services/character.service';
import { isArray } from 'util';

export default class NestedStructures {
    characterService: CharacterService;
    testObj: any = {};

    constructor() {
        this.characterService = CharacterService.Instance;
        this.characterService.find().then(character => {
            this.recursiveAttributeFindFromMongooseDocument(character);
            console.log(this.testObj);
        });
    }

    recursiveAttributeFindFromMongooseDocument(obj: mongoose.Document): string | number {
        for (const key in obj) {
            let newObj: any = (<any>obj)[key];
            if (key === 'attributes') {
                if (Array.isArray(newObj)) {
                    newObj.forEach(modifier => {
                        this.testObj[modifier.name] 
                            = this.testObj[modifier.name] 
                                ? this.testObj[modifier.name] + modifier.modifier 
                                : 0 + modifier.modifier;
                    });
                } else if (typeof newObj === 'object') {
                    console.log(newObj);
                }
            } else if (typeof newObj === 'object') {
                this.recursiveAttributeFindFromMongooseDocument(newObj);
            }
        }
        return 0;
    }
}