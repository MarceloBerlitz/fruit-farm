export class GroupDetailsCropResponse {
    constructor(
           public info: string[],
           public _id: string,
           public date: string,
           public grossWeight: number,
           public tree: string
    ) {}
}