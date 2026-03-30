import { Star } from "lucide-react"

interface ReviewCardProps {
  title: string
  rating: number
  review: string
}

function ReviewCard({ title, rating, review }: ReviewCardProps) {
  return (
    <div className="flex w-[240px] shrink-0 flex-col gap-2 rounded-xl bg-white p-4 shadow-sm sm:gap-3 sm:p-5">
      <h5 className="typo-body-lg font-bold">{title}</h5>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating ? "fill-current text-foreground" : "text-grey-20"
            }
          />
        ))}
      </div>
      <p className="text-grey-70">{review}</p>
    </div>
  )
}

export default ReviewCard
