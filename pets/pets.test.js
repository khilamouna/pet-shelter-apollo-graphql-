import request from "supertest";

const graphQLEndpoint = "http://localhost:4000/";

describe("Get all pets", () => {
  const postData = {
    query: `query Pets {
            pets {
                id
                name
                type
                age
                breed
            }
        }`,
  };

  test("returns all pets", async () => {
    try {
      const response = await request(graphQLEndpoint)
        .post("?")
        .send(postData)
        .expect(200);

      const res = JSON.parse(response.text);

      expect(res.data.pets).toEqual([
        {
          id: "1",
          name: "Rex",
          type: "dog",
          age: 3,
          breed: "labrador",
        },
        {
          id: "2",
          name: "Fido",
          type: "dog",
          age: 1,
          breed: "poodle",
        },
        {
          id: "3",
          name: "Mittens",
          type: "cat",
          age: 2,
          breed: "tabby",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  });
});

describe("Get pet detail", () => {
  const postData = {
    query: `query Pet {
            pet(id: 1) {
                id
                name
                type
                age
                breed
            }
        }`,
  };

  test("Return pet detail information", async () => {
    request(graphQLEndpoint)
      .post("?")
      .send(postData)
      .expect(200)
      .end((error, response) => {
        if (error) console.error(error);

        const res = JSON.parse(response.text);

        expect(res.data.pet).toEqual({
          id: "1",
          name: "Rex",
          type: "dog",
          age: 3,
          breed: "labrador",
        });
      });
  });
});

describe("Edit pet", () => {
  const postData = {
    query: `mutation EditPet($petToEdit: PetToEdit!) {
            editPet(petToEdit: $petToEdit) {
                id
                name
                type
                age
                breed
            }
        }`,
    variables: {
      petToEdit: {
        id: 1,
        name: "Rexo",
        type: "dogo",
        age: 4,
        breed: "doberman",
      },
    },
  };

  test("Updates pet and returns it", async () => {
    try {
      const response = await request(graphQLEndpoint)
        .post("?")
        .send(postData)
        .expect(200);

      const res = JSON.parse(response.text);

      expect(res.data.editPet).toEqual({
        id: "1",
        name: "Rexo",
        type: "dogo",
        age: 4,
        breed: "doberman",
      });
    } catch (error) {
      console.error(error);
    }
  });
});

describe("Add pet", () => {
  const postData = {
    query: `mutation AddPet($petToAdd: PetToAdd!) {
            addPet(petToAdd: $petToAdd) {
                id
                name
                type
                age
                breed
            }
        }`,
    variables: {
      petToAdd: {
        name: "Salame",
        type: "cat",
        age: 6,
        breed: "pinky",
      },
    },
  };

  test("Adds new pet and returns the added item", async () => {
    try {
      const response = await request(graphQLEndpoint)
        .post("?")
        .send(postData)
        .expect(200);

      const res = JSON.parse(response.text);

      expect(res.data.addPet).toEqual({
        id: "5",
        name: "Salame",
        type: "cat",
        age: 6,
        breed: "pinky",
      });
    } catch (error) {
      console.error(error);
    }
  });
});

describe("Delete pet", () => {
  const postData = {
    query: `mutation DeletePet {
            deletePet(id: 2) {
                id
                name
                type
                age
                breed
            }
        }`,
  };

  test("Deletes given pet and returns deleted pet details", async () => {
    try {
      const response = await request(graphQLEndpoint)
        .post("?")
        .send(postData)
        .expect(200);

      const res = JSON.parse(response.text);

      // Adjust the expectation to match the response structure
      expect(res.data.deletePet).toEqual({
        id: "2",
        name: "Fido",
        type: "dog",
        age: 1,
        breed: "poodle",
      });
    } catch (error) {
      console.error(error);
    }
  });
});
