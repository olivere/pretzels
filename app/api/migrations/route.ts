import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const client = await db.connect();

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await client.sql`CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );`;
    await client.sql`INSERT INTO products (name) VALUES ('Apple iPhone 14');`;
    await client.sql`INSERT INTO products (name) VALUES ('Apple iPhone 14 Pro');`;
    await client.sql`INSERT INTO products (name) VALUES ('Apple MacBook Pro 16"');`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await client.sql`SELECT * FROM products;`;
  return NextResponse.json({ products });
}
