import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div className="mt-12 grid grid-cols-2 gap-4">
      {users.map((user) => (
        <div key={user.id}>
          <Card>
            <CardHeader>
              <CardTitle>{user.email}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={user.image || ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardDescription>{user.name}</CardDescription>
                <CardDescription>{user.id}</CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <p>{user.createdAt.toDateString()}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
