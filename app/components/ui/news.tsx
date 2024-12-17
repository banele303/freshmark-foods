import NewsCard from '@/app/news/news-card'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'News | Freshmark Foods',
  description: 'Stay updated with the latest news and announcements from Freshmark Foods.',
}

const newsItems = [
  {
    id: 1,
    title: 'Freshmark Foods Launches New Organic Juice Line',
    date: '2023-06-15',
    excerpt: 'Introducing our latest range of 100% organic, cold-pressed juices made from locally sourced fruits.',
    image: '/img/ajimg.webp',
  },
  {
    id: 2,
    title: 'Sustainability Initiative: Reducing Carbon Footprint',
    date: '2023-05-22',
    excerpt: 'Freshmark Foods commits to reducing its carbon footprint by 30% over the next five years.',
    image: '/img/img-heroj.png',
  },
  {
    id: 3,
    title: 'Partnership Announcement: Local Farmers Cooperative',
    date: '2023-04-10',
    excerpt: 'We&apos;re excited to announce our new partnership with the Local Farmers Cooperative to support sustainable agriculture.',
    image: '/img/manu2.png',
  },
]

export default function NewsSection() {
  return (
    <div className="container px-[1rem] mx-autopy-12">
      <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
     
    </div>
  )
}

