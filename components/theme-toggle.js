"use client"

import { useTheme } from "./theme-provider"
import { Button } from "./ui-elements"
import { Sun, Moon } from "lucide-react" // Import icons from lucide-react

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`transition-colors duration-300 ${theme === "dark" ? "text-white hover:text-blue-400" : "text-slate-900 hover:text-blue-600"}`}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
