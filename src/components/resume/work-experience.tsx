"use client";

import { Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { BadgeList } from "../bage-list";
import { Section } from "../ui/section";

export const WorkExperience = () => {
  const t = useTranslations("resume");
  const tCommon = useTranslations("common");

  const works = t.raw("works");
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        {tCommon("work-experience")}
      </h2>
      <div className="space-y-4" role="feed" aria-labelledby="work-experience">
        {works.map((work: WorkExperienceItemProps) => (
          <WorkExperienceItem key={work.company} {...work} />
        ))}
      </div>
    </Section>
  );
};

interface WorkExperienceItemProps {
  company: string;
  link: string;
  region: string;
  officeMode: string;
  start: string;
  end: string;
  jobTitle: string;
  techstack: string[];
  projects: {
    name: string;
    role: string;
    description: string[];
  }[];
}

export const WorkExperienceItem = (props: WorkExperienceItemProps) => {
  const {
    company,
    link,
    region,
    officeMode,
    start,
    end,
    jobTitle,
    techstack,
    projects,
  } = props;

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center justify-between sm:gap-4 gap-2">
          <CompanyLink company={company} link={link} />
          <WorkPeriod start={start} end={end} />
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between sm:gap-x-2 gap-0.5">
          <div className="font-mono text-sm print:text-[13px] font-semibold tracking-tighter">
            {jobTitle}
          </div>
          <div className="text-sm text-[13px] tracking-tighter">{`${region} | ${officeMode}`}</div>
        </div>

        <BadgeList className="gap-x-1 pt-0.5" badges={techstack} />
      </div>

      <div className="mt-2 space-y-3 text-foreground/80 text-pretty">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-y-1">
            <span className="text-sm px-0.5">{`${project.name} - ${project.role}`}</span>
            <ul className="text-xs">
              {project.description.map((description, index) => (
                <li
                  key={index}
                  className="relative pl-3 before:content-['•'] before:absolute before:left-0"
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

interface CompanyProps {
  company: string;
  link: string;
}

export const CompanyLink = ({ company, link }: CompanyProps) => {
  return (
    <div className="flex items-center gap-x-1">
      <Building2 className="size-4" aria-hidden="true" />
      <a
        className="hover:underline min-w-fit"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${company} company website`}
      >
        {company}
      </a>
    </div>
  );
};

interface WorkPeriodProps {
  start: string;
  end?: string;
}

const WorkPeriod = ({ start, end }: WorkPeriodProps) => {
  const t = useTranslations("common");
  return (
    <div
      className="min-w-fit text-sm tabular-nums text-gray-500"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? t("present")}
    </div>
  );
};
