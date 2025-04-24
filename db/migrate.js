/* eslint-disable @typescript-eslint/no-require-imports */
// db/migrate.js
const { drizzle } = require('drizzle-orm/postgres-js');
const { migrate } = require('drizzle-orm/postgres-js/migrator');
const postgres = require('postgres');

// For migrations
const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });

async function main() {
  console.log('Running migrations...');
  
  try {
    const db = drizzle(migrationClient);
    await migrate(db, { migrationsFolder: 'db/migrations' });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await migrationClient.end();
  }
}

main();