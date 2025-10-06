// import { 
//   type User, 
//   type InsertUser,
//   type ContactSubmission,
//   type InsertContactSubmission
// } from "@shared/schema";
// import { randomUUID } from "crypto";

// export interface IStorage {
//   getUser(id: string): Promise<User | undefined>;
//   getUserByUsername(username: string): Promise<User | undefined>;
//   createUser(user: InsertUser): Promise<User>;
//   createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
//   updateContactSubmission(id: string, updates: Partial<ContactSubmission>): Promise<ContactSubmission | undefined>;
// }

// export class MemStorage implements IStorage {
//   private users: Map<string, User>;
//   private contactSubmissions: Map<string, ContactSubmission>;

//   constructor() {
//     this.users = new Map();
//     this.contactSubmissions = new Map();
//   }

//   async getUser(id: string): Promise<User | undefined> {
//     return this.users.get(id);
//   }

//   async getUserByUsername(username: string): Promise<User | undefined> {
//     return Array.from(this.users.values()).find(
//       (user) => user.username === username,
//     );
//   }

//   async createUser(insertUser: InsertUser): Promise<User> {
//     const id = randomUUID();
//     const user: User = { ...insertUser, id };
//     this.users.set(id, user);
//     return user;
//   }

//   async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
//     const id = randomUUID();
//     const submission: ContactSubmission = {
//       id,
//       name: insertSubmission.name,
//       email: insertSubmission.email,
//       company: insertSubmission.company ?? null,
//       helpWith: insertSubmission.helpWith,
//       message: insertSubmission.message ?? null,
//       aiCategory: insertSubmission.aiCategory ?? null,
//       aiPriority: insertSubmission.aiPriority ?? null,
//       aiResponse: insertSubmission.aiResponse ?? null,
//       submittedAt: new Date(),
//     };
//     this.contactSubmissions.set(id, submission);
//     return submission;
//   }

//   async updateContactSubmission(id: string, updates: Partial<ContactSubmission>): Promise<ContactSubmission | undefined> {
//     const existing = this.contactSubmissions.get(id);
//     if (!existing) return undefined;
    
//     const updated = { ...existing, ...updates };
//     this.contactSubmissions.set(id, updated);
//     return updated;
//   }
// }

// export const storage = new MemStorage();
