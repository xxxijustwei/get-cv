import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import { SVGProps } from "react";

const Icons = Object.fromEntries(
  Object.entries(LucideIcons).filter(
    ([key]) =>
      key !== "createLucideIcon" &&
      key !== "icons" &&
      key[0] === key[0].toUpperCase(),
  ),
) as Record<string, React.FC<LucideProps>>;

type IconName = keyof typeof Icons;

interface IconProps extends LucideProps {
  id: IconName;
}

const Icon = ({ id, ...props }: IconProps) => {
  if (id === "WeChat") {
    return <WeChatIcon {...props} />;
  }

  if (id === "Github") {
    return <GithubIcon {...props} />;
  }

  const IconComponent = Icons[id];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

const WeChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.75 4.25C4.857 4.25 2 6.884 2 9.794c0 1.6.835 3.086 2.252 4.13a1 1 0 0 1 .399.933l-.07.534l.83-.416a1 1 0 0 1 .77-.054a8 8 0 0 0 2.569.417q.381 0 .75-.034c.004-3.21 2.674-5.678 5.946-6.201c-.41-2.623-3.114-4.853-6.696-4.853m8.707 4.78C21.003 9.335 24 11.904 24 15.311c0 1.637-.711 3.102-1.833 4.199v1.95a1 1 0 0 1-1.5.865l-1.725-.996a8.3 8.3 0 0 1-2.192.293c-3.122 0-5.924-1.747-6.893-4.344a10.2 10.2 0 0 1-3.91-.334l-2.151 1.08A1 1 0 0 1 2.356 17l.239-1.841C1.018 13.815 0 11.926 0 9.794C0 5.476 4.083 2.25 8.75 2.25c4.388 0 8.259 2.85 8.707 6.78M5.247 7.496a1 1 0 0 1 1-1h.003a1 1 0 0 1 1 1V7.5a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1zm5.003.011a1 1 0 0 1 1-1h.004a1 1 0 0 1 1 1v.004a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1zM16.75 11q-.11 0-.22.004c-2.948.1-5.03 2.126-5.03 4.307q0 .337.061.66c.368 1.959 2.447 3.651 5.189 3.651a6.2 6.2 0 0 0 1.995-.323a1 1 0 0 1 .82.08l.602.348v-.658a1 1 0 0 1 .353-.763c.942-.799 1.48-1.862 1.48-2.995C22 13.077 19.808 11 16.75 11m-3.194 2.656a1 1 0 0 1 1-1h.004a1 1 0 0 1 1 1v.004a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1zm4.38.004a1 1 0 0 1 1-1h.004a1 1 0 0 1 1 1v.004a1 1 0 0 1-1 1h-.004a1 1 0 0 1-1-1z"
    />
  </svg>
);

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  </svg>
);

export { Icon };
