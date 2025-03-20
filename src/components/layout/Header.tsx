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
    <header className="sticky top-0 z-50 w-full bg-white" lang="ko">
      <div className="container flex h-12 items-center justify-between mx-auto">
        <Logo />

        {!isMobile && (
          <div className="flex items-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center p-2 rounded-md hover:underline focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              tabIndex={0}
              aria-label="회원가입 페이지로 이동"
            >
              회원가입
            </Link>
          </div>
        )}

        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="메뉴 열기" tabIndex={0} aria-expanded={isOpen}>
                <Menu className="h-12 w-12" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="px-4 py-8">
              <nav role="navigation">
                <ul>
                  <li className="py-2">
                    <Link to="/category1" className="font-bold hover:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => setIsOpen(false)} tabIndex={0}>
                      카테고리1
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/category2" className="font-bold hover:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => setIsOpen(false)} tabIndex={1}>
                      카테고리2
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/category3" className="font-bold hover:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => setIsOpen(false)} tabIndex={2}>
                      카테고리3
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  )
}

