import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import { Section } from "../ui/section";

export const Skills = () => {
  const t = useTranslations("resume");
  const tCommon = useTranslations("common");
  const skills = t.raw("skills");
  return (
    <Section>
      <h2 className="text-xl font-bold" id="skills-section">
        {tCommon("skills")}
      </h2>
      <ul
        className="flex list-none flex-wrap gap-1 p-0"
        aria-label="List of skills"
      >
        {skills.map((skill: string) => (
          <li key={skill}>
            <Badge aria-label={`Skill: ${skill}`}>{skill}</Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
};
