import Character = require('../models/mongo/Character');
import ICharacter = require('../models/express/ICharacter');

export default class CharacterService {
    
    create(character: Character): boolean {
        character.save().catch(e => console.log(e));
        return true;
    }

    find(id: number): Character {

        // return Character.find({id: id});
    }

    findAll(): Character[] {
        // return Character.find({});
    }
    
    update(id: string, Icharacter: ICharacter): boolean {
        let character = new Character(Icharacter);
        Character.findOneAndUpdate({"id": id}, character);
        return true;
    }

    deleteAll(): boolean {
        Character.remove({}, () => {});
        return true;
    }
}

// export = CharacterService;