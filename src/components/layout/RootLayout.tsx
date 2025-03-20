import { Outlet } from "react-router-dom"

import { Header } from "@/components/layout/Header";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout