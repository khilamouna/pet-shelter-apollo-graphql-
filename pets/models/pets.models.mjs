import db from "../../db/db.mjs";
export const getItem = (id) => {
  try {
    const pet = db?.pets?.filter((pet) => pet?.id === parseInt(id))[0];
    return pet;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
export const listItem = () => {
  try {
    return db?.pets;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
export const editItem = (id, data) => {
  try {
    const index = db.pets.findIndex((pet) => pet.id === parseInt(id));

    if (index === -1) throw new Error("pet not found");
    else {
      data.id = parseInt(data.id);
      db.pets[index] = data;
      return db.pets[index];
    }
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
export const addItem = (data) => {
  try {
    const newPet = { id: db.pets.length + 1, ...data };
    db.pets.push(newPet);
    return newPet;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
export const deleteItem = (id) => {
  try {
    const index = db.pets.findIndex((pet) => pet.id === parseInt(id));
    if (index === -1) throw new Error("Pet not found");
    else {
      db.pets.splice(index, 1);
      return db.pets;
    }
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
