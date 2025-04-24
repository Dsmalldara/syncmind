import { db } from "@/db"
import { waitlist, type NewWaitlist } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function addToWaitlist(data: NewWaitlist) {
  try {
    const result = await db.insert(waitlist).values(data).returning()
    return { success: true, data: result[0] }
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return { success: false, error }
  }
}

export async function getWaitlistEntries(status?: "pending" | "confirmed" | "notified") {
  try {
    if (status) {
      return await db.select().from(waitlist).where(eq(waitlist.status, status))
    }
    return await db.select().from(waitlist)
  } catch (error) {
    console.error("Error fetching waitlist entries:", error)
    throw error
  }
}

export async function updateWaitlistStatus(id: number, status: "pending" | "confirmed" | "notified") {
  try {
    const result = await db
      .update(waitlist)
      .set({
        status,
        updatedAt: new Date(),
      })
      .where(eq(waitlist.id, id))
      .returning()

    return { success: true, data: result[0] }
  } catch (error) {
    console.error("Error updating waitlist status:", error)
    return { success: false, error }
  }
}

export async function deleteWaitlistEntry(id: number) {
  try {
    await db.delete(waitlist).where(eq(waitlist.id, id))
    return { success: true }
  } catch (error) {
    console.error("Error deleting waitlist entry:", error)
    return { success: false, error }
  }
}
