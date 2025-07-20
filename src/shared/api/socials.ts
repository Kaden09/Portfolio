import TelegramIcon from "@/shared/assets/socials/TelegramIcon.svg?react";
import VKIcon from "@/shared/assets/socials/VKIcon.svg?react";
import HHIcon from "@/shared/assets/socials/HHIcon.svg?react";
import WhatsAppIcon from "@/shared/assets/socials/WhatsAppIcon.svg?react";
import GitHubIcon from "@/shared/assets/socials/GitHubIcon.svg?react";
import GmailIcon from "@/shared/assets/socials/GmailIcon.svg?react";

interface ISocials {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export const socials: ISocials[] = [
  {
    icon: TelegramIcon,
    link: "https://t.me/kaden099",
  },
  {
    icon: VKIcon,
    link: "https://vk.com/id547351603",
  },
  {
    icon: HHIcon,
    link: "https://glazov.hh.ru/resume/b0153efaff0f0effca0039ed1f6f65476f7139",
  },
  {
    icon: WhatsAppIcon,
    link: "https://web.whatsapp.com/",
  },
  {
    icon: GitHubIcon,
    link: "https://github.com/Kaden09",
  },
  {
    icon: GmailIcon,
    link: "https://mail.google.com/mail/?view=cm&to=m.volkov.dev@gmail.com",
  },
];
