import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const universities = sqliteTable('universities', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    country: text('country').notNull(),
    ranking: integer('ranking'),
    imageUrl: text('image_url'),
    description: text('description'),
    courses: text('courses'), // Stored as JSON string or comma-separated
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const leads = sqliteTable('leads', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    fullName: text('full_name').notNull(),
    email: text('email').notNull(),
    phone: text('phone'),
    message: text('message'),
    status: text('status').default('new'), // new, contacted, archived
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const applications = sqliteTable('applications', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    fullName: text('full_name').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    dateOfBirth: text('date_of_birth'),
    city: text('city'),
    highestEducation: text('highest_education'),
    targetCountry: text('target_country'),
    preferredUniversity: text('preferred_university'),
    preferredCourse: text('preferred_course'),
    status: text('status').default('submitted'),
    resumeUrl: text('resume_url'),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});
