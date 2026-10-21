"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ICONS } from "@/lib/icons";
import type { NavItem } from "./Header";
import { Icon } from "./ui";

export function MobileMenu({ items, current, cta }: { items: NavItem[]; current?: string; cta: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen(!open)}
        className="grid size-11 cursor-pointer place-items-center rounded-pill border-0 bg-transparent text-text hover:bg-icon-hover min-[960px]:hidden"
      >
        <Icon d={open ? ICONS.close : ICONS.menu} />
      </button>
      {open ? (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="absolute inset-x-0 top-full flex flex-col border-y border-line bg-bg px-5 pt-2 pb-5 md:px-10 min-[960px]:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.key === current ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 font-semibold no-underline"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex *:w-full">{cta}</div>
        </nav>
      ) : null}
    </>
  );
}
