import {Router, Request, Response } from 'express';
import Character = require('../../models/mongo/character/Character');
import CharacterService from '../../services/character.service';
import Alignment from '../../models/mongo/character/Alignment';

const characterService = new CharacterService();

const router: Router = Router();

router.get('/:characterID', (req: Request, res: Response) => {
    let characterID: number = req.params.characterID;
    res.send(`${characterID}`);
});

router.get('/', (req: Request, res: Response) => {
    let character = new Character();
    let alignment = new Alignment.model();
    alignment.name = "asdf";
    alignment.description = "fasdfas;jdlfkjasd;f";
    character.alignment = alignment;
    character.save();
    characterService.findAll().then(characters => res.send(characters));
    // res.send(characterService.findAll());
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
    res.send(newCharacter)
})

router.delete('/', (req: Request, res: Response) => {
    characterService.deleteAll();
    res.send("success");
})

export const CharacterController: Router = router;