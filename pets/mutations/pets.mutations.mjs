import { editItem, addItem } from "../models/pets.models.mjs";

export const addPet = async (petToAdd) => {
  try {
    const resp = await addItem(petToAdd); // Await the Promise
    return resp;
  } catch (err) {
    return err;
  }
};

export const editPet = async (petToEdit) => {
  try {
    const resp = await editItem(petToEdit?.id, petToEdit); // Await the Promise
    return resp;
  } catch (err) {
    return err;
  }
};

export const deletePet = async (id) => {
  try {
    const resp = await deleteItem(id);
    return resp;
  } catch (err) {
    return err;
  }
};
