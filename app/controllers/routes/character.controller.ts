import {Router, Request, Response } from 'express';
import Character = require('../../models/mongo/Character');
// import characterService from '../../services/character.service';
import CharacterService from '../../services/character.service';

const characterService = new CharacterService();

const router: Router = Router();

router.get('/:characterID', (req: Request, res: Response) => {
    let characterID: number = req.params.characterID;
    res.send(`${characterID}`);
});

router.put('/:characterID', (req: Request, res: Response) => {
    let characterID = req.params.characterID;
    let characterUpdateJson = req.body.character;
    let characterUpdate: Character = Character.hydrate(characterUpdateJson);
    characterService.update(characterID, characterUpdate);
    res.send({"a": characterUpdate});
});

router.post('/', (req: Request, res: Response) => {
    let newCharacterJson = req.body.character;
    let newCharacter: Character = new Character(newCharacterJson);
    characterService.create(newCharacter);
    res.send("we've made it this far");
})

router.delete('/', (req: Request, res: Response) => {
    characterService.deleteAll();
    res.send("success");
})

export const CharacterController: Router = router;