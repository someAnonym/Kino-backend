import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FilesService {
  create(file: Express.Multer.File) {
    return { url: `/uploads/${file.filename}` };
  }

  // uploads/ was before $

  delete(__filename: string) {
    fs.unlink(`${__filename}`, (error) => {
      if (error) throw new Error('Ошибка при удалении файла');
    });

    return { msg: 'Файл успешно удалён' };
  }
}
