import { CropDetailsTreeResponse } from './crop-details-tree.response';

export class CropDetailsResponse {
    constructor(
        public info: string[],
        public _id: string,
        public date: string,
        public grossWeight: number,
        public tree: CropDetailsTreeResponse
    ) {}
}