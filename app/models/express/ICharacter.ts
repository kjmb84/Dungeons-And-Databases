import IAbility from './IAbility';
import IAlignment from './IAlignment';
import IDeathSaves from './IDeathSaves';
import IFeat from './IFeat';
import ISkill from './ISkill';

export default interface ICharacter {
    abilities: [IAbility];
    age: number;
    alignment: IAlignment;
    currency: number;
    currentHP: number;
    deathSaves: IDeathSaves;
    experience: number;
    feats: [IFeat];
    height: number;
    HP: number;
    name: string;
    personalityTraits: [string];
    skills: [ISkill];
    speed: number;
    temporaryHP: number;
    vision: number;
    weight: number;
}