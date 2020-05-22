export class GroupListResponse {
    constructor(
    public trees: string[],
    public _id: string,
    public description: string,
    public name: string,
    public __v: number) {}
}