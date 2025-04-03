import GithubButton from "./github-button";
import ModeToggle from "./mode-toggle";
import { Logo } from "./logo";

export default function Header() {
  return (
    <>
      <header className="flex w-full items-center justify-between mb-12">
        <Logo />

        <div className="flex items-center gap-2">
          <ModeToggle />
          <GithubButton />
        </div>
      </header>
    </>
  );
}
