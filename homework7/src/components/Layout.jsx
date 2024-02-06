import React from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <Outlet/>
      <span>Made by Kolya</span>
    </>
  )
}