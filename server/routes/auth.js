import express from "express";
import { showMessage, register, login } from "../controllers/auth";

const router = express.Router();

router.get("/:message", showMessage);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
