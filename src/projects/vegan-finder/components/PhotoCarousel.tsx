import {useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {usePrevNextButtons} from "@/projects/vegan-finder/hooks/usePrevNextButtons.ts";
import {useDotButton} from "@/projects/vegan-finder/hooks/useDotButton.ts";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {usePhotos} from "@/projects/vegan-finder/hooks/usePhotos.ts";

interface PhotoCarouselProps {
    photoNames: string[];
    altText: string;
}

export const PhotoCarousel = ({ photoNames, altText }: PhotoCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [photoUris, setPhotoUris] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const {getPhotoUri} = usePhotos();

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    useEffect(() => {
        const fetchAll = async () => {
            setLoading(true);
            const uris = await Promise.all(
                photoNames.map(name => getPhotoUri(name))
            );
            setPhotoUris(uris.filter(Boolean) as string[]);
            setLoading(false);
        };
        if (photoNames.length > 0) fetchAll();
    }, [photoNames]);

    if (loading) {
        return (
            <div className="h-56 w-full animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-800 sm:h-64" />
        );
    }

    if (photoUris.length === 0) return null;

    return (
        <div className="relative my-4">

            {/* Carousel viewport */}
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                    {photoUris.map((uri, index) => (
                        <div key={index} className="relative min-w-full">
                            <img
                                src={uri}
                                alt={`${altText} ${index + 1}`}
                                referrerPolicy="no-referrer"
                                className="h-65 w-full object-cover sm:h-85"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Prev / Next buttons */}
            {photoUris.length > 1 && (
                <>
                    <button
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md transition hover:bg-white disabled:opacity-30 dark:bg-gray-800/80 dark:hover:bg-gray-800"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow-md transition hover:bg-white disabled:opacity-30 dark:bg-gray-800/80 dark:hover:bg-gray-800"
                    >
                        <ChevronRight size={18} />
                    </button>
                </>
            )}

            {/* Dot indicators */}
            {scrollSnaps.length > 1 && (
                <div className="mt-2 flex justify-center gap-1.5">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={
                                "h-1.5 rounded-full transition-all " +
                                (index === selectedIndex
                                    ? "w-4 bg-emerald-600"
                                    : "w-1.5 bg-gray-300 dark:bg-gray-600")
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PhotoCarousel;