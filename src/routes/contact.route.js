import express from "express";
import { ajouterContact, recupererToutContacts, recupererContactParID, modifierContactParID, supprimerContactParID } from "../controllers/contact.controller.js";

const router = express.Router();
router.post('/add', ajouterContact);
router.get('/all', recupererToutContacts);
router.get('/:id', recupererContactParID);
router.put('/update/:id', modifierContactParID);
router.delete('/delete/:id', supprimerContactParID);

export default router;