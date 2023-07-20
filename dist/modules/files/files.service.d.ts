/// <reference types="multer" />
export declare class FilesService {
    create(file: Express.Multer.File): {
        url: string;
    };
    delete(__filename: string): {
        msg: string;
    };
}
