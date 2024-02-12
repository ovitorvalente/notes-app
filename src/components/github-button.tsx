"use client"
import * as Tooltip from "@radix-ui/react-tooltip"
import { Github } from "lucide-react"
import { Button } from "./ui/button"

export default function GithubButton() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a href="https://github.com/euvitordev/notes-app" target="_blank">
            <Button
              size={"icon"}
              variant={"outline"}
              className="size-8 rounded-lg"
            >
              <Github size={18} />
            </Button>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded-lg font-semibold bg-secondary p-2 text-sm transition-all delay-150 duration-150 ease-in-out"
            sideOffset={5}
          >
            Projeto no Github
            <Tooltip.Arrow className="fill-secondary" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
