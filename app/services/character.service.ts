import Character = require('../models/mongo/Character');
import ICharacter = require('../models/express/ICharacter');

export default class CharacterService {
    
    create(Icharacter: ICharacter): boolean {
        let character = new Character(Icharacter);
        character.save();
        return true;
    }
    
    update(id: string, Icharacter: ICharacter): boolean {
        let character = new Character(Icharacter);
        Character.findOneAndUpdate({"id": id}, character)
        return true;
    }
}

// export = CharacterService;