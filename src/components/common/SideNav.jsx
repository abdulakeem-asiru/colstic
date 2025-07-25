import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight } from "lucide-react";

export function Hamburger() {
  return (
    <SideNav
      Hamburger={
        <Button className="bg-transparent flex-col flex hamburger-button items-center justify-center gap-2 p-0">
          <span className="w-8 h-[3px] bg-white rounded"></span>
          <span className="w-8 h-[3px] bg-white rounded"></span>
          <span className="w-8 h-[3px] bg-white rounded"></span>
        </Button>
      }
    />
  );
}

export function SideNav({ Hamburger }) {
  return (
    <Sheet>
      <SheetTrigger>{Hamburger}</SheetTrigger>
      <SheetContent
        className="w-64 sm:w-80 border-none p-8 text-white flex flex-col"
        side="right"
        style={{
          background: "linear-gradient(to bottom left, #000000, #1a1a1a)",
        }}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <div className="flex-1"></div>
        <nav className="flex flex-col gap-6 mt-6">
          {[
            "Home",
            "About",
            "Services",
            "Featured",
            "Testimonial",
            "Blog",
            "Contact",
          ].map((item) => (
            <SheetClose asChild key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="md:text-2xl text-lg flex gap-2 items-center uppercase font-semibold text-white transition-colors"
              >
                <span className="group hover:text-gray-400 transition-colors flex items-center gap-2">
                  {item}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
