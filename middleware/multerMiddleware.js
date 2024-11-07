// Multer is a popular middleware package for handling multipart/form-data in Node.js web applications. 
// It is commonly used for handling file uploads. 
// Multer simplifies the process of accepting and storing files submitted through HTTP requests by providing an easy-to-use API. 
// It integrates seamlessly with Express.js and allows developers to define upload destinations, file size limits, and other configurations.
import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;