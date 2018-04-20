import Character = require('../models/mongo/Character');
import ICharacter = require('../models/express/ICharacter');

export default class CharacterService {
    
    create(character: ICharacter): boolean {

        character.save();
        return true;
    }
    
    update(id: string, character: ICharacter): boolean {
        Character.findOneAndUpdate({"id": id}, character)
        return true;
    }
}

// export = CharacterService;