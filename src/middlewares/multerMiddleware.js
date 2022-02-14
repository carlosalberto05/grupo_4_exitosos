const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/avatars"));
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img_${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({
  fileFilter: (req, file, cb) => {
    let acceptedExtensions = [".jpg", ".png", ".jpeg"];

    if (!file) {
      req.fileValidationError = "Tienes que subir una imagen";
      return cb(null, false, req.fileValidationError);
    } else {
      let fileExtension = path.extname(file.originalname);
      req.fileValidationError = `Las extensiones permitidas son ${acceptedExtensions.join(
        ", "
      )} `;
      if (!acceptedExtensions.includes(fileExtension)) {
        return cb(null, false, req.fileValidationError);
      }
    }

    return cb(null, true);
  },
  storage,
});

module.exports = uploadFile;
