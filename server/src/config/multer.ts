import { Request, Express } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  filename: (request, file, callback) => {
    const hash = crypto.randomBytes(6).toString('hex');

    const filename = `${hash}-${file.originalname}`;

    callback(null, filename);
  },
});

function filterFile(
  request: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
) {
  var ext = path.extname(file.originalname);

  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
    return callback(
      new Error('Only images with .png, .jpg and .jpeg are allowed')
    );
  }

  callback(null, true);
}

export default {
  storage: storage,
  fileFilter: filterFile,
};
