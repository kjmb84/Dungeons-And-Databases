import {Router, Request, Response } from 'express';
import Character = require('../../models/mongo/Character');

const router: Router = Router();

router.get('/:characterID', (req: Request, res: Response) => {
    let characterID: number = req.params.characterID;
    res.send(`${characterID}`);
});

router.post('/:characterID', (req: Request, res: Response) => {
    let characterID = req.params.characterID;
    let character = new Character(req.body.character);
    console.log(character);
    let result = character.save();
    res.send({"a": character, "b": result});
});

export const CharacterController: Router = router;