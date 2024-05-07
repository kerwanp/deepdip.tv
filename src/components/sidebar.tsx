"use client";

import { cn } from "@/lib/utils";
import { useStreamers } from "@/providers/streamers.provider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export const Sidebar = () => {
  let { streamers } = useStreamers();
  const pathname = usePathname();

  streamers = streamers.sort((a, b) => b.currentHeight - a.currentHeight);

  return (
    <div className="px-4 py-6 flex flex-col gap-4 w-[300px] max-h-screen">
      <div className="flex justify-center">
        <Image
          src="/logo.png"
          className="invert mb-2"
          width="200"
          height="100"
          alt="Deep Dip 2"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        <div className="overflow-y-auto">
          {streamers.map((s) => (
            <SidebarItem
              key={s.streamer.twitch}
              href={`/${s.streamer.twitch}`}
              aria-selected={pathname === `/${s.streamer.twitch}`}
            >
              <div className="flex-1 flex gap-2 items-center">
                <span
                  className={cn(
                    "inline-block w-4 h-4 rounded-full bg-primary",
                    {
                      "bg-primary group-hover:bg-white group-aria-selected:bg-white":
                        s.online,
                      "bg-destructive": !s.online,
                    },
                  )}
                />
                {s.streamer.displayName}
              </div>
              {s.currentHeight > 0 && (
                <div className="font-normal text-muted-foreground group-hover:text-black group-aria-selected:text-black">
                  {s.currentHeight}M
                </div>
              )}
            </SidebarItem>
          ))}
        </div>
        <SidebarItem
          href="/"
          className="justify-center bg-white/10"
          aria-selected={pathname === "/"}
        >
          Multiplex
        </SidebarItem>
        <SidebarItem
          href="/top"
          className="justify-center bg-white/10"
          aria-selected={pathname === "/top"}
        >
          Top climber
        </SidebarItem>
        <Dialog>
          <DialogTrigger asChild>
            <button className="group flex font-semibold items-center justify-center bg-white/10 gap-2 px-3 py-2 rounded-md transition-all duration-75 hover:bg-primary hover:text-black aria-selected:bg-primary aria-selected:text-black">
              Donate
            </button>
          </DialogTrigger>
          <DialogContent>
            <h3 className="text-xl font-bold text-center mb-6">Donate</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button asChild>
                <a href="https://matcherino.com/tournaments/111501">
                  Donate to Prizepool
                </a>
              </Button>
              <Button asChild>
                <a href="https://www.gofundme.com/f/deep-dip-ii-mappers">
                  Donate to Organizers
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <a
        href="https://twitter.com/PaucotMartin"
        target="_blank"
        className="block text-center"
      >
        Made with ❤ by @PaucotMartin
      </a>
    </div>
  );
};

type SidebarItemProps = ComponentProps<typeof Link>;

const SidebarItem = ({ className, ...props }: SidebarItemProps) => {
  return (
    <MotionLink
      layout
      className={cn(
        "group flex font-semibold items-center gap-2 px-3 py-2 rounded-md transition-all duration-75 hover:bg-primary hover:text-black aria-selected:bg-primary aria-selected:text-black",
        className,
      )}
      {...props}
    />
  );
};

const MotionLink = motion(Link) as any;
