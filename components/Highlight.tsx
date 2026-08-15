"use client";
import { ReactNode } from "react";

/**
 * Marks the phrases that were bolded in the source document.
 * Change the classes here to restyle every highlight across the site.
 */
export default function Highlight({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <strong
      className={
        onDark ? "font-semibold text-amber-200" : "font-semibold text-emerald-700"
      }
    >
      {children}
    </strong>
  );
}
