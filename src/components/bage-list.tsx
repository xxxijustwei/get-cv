import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface BadgeListProps {
  className?: string;
  badges: string[];
}

export const BadgeList = ({ className, badges }: BadgeListProps) => {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex flex-wrap list-none gap-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge variant="secondary" className="align-middle text-xs">
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
};
