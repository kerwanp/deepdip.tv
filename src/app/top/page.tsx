import { Metadata } from "next";
import { TopClimber } from "./top-climber";

export const metadata: Metadata = {
  title: "Deep Dip TV - Top climber",
  description: "Follow the current top climber of the Deep Dip 2 tower.",
};

export default function Page() {
  return <TopClimber />;
}
