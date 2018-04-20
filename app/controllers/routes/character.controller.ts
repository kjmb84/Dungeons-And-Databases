import {Router, Request, Response } from 'express';
import Character = require('../../models/mongo/Character');
import ICharacter = require ('../../models/express/ICharacter');
import characterService from '../../services/character.service';

const router: Router = Router();

router.get('/:characterID', (req: Request, res: Response) => {
    let characterID: number = req.params.characterID;
    res.send(`${characterID}`);
});

router.put('/:characterID', (req: Request, res: Response) => {
    let characterID = req.params.characterID;
    let character: ICharacter  = req.body.character;
    characterService.update(characterID, character);
    // let result = character.save();
    res.send({"a": character, "b": result});
});

router.post('/', (req: Request, res: Response) => {
    let characterJson = req.body.character;
    let newCharacter = new Character(characterJson);
    newCharacter.save();
})

router.delete('/', (req: Request, res: Response) => {
    Character.remove({}, () => {});
    res.send("success");
})

export const CharacterController: Router = router;