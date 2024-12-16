import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Freshmark Foods",
  description: "Learn about Freshmark Foods, our history, values, and team.",
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50">
      {children}
    </div>
  )
}

