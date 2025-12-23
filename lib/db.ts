/// <reference types="@cloudflare/workers-types" />
import { drizzle } from 'drizzle-orm/d1';
export const runtime = 'edge';

// We will bind this to 'DB' in Cloudflare Pages
// For local dev, we need a slight workaround or just use `wrangler dev`
// But for now, we assume the standard Cloudflare Worker/Pages environment

export interface Env {
    DB: D1Database;
}

// Helper to get DB context (safe for local dev)
export const getDb = async () => {
    // @ts-ignore - Cloudflare Pages binding
    const dbBinding = process.env.DB as D1Database;

    if (!dbBinding) {
        console.warn("WARN: D1 Binding not found. Using Mock Data for Local Dev.");
        // Return a mock object or handle it. 
        // For simplicity, we will throw or return null and handle in components?
        // Better: Use a reliable check.
        return null;
    }
    return drizzle(dbBinding);
}
