import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  image: string
}

export default function NewsCard({ title, date, excerpt, image }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{excerpt}</p>
        <Button variant="outline">Read More</Button>
      </CardContent>
    </Card>
  )
}

