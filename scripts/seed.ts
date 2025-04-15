// This script is used to seed the database with fake data
import seedCustomers from "../db/data/customer_seeder.ts";

// Number of customers to seed (can be overridden by command line argument)
const DEFAULT_COUNT = 25;

async function main() {
  try {
    // Check if a count was provided as a command line argument
    const count = process.argv[2] ? parseInt(process.argv[2], 10) : DEFAULT_COUNT;

    console.log(`Starting database seeding with ${count} fake customers...`);

    // Seed the database with customers
    await seedCustomers(count);

    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Database seeding failed:", error);
    process.exit(1);
  }
}

// Run the main function
main();
