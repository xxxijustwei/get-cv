"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./ui/button";

export const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button variant="ghost" size="icon" className="size-8" onClick={toggle}>
      <SunIcon className="hidden [html.dark_&]:block !size-6" />
      <MoonIcon className="hidden [html.light_&]:block !size-6" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
