import {motion} from "framer-motion";

interface JourneyStopProps {
    year: string;
    title: string;
    place: string;
    blurb: string;
    isLeft: boolean;
    index: number;
}

const JourneyStop = ({ year, title, place, blurb, isLeft, index }: JourneyStopProps) => {

    return (
        <motion.div
            className="relative flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-900" />
            </div>

            <div
                className={`w-full lg:w-5/12 ${
                    isLeft
                        ? "lg:pr-12 lg:text-right pl-12 lg:pl-0"
                        : "lg:ml-auto lg:pl-12 pl-12"
                }`}
            >
                <div className="inline-block bg-gray-800/60 backdrop-blur border border-gray-700 rounded-xl p-5 lg:p-6 hover:border-orange-400/50 transition-colors">
                    <div className="text-orange-400 text-sm font-medium mb-1">{year}</div>
                    <h3 className="text-gray-100 text-lg lg:text-xl font-medium mb-1">{title}</h3>
                    <div className="text-gray-400 text-sm mb-3">{place}</div>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{blurb}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default JourneyStop;