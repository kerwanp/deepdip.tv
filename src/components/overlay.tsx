"use client";

import config from "@/config";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useSettings } from "@/providers/settings.provider";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const Overlay = () => {
  const { languages, setLanguages, streamers, setStreamers } = useSettings();

  const { register, watch } = useForm({
    defaultValues: {
      languages,
      streamers,
    },
    mode: "onChange",
  });

  const languagesWatcher = watch("languages");
  const streamersWatcher = watch("streamers");

  useEffect(() => {
    setLanguages(languagesWatcher);
  }, [languagesWatcher, setLanguages]);

  useEffect(() => {
    setStreamers(streamersWatcher);
  }, [streamersWatcher, setStreamers]);

  return (
    <div className="w-screen fixed top-0 left-0 flex justify-end items-center p-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Settings</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
          <form className="py-8 flex flex-col gap-y-6">
            <div>
              <div className="font-lg font-bold mb-3">Languages</div>
              <div className="flex flex-col gap-y-2">
                {config.languages.map((language, i) => (
                  <div
                    key={language.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      id={language.id}
                      className="cursor-pointer peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      type="checkbox"
                      {...register("languages")}
                      value={language.id}
                    />
                    <Label htmlFor={language.id}>{language.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-lg font-bold mb-3">Streamers</div>
              <div className="flex flex-col gap-y-2">
                {config.streamers.map((streamer) => (
                  <div
                    key={streamer.twitch}
                    className="flex items-center space-x-2"
                  >
                    <input
                      id={streamer.twitch}
                      className="cursor-pointer peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      type="checkbox"
                      {...register("streamers")}
                      value={streamer.twitch}
                    />
                    <Label htmlFor={streamer.twitch}>
                      {streamer.displayName}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};
