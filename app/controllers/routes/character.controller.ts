import {Router, Request, Response } from 'express';
import Character from '../../models/mongo/character.schema';

const router: Router = Router();

router.get('/:characterID', (req: Request, res: Response) => {
    let characterID: number = req.params.characterID;
    res.send(`${characterID}`);
});

router.post('/:characterID', (req: Request, res: Response) => {
    let characterID: number = req.params.characterID;
    console.log(req.body.character);
    res.send(req.body.character);
});

export const CharacterController: Router = router;