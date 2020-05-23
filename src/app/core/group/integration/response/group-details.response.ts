export class GroupDetailsResponse {
    constructor(
    public _id: string,
    public description: string,
    public name: string,
    public trees: string[],
    ) {}
}