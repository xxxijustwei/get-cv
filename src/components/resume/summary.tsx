"use client";

import { useTranslations } from "next-intl";
import { Section } from "../ui/section";

export const Summary = () => {
  const t = useTranslations("resume");
  const tCommon = useTranslations("common");
  return (
    <Section>
      <h2 className="text-xl font-bold" id="about-section">
        {tCommon("summary")}
      </h2>
      <div className="text-pretty font-mono text-sm text-foreground/80 whitespace-pre-line">
        {t("summary")}
      </div>
    </Section>
  );
};
