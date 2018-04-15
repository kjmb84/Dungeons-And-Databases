import {Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/:characterID', (req: Request, res: Response) => {
    let characterID: number = req.params.characterID;
    res.send(`${characterID}`);
});

export const CharacterController: Router = router;