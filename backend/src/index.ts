import "dotenv/config";

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const app = new Hono();
const prisma = new PrismaClient();

app.get("/urls", async (c) => {
  const urls = await prisma.url.findMany();
  return c.json(urls);
});

app.get("/urls/:slug", async (c) => {
  const { slug } = c.req.param();

  try {
    const url = await prisma.url.update({
      where: {
        slug,
      },
      data: { visits: { increment: 1 } },
    });

    return c.json(url);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return c.json({ error: "URL not found " }, 404);
      }
    }
  }
});

app.post("/urls/create", async (c) => {
  const body = await c.req.json<{ url: string }>();

  const shortenedURL = nanoid(6);
  const createdURL = await prisma.url.create({
    data: {
      originalURL: body.url,
      slug: shortenedURL,
    },
  });

  return c.json({ message: "URL created", ...createdURL });
});

const port = parseInt(process.env.PORT!) || 3001;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
