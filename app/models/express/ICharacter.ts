import DeathSaves from './deathSaves';

interface ICharacter {
    age: number;
    currency: number;
    currentHP: number;
    deathSaves: DeathSaves;
    experience: number;
    height: number;
    HP: number;
    name: string;
    speed: number;
    temporaryHP: number;
    vision: number;
    weight: number;
}

export = ICharacter;