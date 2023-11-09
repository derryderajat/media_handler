const router = require("express").Router();

const {
  storageImage,
  storageVideo,
  storageFile,
} = require("../controllers/media.controllers");
const storage = require("../libs/multer");

router.post("/images", storage.image.single("image"), storageImage);
router.post("/videos", storage.video.single("video"), storageVideo);
router.post("/files", storage.file.single("file"), storageFile);

module.exports = router;
