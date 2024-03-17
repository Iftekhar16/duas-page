import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(req, res) {
  if (!db) {
    db = await open({
      filename: "./database/dua_main.sqlite",
      driver: sqlite3.Database,
    });
  }

  try {
    const categories = await db.all("SELECT * FROM category");
    const subCategories = await db.all("SELECT * FROM sub_category");
    const duas = await db.all("SELECT * FROM dua");

    const result = {
      categories,
      subCategories,
      duas
    };

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    if (db) {
      await db.close();
    }
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}