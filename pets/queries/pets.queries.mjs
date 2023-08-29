import { getItem, listItem } from "../models/pets.models.mjs";
export const getPet = (id) => {
  try {
    const resp = getItem(id);
    return resp;
  } catch (error) {
    return error;
  }
};
export const listPets = () => {
  try {
    const resp = listItem();
    return resp;
  } catch (error) {
    return error;
  }
};
