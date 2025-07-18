import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Hamburger (){
  return (
<SideNav Hamburger={<Button className="bg-transparent flex-col flex hamburger-button items-center justify-center gap-2 p-0">
              <span className="w-15 h-[6px] bg-white rounded-4xl"></span>
              <span className="w-15 h-[6px] bg-white rounded-4xl"></span>
            </Button>}/>
  )
} 

export function SideNav({ Hamburger }) {
  return (
    <Sheet>
      <SheetTrigger >
        {Hamburger}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
        Hello
          </div>
          <div className="grid gap-3">
       Hello
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
