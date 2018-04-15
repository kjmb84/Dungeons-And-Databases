import { CharacterController } from './routes/character.controller';
import {Router, Request, Response } from 'express';

const router: Router = Router();

router.use('/character', CharacterController);

// router.use('/items', ItemController);
// router.use('/spells', SpellController);

export const ApiController: Router = router;