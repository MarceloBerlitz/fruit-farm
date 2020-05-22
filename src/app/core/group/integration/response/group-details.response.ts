import { GroupDetailsTreeResponse } from './group-details-tree.response';
import { GroupDetailsCropResponse } from './group-details-crop.response';

export class GroupDetailsResponse {
    constructor(
    public _id: string,
    public description: string,
    public name: string,
    public trees: GroupDetailsTreeResponse[],
    public crops: GroupDetailsCropResponse[]
    ) {}
}