import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp/my-uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  let filetypes = ["image/jpeg", "image/png", "image/jpg"];

  if (!filetypes.includes(file.mimetype)) {
    cb(new Error("invalid extension"));
  }

  cb(null, true);
}

const upload = multer({ storage, fileFilter }).single("image");

export default upload
