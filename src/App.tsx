import { Routes, Route } from "react-router-dom"

import RootLayout from "@/components/layout/RootLayout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
        <Route index element={<h1>Home</h1>} />
      </Route>
    </Routes>
  )
}

export default App
