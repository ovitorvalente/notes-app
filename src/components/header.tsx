import Image from "next/image"
import logo from "../assets/Logo.svg"
import GithubButton from "./github-button"
import ModeToggle from "./mode-toggle"

export default function Header() {
  return (
    <>
      <header className="flex w-full items-center justify-between">
        <Image src={logo} alt="Nlw Expert" />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <GithubButton />
        </div>
      </header>
    </>
  )
}
