import Footer from "@/components/footer"
import Header from "@/components/header"
import Notes from "@/components/notes"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col space-y-6 px-6 max-md:my-6">
        <Header />
        <Notes />
        <Footer />
      </div>
    </main>
  )
}
