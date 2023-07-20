/// <reference types="multer" />
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    create(file: Express.Multer.File): {
        url: string;
    };
    delete(filename: string): {
        msg: string;
    };
}
