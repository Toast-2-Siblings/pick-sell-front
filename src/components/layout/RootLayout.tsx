import { Outlet } from "react-router-dom"

import { Header } from "@/components/layout/Header";

const RootLayout = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="container mx-auto flex-1">
        <Outlet />
      </section>
    </main>
  )
}

export default RootLayout