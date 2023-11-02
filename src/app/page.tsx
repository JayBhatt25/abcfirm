import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row overflow-x-hidden">
      <Sidebar />
      <Dashboard />
    </main>
  )
}
