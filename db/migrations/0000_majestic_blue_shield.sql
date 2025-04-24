CREATE TYPE "public"."source" AS ENUM('google', 'social_media', 'friend', 'blog', 'event', 'other');--> statement-breakpoint
CREATE TYPE "public"."waitlist_status" AS ENUM('pending', 'confirmed', 'notified');--> statement-breakpoint
CREATE TABLE "waitlist" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"company" varchar(255),
	"message" text,
	"source" "source" DEFAULT 'other',
	"status" "waitlist_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "waitlist_email_unique" UNIQUE("email")
);
