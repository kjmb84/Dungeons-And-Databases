import IDeathSaves from './IDeathSaves';
import IAlignment from './IAlignment';
export default interface ICharacter {
    age: number;
    currency: number;
    currentHP: number;
    experience: number;
    height: number;
    HP: number;
    name: string;
    speed: number;
    temporaryHP: number;
    vision: number;
    weight: number;
    
    // Objects / Arrays
    deathSaves: IDeathSaves;
    personalityTraits: string[];
    alignment: IAlignment;
}