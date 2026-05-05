const BookCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-800 bg-gray-900 p-4">
            {/* Thumbnail placeholder */}
            <div className="h-32 w-full animate-pulse rounded-xl bg-gray-800" />
            {/* Genre + availability row */}
            <div className="flex justify-between">
                <div className="h-4 w-20 animate-pulse rounded-full bg-gray-800" />
                <div className="h-4 w-16 animate-pulse rounded bg-gray-800" />
            </div>
            {/* Title */}
            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-800" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-gray-800" />
            {/* Description */}
            <div className="h-3 w-full animate-pulse rounded bg-gray-800" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-gray-800" />
            {/* Button */}
            <div className="mt-auto h-9 w-full animate-pulse rounded-xl bg-gray-800" />
        </div>
    )
}

export default BookCardSkeleton;