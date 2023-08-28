import { getItem, listItem } from "../models/pets.models";
export const getPet = (id) => {
  try {
    const resp = getItem(id);
    return resp;
  } catch (error) {
    return error.message;
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
