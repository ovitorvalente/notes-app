"use client"
import { Plus } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner"

interface NewNoteCardPros {
  onNoteCreated: (content: string) => void
}
let speechRecognition: SpeechRecognition | null = null

export default function NewNoteCard({ onNoteCreated }: NewNoteCardPros) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [content, setContent] = useState("")
  const [isRecordind, setIsRecordind] = useState(false)

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChanged(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value)
    if (e.target.value === "") {
      setShouldShowOnboarding(true)
    }
  }

  function handleSaveNote(e: FormEvent) {
    e.preventDefault()
    if (content === "") {
      return
    }
    onNoteCreated(content)
    setContent("")
    setShouldShowOnboarding(true)
    toast.success("Nota salva com sucesso!")
  }

  function handleStartRecording() {
    const isSpeechRecognitionAPIAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window

    if (!isSpeechRecognitionAPIAvailable) {
      toast.error("Infelizmente seu navegador não suporta a API de gravação!")
      return
    }
    setIsRecordind(true)
    setShouldShowOnboarding(false)
    const speechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition
    speechRecognition = new speechRecognitionAPI()
    speechRecognition.lang = "pt-BR"
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true
    speechRecognition.onresult = (e) => {
      const transcription = Array.from(e.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, "")
      setContent(transcription)
    }
    speechRecognition.onerror = (e) => {
      console.error(e)
    }
    speechRecognition.start()
  }
  function handleStopRecording() {
    setIsRecordind(false)
    if (speechRecognition !== null) {
      speechRecognition.stop()
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col space-y-3 rounded-lg bg-secondary p-5 text-left transition-all delay-150 duration-150 ease-in-out hover:ring-2 hover:ring-slate-300">
        <div className="flex w-full items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Adicionar nota
          </span>
          <Plus />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50">
          <Dialog.Content className="fixed left-1/2 top-1/2 flex h-4/5 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-lg bg-secondary outline-none max-md:max-w-lg max-sm:max-w-md">
            <div className="flex items-center justify-between p-5">
              <span className="text-md font-medium text-foreground">
                Adicionar nota
              </span>
              <Dialog.Close>
                <X
                  size={16}
                  className="h-8 w-8 rounded-full p-2 transition-all delay-150 duration-150 ease-in-out hover:bg-muted-foreground"
                />
              </Dialog.Close>
            </div>

            <form className="flex w-full flex-1 flex-col items-start justify-between">
              <div className="h-full w-full flex-1 px-5">
                {shouldShowOnboarding ? (
                  <p className="text-sm leading-6 text-muted-foreground tracking-wide">
                    Comece{" "}
                    <button
                      type="button"
                      onClick={handleStartRecording}
                      className="text-primary tracking-wider font-bold hover:underline underline-offset-4"
                    >
                      gravando uma nota
                    </button>{" "}
                    em áudio ou se preferir{" "}
                    <button
                      type="button"
                      className="text-primary tracking-wider font-bold hover:underline underline-offset-4"
                      onClick={handleStartEditor}
                    >
                      utilize apenas texto.
                    </button>
                  </p>
                ) : (
                  <textarea
                    autoFocus
                    className="notes-scrollbar h-full w-full flex-1 resize-none bg-transparent pr-4 text-sm leading-6 text-slate-400 outline-none"
                    placeholder="Digite aqui"
                    onChange={handleContentChanged}
                    value={content}
                  ></textarea>
                )}
              </div>
              {isRecordind ? (
                <button
                  className="w-full bg-slate-700 py-4 text-center text-sm font-bold tracking-wider text-white outline-none transition-all delay-150 duration-150 ease-in-out hover:bg-slate-800 border-2 border-secondary rounded-b-lg rounded-t-sm flex items-center justify-center gap-2"
                  type="button"
                  onClick={handleStopRecording}
                >
                  <span className="size-3 rounded-full bg-red-500 animate-pulse" />
                  Gravando! (clique para interromper)
                </button>
              ) : (
                <button
                  onClick={handleSaveNote}
                  className="w-full bg-primary py-4 text-center text-sm font-bold tracking-wider text-white outline-none transition-all delay-150 duration-150 ease-in-out hover:bg-green-700 border-2 border-secondary rounded-b-lg rounded-t-sm focus-visible:border-foreground"
                  type="button"
                >
                  Salvar nota
                </button>
              )}
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
