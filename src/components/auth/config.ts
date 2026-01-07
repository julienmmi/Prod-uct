import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "~/server/db";
import { env } from "~/env"; // ⬅️ Importer env

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      avatarId?: string;
      teamId?: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,        // ⬅️ Utiliser env validé
      clientSecret: env.AUTH_GOOGLE_SECRET, // ⬅️ Utiliser env validé
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        avatarId: user.avatarId,
        teamId: user.teamId,
      },
    }),
  },
} satisfies NextAuthConfig;
```

---

## 🗄️ STRUCTURE FICHIERS ENV
```
PROD-UCT/
├── .env                 # ✅ Variables locales (gitignored)
├── .env.example         # ✅ Template pour la doc
├── .gitignore           # ✅ Doit contenir .env
└── src/
    └── env.js           # ✅ Validation avec zod