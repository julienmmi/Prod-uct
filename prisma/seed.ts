import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Seed avatars
  const avatars = [
    { id: "avatar_1", url: "/avatars/avatar_1.svg", name: "Avatar 1" },
    { id: "avatar_2", url: "/avatars/avatar_2.svg", name: "Avatar 2" },
    { id: "avatar_3", url: "/avatars/avatar_3.svg", name: "Avatar 3" },
  ];

  for (const avatar of avatars) {
    await prisma.avatar.upsert({
      where: { id: avatar.id },
      update: {},
      create: avatar,
    });
  }

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
