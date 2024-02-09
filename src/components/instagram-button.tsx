"use client"
import * as Tooltip from "@radix-ui/react-tooltip"
import { Instagram } from "lucide-react"

export default function InstagramButton() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a
            href="https://www.instagram.com/euvitorll/"
            target="_blank"
            className="hover:bg-secondary size-6 flex items-center justify-center rounded-lg transition-all delay-75 duration-300 ease-in-out"
          >
            <Instagram size={14} />
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded-lg font-semibold bg-secondary p-2 text-sm transition-all delay-150 duration-150 ease-in-out"
            sideOffset={5}
          >
            Meu Instagram
            <Tooltip.Arrow className="fill-secondary" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
