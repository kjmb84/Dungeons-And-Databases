import IAbility from './IAbility';
import IAlignment from './IAlignment';
import IBackground from './IBackground';
import IDeathSaves from './IDeathSaves';
import IFeat from './IFeat';
import ISkill from './ISkill';

export default interface ICharacter {
    abilities: [IAbility];
    age: number;
    alignment: IAlignment;
    background: IBackground;
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