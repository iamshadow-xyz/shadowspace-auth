import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center mt-28 md:mt-40">
      <h1 className="text-4xl md:text-5xl font-bold dark:text-white mt-4">
        Welcome to Shadowspace Auth
      </h1>
      <p className="text-xl md:text-4xl dark:text-gray-400 mt-4">
        A place where I share my thoughts on tech and life
      </p>
      <div className="border py-4 border-dotted mt-8 space-x-4">
        <code className="text-xs md:text-base">
          <p>github.com/iamshadow-xyz/shadowspace-auth.git</p>
        </code>
      </div>
      <div className="mt-8 space-x-4">
        <Button>
          <Link href="/github.com/iamshadow-xyz/">Get Started</Link>
        </Button>
        <Button variant="link">
          <Link href="/github.com/iamshadow-xyz/shadowspace-auth">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
}
