"use client";

import { GlobeIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Icon } from "../icons";

export const Header = () => {
  const t = useTranslations("resume");
  return (
    <header className="flex items-center justify-between gap-2 sm:gap-4">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          {t("name")}
        </h1>

        <LocationLink location={t("location")} url={t("locationUrl")} />

        <ContactButtons
          personalWebsiteUrl={t("personalWebsiteUrl")}
          contact={t.raw("social")}
        />
      </div>

      <div className="rounded-lg w-28 sm:w-32 min-w-20 overflow-hidden">
        <img
          src={t("avatar")}
          alt={`${t("name")}'s profile avatar`}
          className="w-full h-auto"
        />
      </div>
    </header>
  );
};

interface LocationLinkProps {
  location: string;
  url: string;
}

const LocationLink = ({ location, url }: LocationLinkProps) => {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
};

interface ContactButtonsProps {
  personalWebsiteUrl: string;
  contact: {
    email: string;
    wechat: string;
    social: {
      label: string;
      url: string;
      icon: string;
    }[];
  };
}

const ContactButtons = ({
  personalWebsiteUrl,
  contact,
}: ContactButtonsProps) => {
  return (
    <div
      className="flex flex-col gap-x-1 pt-1 font-mono text-sm text-foreground/80"
      role="list"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <SocialLink
          href={personalWebsiteUrl}
          icon="Globe"
          label="Personal website"
          content={personalWebsiteUrl}
        />
      )}
      {contact.email && (
        <SocialLink
          href={`mailto:${contact.email}`}
          icon="Mail"
          label="Email"
          content={contact.email}
        />
      )}
      {contact.wechat && (
        <SocialLink
          href={`wechat://${contact.wechat}`}
          icon="WeChat"
          label="WeChat"
          content={contact.wechat}
        />
      )}
      {contact.social.map((social) => (
        <SocialLink
          key={social.label}
          href={social.url}
          icon={social.icon}
          label={social.label}
          content={social.url}
        />
      ))}
    </div>
  );
};

interface SocialLinkProps {
  label: string;
  content: string;
  href: string;
  icon: string;
}

function SocialLink({ label, content, href, icon }: SocialLinkProps) {
  return (
    <div className="flex items-start gap-x-1">
      <div className="py-0.5">
        <Icon id={icon} className="size-4" />
      </div>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all"
      >
        {content}
      </a>
    </div>
  );
}
