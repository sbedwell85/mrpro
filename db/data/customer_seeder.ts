import { faker } from "@faker-js/faker";
import connectDB from "../connect.js";
import Customer from "../../schemas/customer/Customer.ts";
import { ICustomer } from "../../types/customer/customer.ts";
import { IContact } from "../../types/shared/contact.ts";
import { ILocation } from "../../types/shared/location.ts";

/**
 * Generate a random contact object
 * @returns {IContact} Contact object
 */
function generateContact(): IContact {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    first: firstName,
    last: lastName,
    title: faker.person.jobTitle(),
    cell: faker.phone.number(),
    phone: faker.phone.number(),
    email: faker.internet.email({ firstName, lastName }),
    active: faker.datatype.boolean(0.9), // 90% chance of being active
  };
}

/**
 * Generate a random location object
 * @returns {ILocation} Location object
 */
function generateLocation(): ILocation {
  return {
    name: faker.company.name() + " " + faker.location.buildingNumber(),
    address1: faker.location.streetAddress(),
    address2: faker.helpers.maybe(() => faker.location.secondaryAddress(), { probability: 0.3 }),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    zip: faker.location.zipCode(),
    active: faker.datatype.boolean(0.9), // 90% chance of being active
  };
}

/**
 * Generate a random customer object with contacts and locations
 * @returns {ICustomer} Customer object
 */
function generateCustomer(): Omit<ICustomer, "_id"> {
  // Generate between 1-4 contacts
  const numContacts = faker.number.int({ min: 1, max: 4 });
  const contacts = Array.from({ length: numContacts }, generateContact);

  // Generate between 1-3 locations
  const numLocations = faker.number.int({ min: 1, max: 3 });
  const locations = Array.from({ length: numLocations }, generateLocation);

  return {
    name: faker.company.name(),
    phone: faker.phone.number(),
    active: faker.datatype.boolean(0.9), // 90% chance of being active
    contacts,
    locations,
  };
}

/**
 * Seed the database with fake customer data
 * @param {number} count Number of customers to generate
 */
async function seedCustomers(count = 10) {
  try {
    // Connect to the database
    await connectDB();

    console.log(`Starting to seed ${count} customers...`);

    // Delete existing customers (optional)
    await Customer.deleteMany({});
    console.log("Deleted existing customers");

    // Generate and insert new customers
    const customers = Array.from({ length: count }, generateCustomer);
    const result = await Customer.insertMany(customers);

    console.log(`Successfully seeded ${result.length} customers!`);

    return result;
  } catch (error) {
    console.error("Error seeding customers:", error);
    throw error;
  }
}

// This block is removed as scripts/seed.ts is the main entry point

export default seedCustomers;
