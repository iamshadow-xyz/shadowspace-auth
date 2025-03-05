import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1 className="mt-10 text-2xl font-bold">All Users ({users.length})</h1>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id}>
            <Card>
              <CardContent className="flex items-center gap-4">
                <Link
                  className="flex items-center gap-3"
                  href={`/user/${user.id}`}
                >
                  <Avatar>
                    <AvatarImage src={user.image || ""} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardDescription>{user.email}</CardDescription>
                    <CardDescription>
                      {user.createdAt.toDateString()}
                    </CardDescription>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
