"use client";

import { CommandMenu } from "@/components/command-menu";
import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { Education } from "@/components/resume/education";
import { Header } from "@/components/resume/header";
import { Project } from "@/components/resume/project";
import { Skills } from "@/components/resume/skills";
import { Summary } from "@/components/resume/summary";
import { Watermark } from "@/components/resume/watermark";
import { WorkExperience } from "@/components/resume/work-experience";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("resume");
  const tCommandMenu = useTranslations("command_menu");

  const getCommandMenuLinks = () => {
    const personalWebsiteUrl = t("personalWebsiteUrl");
    const social = t.raw("social");

    return [
      ...(personalWebsiteUrl
        ? [
            {
              icon: "Globe",
              url: personalWebsiteUrl,
              title: tCommandMenu("personal_website"),
            },
          ]
        : []),
      ...social.social.map(
        (social: { url: string; label: string; icon: string }) => ({
          url: social.url,
          title: social.label,
          icon: social.icon,
        }),
      ),
      ...(social.email
        ? [
            {
              icon: "Mail",
              url: `mailto:${social.email}`,
              title: tCommandMenu("contact_with_email"),
            },
          ]
        : []),
      ...(social.wechat
        ? [
            {
              icon: "WeChat",
              url: `wechat://${social.wechat}`,
              title: tCommandMenu("contact_with_wechat"),
            },
          ]
        : []),
    ];
  };

  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto max-w-2xl px-4 sm:px-0 py-12 pb-4 sm:py-16 print:py-11!"
      id="main-content"
    >
      <div className="absolute top-0 left-0 right-0 print:hidden">
        <div className="w-full max-w-2xl mx-auto py-2 px-4 sm:py-4 sm:px-0 flex items-center justify-between gap-2">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>

      <div className="sr-only">
        <h1>{`${t("name")}'s Resume`}</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-4">
          <Summary />
          <Separator />
          <WorkExperience />
          <Separator />
          <Skills />
          <Separator />
          <Education />
          <Separator />
          <Project />
          <Watermark />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
};

export default Page;
