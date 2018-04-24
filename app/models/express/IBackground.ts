import IAttribute from "./IAttribute";
import ILanguage from "./ILanguage";

export default interface IBackground {
    name: string;
    description: string;
    attributes: [IAttribute];
    languages: [ILanguage];
}