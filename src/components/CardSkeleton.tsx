
const CardSkeleton = () => {
  return (
<div className=" border-gray-500 rounded-lg animate-pulse">
  {/* Skeleton for image */}
  <div className="h-48 w-full bg-neutral-800 rounded-t-lg"></div>

  {/* Skeleton for title, critic score, and platform icons */}
  <div className="p-1">
    {/* Title placeholder */}
    <div className="h-6 bg-neutral-800 rounded w-3/4 mb-2"></div>

    {/* Platforms and critic score */}
    <div className="flex gap-1 justify-between mt-2">
      {/* Platforms placeholder */}
      <div className="h-6 bg-neutral-800 rounded w-1/3"></div>
      {/* Critic score placeholder */}
      <div className="h-6 bg-neutral-800 rounded w-1/6"></div>
    </div>
  </div>
</div>

  )
}

export default CardSkeleton