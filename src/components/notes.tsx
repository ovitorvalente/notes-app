"use client"
import { ChangeEvent, useState } from "react"
import NewNoteCard from "./new-note-card"
import NoteCard from "./note-card"
import { Separator } from "./ui/separator"
import { toast } from "sonner"

interface Note {
  id: string
  date: Date
  content: string
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>(() => {
    if (typeof window !== "undefined") {
      const notesOnStorage = localStorage.getItem("notes")

      if (notesOnStorage) {
        return JSON.parse(notesOnStorage)
      }
    }
    return []
  })
  const [search, setSearch] = useState("")

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }
    const notesArray = [newNote, ...notes]
    setNotes([newNote, ...notes])
    localStorage.setItem("notes", JSON.stringify(notesArray))
  }

  function onNoteDeleted(id: string) {
    const filteredNotes = notes.filter((note) => note.id !== id)
    setNotes(filteredNotes)
    localStorage.setItem("notes", JSON.stringify(filteredNotes))
    toast.success("Nota apagada com sucesso!")
  }

  function handlerSearch(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    setSearch(query)
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes

  return (
    <div className="flex flex-col space-y-6">
      <form className="flex w-full">
        <input
          type="text"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          placeholder="Busque em suas notas..."
          onChange={handlerSearch}
        />
      </form>
      <Separator className="" />
      <div className="animate-fadeAndSlideUp notes-scrollbar grid max-h-[70vh] auto-rows-[250px] grid-cols-3 gap-6 overflow-y-auto p-1 pr-2 max-lg:grid-cols-2 max-md:grid-cols-1">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
          )
        })}
      </div>
    </div>
  )
}
