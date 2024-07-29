import { UserContactAssociation } from "../../models/PostgreSQL/associations.js";
import ContactsModel from "../../models/PostgreSQL/contacts.model.js";
import UserModel from "../../models/PostgreSQL/users.model.js";
import * as ResponseHelper from "../../utils/response.helpers.js";

UserContactAssociation();

export const AddContact = async (req, res) => {
  try {
    const result = await ContactsModel.create(req.body);
    ResponseHelper.Created(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const LinkContact = async (req, res) => {
  try {
    const { userId, contactId } = req.body;

    const user = await UserModel.findByPk(userId);
    if (!user) {
      return ResponseHelper.ServerFailure(res, "User not found");
    }

    const contact = await ContactsModel.findByPk(contactId);
    if (!contact) {
      return ResponseHelper.ServerFailure(res, "Contact not found");
    }

    // use of special methods
    await user.addContacts(contact);
    // await user.removeContacts(contact);

    ResponseHelper.Created(res);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};

export const RemoveContact = async (req, res) => {
  try {
    const { contactId } = req.body;

    const contact = await ContactsModel.findOne({ id: contactId });
    if (!contact) {
      return ResponseHelper.ServerFailure(res, "Contact not found");
    }

    const result = await ContactsModel.destroy({ where: { id: contactId } });

    ResponseHelper.Success(res, result);
  } catch (error) {
    ResponseHelper.ServerFailure(res);
  }
};
