import { LinkIcon } from "lucide-react";
import { Icon } from "../icons";

const items = [
  {
    icon: <Icon id="NextJs" className="size-5" />,
    label: "Next.js 15",
  },
  {
    icon: <Icon id="TailwindCss" className="size-5" />,
    label: "Tailwind CSS 4.0",
  },
  {
    icon: <Icon id="Shadcn" className="size-4" />,
    label: "Shadcn UI",
  },
  {
    icon: <Icon id="Claude" className="size-4 text-[#D97757]" />,
    label: "Claude Code",
  },
];

export const Watermark = () => {
  return (
    <div className="text-secondary-foreground flex-col gap-1 items-center text-sm flex">
      <span className="text-center">This resume is powered by</span>
      <div className="flex flex-wrap max-w-md items-center justify-center gap-x-3 gap-y-1">
        {items.map((item) => (
          <div className="flex items-center gap-1" key={item.label}>
            {item.icon}
            <span className="text-accent-foreground">{item.label}</span>
          </div>
        ))}
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
