import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Users({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return (
    <div className="mt-8 h-screen">
      <Link href="/user">
        <Button className="flex items-center gap-2 cursor-pointer">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <Card className="mt-10">
        <CardContent className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardDescription>{user?.email}</CardDescription>
            <CardDescription>{user?.createdAt.toDateString()}</CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
