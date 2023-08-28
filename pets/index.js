import { addPet, editPet, deletePet } from "./mutations/pets.mutations";
import { listPets, getPet } from "./queries/pets.queries";

export const typeDefs = ` type Pet {
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }
  
  input PetToEdit{
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }
  input PetToAdd{
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }
  type query {
    pets:[Pet],
    pet(id: ID!): Pet
  }
  
  #MUTATIONS
  type Mutation {
    addPet (petToAdd: PetToAdd!):Pet,
    editPet (petToEdit: PetToEdit!):Pet,
    deletePet (id: ID!): [Pet]
  }
  
  `;
export const resolvers = {
  Query: {
    pets: () => listPets(),
    pet: (_, { id }) => getPet(id),
  },
  Mutation: {
    addPet: (_, { petToAdd }) => addPet(petToAdd),
    editPet: (_, { petToEdit }) => editPet(petToEdit),
    deletePet: (_, { id }) => deletePet(id),
  },
};
