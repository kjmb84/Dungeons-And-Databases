import Character = require('../models/mongo/Character');

export default class CharacterService {
    
    create(character: Character): boolean {
        character.save().catch(e => console.log(e));
        return true;
    }

    find(id: number): Promise<Character> {
        let character: Character;
        return Character.findOne({id: id})
            .exec()
            .then(foundCharacter =>foundCharacter || new Character());
    }

    findAll(): Promise<Character[]> {
        return Character.find({}).exec().then(characters => characters);
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