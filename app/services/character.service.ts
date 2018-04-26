import Character = require('../models/mongo/Character');

export default class CharacterService {

    private static _instance: CharacterService;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
    
    create(character: Character): boolean {
        character.save().catch(e => console.log(e));
        return true;
    }

    find(id?: string): Promise<Character> {
        let character: Character;
        return Character
            // .findOne({_id: id})
            .findOne()
            .lean()
            .exec()
            .then(foundCharacter => foundCharacter || new Character());
    }

    findAll(): Promise<Character[]> {
        return Character
                .find({})
                .exec()
                .then(characters => characters);
    }
    
    update(id: string, character: Character): boolean {
        Character.findOneAndUpdate({"id": id}, character);
        return true;
    }

    deleteAll(): boolean {
        Character.remove({}, () => {});
        return true;
    }
}