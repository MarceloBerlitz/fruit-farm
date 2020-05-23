import { CropListTreeResponse } from './crop-list-tree.response';

export class CropListResponse {
    constructor(
        public info: string[],
        public _id: string,
        public date: string,
        public grossWeight: number,
        public tree: CropListTreeResponse
    ) {}
}