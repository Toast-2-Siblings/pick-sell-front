import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/Logo"

import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container flex h-12 items-center justify-between mx-auto">
        <Logo />

        {!isMobile && (
          <div className="flex items-center gap-4">
            <Button variant="outline" className="" tabIndex={0}>
              회원가입
            </Button>
          </div>
        )}

        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="메뉴 열기" tabIndex={0}>
                <Menu className="h-12 w-12" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-12">
              <nav className="flex flex-col space-y-6">
                <Link to="/category1" className="text-lg font-medium" onClick={() => setIsOpen(false)} tabIndex={0}>
                  카테고리1
                </Link>
                <Link to="/category2" className="text-lg font-medium" onClick={() => setIsOpen(false)} tabIndex={1}>
                  카테고리2
                </Link>
                <Link to="/category3" className="text-lg font-medium" onClick={() => setIsOpen(false)} tabIndex={2}>
                  카테고리3
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  )
}

