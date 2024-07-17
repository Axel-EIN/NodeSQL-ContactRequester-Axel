import { Contact } from "../models/index.js";

export const ajouterContact = async (requete, reponse) => {
  try {
    const nouveauContact = await Contact.create(requete.body);

    reponse.status(201).json(nouveauContact);
  } catch (erreur) {
    console.log(erreur);
    reponse.status(500).json({
      error: "Erreur lors de l'envoi",
      trace: erreur
    })
  }
}

export const recupererToutContacts = async (requete, reponse) => {
  try {
    const allContacts = await Contact.findAll();
    reponse.status(200).json(allContacts);
  } catch {
    reponse.status(500).json({ error: "Erreur lors de la récupération des Contacts." })
  }
}

export const recupererContactParID = async (requete, reponse) => {
  try {
      const id = requete.params.id;
      const contactTrouve = await Contact.findByPk(id)
      reponse.status(200).json(contactTrouve)
  } catch (erreur) {
    reponse.status(500).json({ error: "Error lors de la récupération du contact." })
  }
}

export const modifierContactParID = async (requete, reponse) => {
  try {
      const contactTrouve = await Contact.findByPk(requete.params.id)
      await contactTrouve.update(requete.body);
      return reponse.status(200).json(contactTrouve)
  } catch (erreur) {
      reponse.status(500).json({ error: "Error lors de la récupération ou de l'édition du contact." })
  }
}

export const supprimerContactParID = async (requete, reponse) => {
  try {
      const contactTrouve = await Contact.findByPk(requete.params.id)
      await contactTrouve.destroy();
      reponse.status(200).json("Contact supprimé !")
  } catch (erreur) {
      reponse.status(500).json({ error: "Erreur lors de la récupération ou de la suppression du contact." })
  }
}
