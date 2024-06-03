import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../../pages/LandingPage"
import { ClickerPage } from "../../pages/ClickerPage"

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="clicker" element={<ClickerPage />}></Route>
    </Routes>
  )
}
