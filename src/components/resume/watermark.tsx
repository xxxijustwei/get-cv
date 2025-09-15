import { Icon } from "../icons";

export const Watermark = () => {
  return (
    <div className="text-gray-400 flex-col items-center text-sm flex">
      <span className="text-center">This resume is powered by</span>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Icon id="NextJs" className="size-5" />
          <span>Next.js 15</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon id="TailwindCss" className="size-5" />
          <span>Tailwind CSS 4.0</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon id="Shadcn" className="size-4" />
          <span>Shadcn UI</span>
        </div>
      </div>
    </div>
  );
};
