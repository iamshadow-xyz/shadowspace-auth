"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto p-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center gap-3">
          <Image src="/logo.png" alt="Shadowspace" width={50} height={50} />
          Shadowspace
        </Link>
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <p className="hidden md:block">{session.user?.email}</p>
              <div className="mr-10">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={session.user?.image || ""} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/settings"}>Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          ) : (
            <Dialog>
              <DialogTrigger className="bg-white text-black cursor-pointer px-3 py-1.5 rounded-sm">
                Sign In
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Continue with Google or Github?</DialogTitle>
                  <DialogDescription>
                    The magic links and passwordless login is coming soon
                  </DialogDescription>
                </DialogHeader>
                <Button
                  className="cursor-pointer"
                  onClick={() => signIn("google")}
                >
                  <FcGoogle /> Continue with Google
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() => signIn("github")}
                >
                  <FaGithub /> Continue with Github
                </Button>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
}
