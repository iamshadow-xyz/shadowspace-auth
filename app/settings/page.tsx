import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { handleUpdate } from "./action";

export default async function Settings() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  const userData = await prisma.user.findUnique({
    where: {
      email: user?.email as string,
    },
  });

  return (
    <div className="mt-10">
      <Card className="mt-10">
        <CardContent className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardDescription>{user?.name}</CardDescription>
            <CardDescription>{user?.email}</CardDescription>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-10 max-w-md mx-auto">
        <form action={handleUpdate}>
          <CardContent>
            <Input
              defaultValue={userData?.name || ""}
              className="mt-2"
              id="name"
              name="name"
              placeholder="Name"
            />
            <Button type="submit" className="cursor-pointer mt-4 w-full">
              Submit
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
