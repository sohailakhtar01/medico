import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
      <p className="text-gray-600">
        Signed in as {session.user?.email || session.user?.name}
      </p>
      <div className="mt-6 p-4 border rounded">
        <a
          href="/api/auth/session"
          className="text-blue-600 underline underline-offset-4"
        >
          View raw session JSON
        </a>
      </div>
    </section>
  )
}
