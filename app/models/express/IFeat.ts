export default interface IFeat {
    name: string;
    description: string;
    perks: [string];
    attributes: [{
        name: string,
        modifier: number
    }]
}