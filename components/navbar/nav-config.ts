// import { program } from "@/lib/content"; // Dad Block pause — restore with the entry below

export type NavChild = { label: string; href: string; ariaLabel?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  { label: "تعارف", href: "/#about" },
  { label: "معالج سے ملاقات", href: "/#meet-fahd" },
  { label: "طریقہ کار", href: "/#approach" },
  { label: "خدمات", href: "/#services" },
  { label: "خصوصیات", href: "/#specialties" },
  { label: "قیمتیں", href: "/#pricing" },
  // Temporarily disabled (Dad Block pause) — restore to re-link:
  // {
  //   label: program.navLabel,
  //   href: "/the-dad-block",
  //   children: [
  //     { label: "مزید جانیں", href: "/the-dad-block" },
  //     { label: "تقریبات", href: "/the-dad-block/events" },
  //   ],
  // },
  { label: "بک کریں", href: "/book" },
];

export const cta = { label: "میرے سے کام کریں", href: "/#contact" };
