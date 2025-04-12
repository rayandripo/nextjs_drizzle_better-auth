import React from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-[#a3adc2] mx-2" />
            )}
            <a
              href={item.href}
              className={`text-sm ${
                index === items.length - 1
                  ? "text-[#a3adc2] font-medium"
                  : "text-[#a3adc2] hover:text-[#a3adc2]"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
