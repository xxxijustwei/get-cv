import { useTranslations } from "next-intl";
import { Section } from "../ui/section";

export const Education = () => {
  const t = useTranslations("resume");
  const tCommon = useTranslations("common");
  const education = t.raw("education");
  return (
    <Section>
      <h2 className="text-xl font-bold" id="education-section">
        {tCommon("education")}
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="education-section"
      >
        {education.map((item: EducationItemProps) => (
          <article key={item.school} role="article">
            <EducationItem {...item} />
          </article>
        ))}
      </div>
    </Section>
  );
};

interface EducationItemProps {
  school: string;
  major: string;
  start: string;
  end: string;
}

const EducationItem = ({ school, major, start, end }: EducationItemProps) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-x-2 text-base">
        <h3
          className="font-semibold leading-none"
          id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {school}
        </h3>
        <EducationPeriod start={start} end={end} />
      </div>
      <div className="mt-1 text-foreground/80 text-sm">{major}</div>
    </div>
  );
};

interface EducationPeriodProps {
  start: string;
  end: string;
}

const EducationPeriod = ({ start, end }: EducationPeriodProps) => {
  return (
    <div className="text-sm tabular-nums text-gray-500">
      {start} - {end}
    </div>
  );
};
