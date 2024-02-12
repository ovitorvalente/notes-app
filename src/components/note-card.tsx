"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { formatDistanceToNow } from "date-fns"
import { pt, ptBR } from "date-fns/locale"
import { X } from "lucide-react"

interface NoteCardProps {
  note: {
    id: string
    date: Date
    content: string
  }
  onNoteDeleted: (id: string) => void
}

export default function NoteCards({ note, onNoteDeleted }: NoteCardProps) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger className="relative flex flex-col space-y-3 overflow-hidden rounded-lg p-5 text-left outline-none transition-all delay-75 duration-300 ease-in-out border-2 border-secondary hover:border-primary hover:bg-secondary focus-visible:border-2 focus-visible:border-primary shadow-sm">
          <span className="text-sm font-medium text-foreground">
            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
          </span>
          <p className="text-sm leading-6 text-foreground">{note.content}</p>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary/25 to-black/0" />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50">
            <Dialog.Content className="fixed left-1/2 top-1/2 flex h-4/5 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg bg-secondary outline-none max-md:max-w-md">
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-md font-medium text-foreground">
                    {formatDistanceToNow(note.date, {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </span>
                  <Dialog.Close>
                    <X
                      size={16}
                      className="h-8 w-8 rounded-full p-2 transition-all delay-150 duration-150 ease-in-out hover:bg-muted-foreground"
                    />
                  </Dialog.Close>
                </div>
                <p className="text-sm leading-6 text-card-foreground">
                  {note.content}
                </p>
              </div>

              <button
                className="group bg-destructive dark:bg-red-500 py-4 text-center text-white border-2 border-secondary rounded-b-lg tracking-wide text-sm outline-none transition-all delay-150 duration-150 ease-in-out hover:bg-red-600 dark:hover:bg-red-600 rounded-t-sm focus-visible:border-foreground"
                type="button"
                onClick={() => onNoteDeleted(note.id)}
              >
                Deseja{" "}
                <span className="text-white font-bold tracking-widest underline-offset-4 group-hover:underline">
                  apagar essa nota
                </span>
                ?
              </button>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
