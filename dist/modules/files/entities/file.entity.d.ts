import { UserEntity } from 'src/domains/entities/user.entity';
export declare enum FileType {
    PHOTOS = "photos",
    TRASH = "trash"
}
export declare class File {
    id: number;
    filename: string;
    originalName: string;
    size: number;
    mimetype: string;
    user: UserEntity;
    deletedAt?: Date;
}
