"use client";

import { TwitchPlayer } from "react-twitch-embed";
import { motion } from "framer-motion";
import Image from "next/image";

export type LiveStreamProps = {
  channel: string;
};

export const LiveStream = ({ channel }: LiveStreamProps) => {
  return (
    <motion.div className="relative" layout>
      <Image
        src="/spinner.svg"
        width={32}
        height={32}
        alt="spinner"
        className="invert absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
      />
      <TwitchPlayer
        channel={channel}
        muted
        height="100%"
        width="100%"
        id={channel}
      />
    </motion.div>
  );
};
