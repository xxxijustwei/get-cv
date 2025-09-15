import { MasonryProps } from "masonic";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { BadgeList } from "../bage-list";
import { Icon } from "../icons";
import { Section } from "../ui/section";

const Masonry: ComponentType<MasonryProps<ProjectItemProps>> = dynamic(
  () => import("masonic").then((mod) => mod.Masonry),
  { ssr: false },
);

export const Project = () => {
  const t = useTranslations("resume");
  const tCommon = useTranslations("common");
  const projects = t.raw("projects");
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-0">
      <h2 className="text-xl font-bold" id="side-projects">
        {tCommon("projects")}
      </h2>
      {/* <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project: ProjectItemProps) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div> */}
      <Masonry
        items={projects}
        render={({ data }: { data: ProjectItemProps }) => (
          <ProjectItem {...data} />
        )}
        columnCount={2}
        columnGutter={12}
        rowGutter={12}
        overscanBy={10}
      />
    </Section>
  );
};

interface ProjectItemProps {
  name: string;
  herf: string;
  tags: string[];
  descriptions: string[];
}

const ProjectItem = ({ name, herf, tags, descriptions }: ProjectItemProps) => {
  return (
    <div className="p-3 border rounded-xl">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-1 px-0.5">
          <a
            href={herf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
            aria-label={`${name} project (opens in new tab)`}
          >
            <Icon id="Github" className="size-4 opacity-60" />
            {name}
          </a>
        </div>
        <div className="text-secondary-foreground text-pretty text-sm">
          <ul>
            {descriptions.map((description, index) => (
              <li
                key={index}
                className="relative pl-3 before:content-['•'] before:absolute before:left-0"
              >
                {description}
              </li>
            ))}
          </ul>
        </div>
        <BadgeList className="gap-x-1 pt-0.5" badges={tags} />
      </div>
    </div>
  );
};
