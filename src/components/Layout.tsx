import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 flex h-14 items-center justify-center border-b bg-slate-50 px-4 md:h-16">
        <h1 className="text-xl font-semibold text-slate-800">
          Contador Simples
        </h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Outlet />
      </main>
      <footer className="py-4 text-center text-sm text-slate-500 border-t bg-slate-50">
        © 2023 Contador Simples
      </footer>
    </div>
  )
}
