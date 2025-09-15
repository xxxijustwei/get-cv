import { LinkIcon } from "lucide-react";
import { Icon } from "../icons";

export const Watermark = () => {
  return (
    <div className="text-secondary-foreground flex-col gap-1 items-center text-sm flex">
      <span className="text-center">This resume is powered by</span>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Icon id="NextJs" className="size-5" />
          <span className="text-accent-foreground">Next.js 15</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon id="TailwindCss" className="size-5" />
          <span className="text-accent-foreground">Tailwind CSS 4.0</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon id="Shadcn" className="size-4" />
          <span className="text-accent-foreground">Shadcn UI</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-muted-foreground">
        <LinkIcon className="size-4" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/xxxijustwei/get-cv"
        >
          https://github.com/xxxijustwei/get-cv
        </a>
      </div>
    </div>
  );
};
