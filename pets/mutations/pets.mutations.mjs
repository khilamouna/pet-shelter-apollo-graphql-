import { editItem, addItem } from "../models/pets.models.mjs";
export const addPet = (petToAdd) => {
  try {
    const resp = addItem(petToAdd);

    return resp;
  } catch (error) {
    return error;
  }
};
export const editPet = (petToEdit) => {
  try {
    const resp = editItem(petToEdit?.id, petToEdit);
    return resp;
  } catch (error) {
    return error.message;
  }
};
export const deletePet = (id) => {
  try {
    const resp = deleteItem(id);
    return resp;
  } catch (error) {
    return error;
  }
};
