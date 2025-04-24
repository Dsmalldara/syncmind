import { pgTable, serial, varchar, text, timestamp, pgEnum } from "drizzle-orm/pg-core"

// Define the status enum
export const waitlistStatusEnum = pgEnum("waitlist_status", ["pending", "confirmed", "notified"])

// Define the source enum (common sources where users might hear about the service)
export const sourceEnum = pgEnum("source", ["google", "social_media", "friend", "blog", "event", "other"])

// Define the waitlist table
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  message: text("message"),
  source: sourceEnum("source").default("other"),
  status: waitlistStatusEnum("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// Define TypeScript types based on the schema
export type Waitlist = typeof waitlist.$inferSelect
export type NewWaitlist = typeof waitlist.$inferInsert
