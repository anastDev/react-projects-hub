import {Button} from "@/components/ui/button.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const AboutMainContent = () => {
    return (
        <main className="min-h-screen bg-gray-900 text-gray-100">

            <div className="container mx-auto px-6 lg:px-[1.6rem] pt-20">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-gray-400 hover:text-orange-400">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-gray-400" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-gray-400">About</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Hero row */}
            <section className="container mx-auto px-6 lg:px-[1.6rem] flex flex-col lg:flex-row gap-12 pt-10 pb-16">

                {/* Left — image + quick facts */}
                <div className="lg:w-1/3 flex-shrink-0 flex flex-col gap-6">
                    <div className="w-full aspect-square h-100 lg:aspect-auto lg:h-80 bg-gray-800 rounded-2xl overflow-hidden">
                        <img
                            src={`${import.meta.env.BASE_URL}/profile-cat.jpeg`}
                            alt="Anastasia"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Quick facts card — sits naturally below the image */}
                    <div className="rounded-2xl border border-white/[0.06] bg-gray-800/50 p-5 space-y-4">
                        <div>
                            <p className="font-mono text-[10px] text-orange-400 tracking-[0.15em] uppercase mb-1">Based in</p>
                            <p className="text-sm text-gray-300">Gothenburg, Sweden</p>
                        </div>
                        <div className="w-full h-px bg-white/[0.06]" />
                        <div>
                            <p className="font-mono text-[10px] text-orange-400 tracking-[0.15em] uppercase mb-1">Background</p>
                            <p className="text-sm text-gray-300">Translation & Interpreting → Software Engineering</p>
                        </div>
                        <div className="w-full h-px bg-white/[0.06]" />
                        <div>
                            <p className="font-mono text-[10px] text-orange-400 tracking-[0.15em] uppercase mb-2">Languages</p>
                            <div className="flex flex-wrap gap-2">
                                {["Greek", "English", "German", "Russian"].map((lang) => (
                                    <span
                                        key={lang}
                                        className="rounded-md bg-gray-700/50 px-2.5 py-1 text-xs text-gray-300"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — content */}
                <div className="lg:w-2/3 flex flex-col gap-8">

                    {/* Heading */}
                    <div>
                        <span className="font-mono text-xs text-orange-400 tracking-[0.15em] uppercase mb-4 flex items-center gap-3">
                            About me
                        </span>
                        <h1
                            className="text-3xl lg:text-4xl font-medium text-gray-100 mb-4 leading-tight"
                            style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                            Curious by nature,{" "}
                            <em className="text-orange-400 not-italic">building to learn.</em>
                        </h1>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            I came to software through languages, like literally. My background is in Translation
                            and Interpreting, which turned out to be better preparation than I expected:
                            both are about understanding systems, finding the right structure and making
                            things make sense to someone else.
                        </p>
                    </div>

                    {/* Journey block */}
                    <div>
                        <p className="font-mono text-xs text-orange-400 tracking-[0.15em] uppercase mb-3">How I got here</p>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            I transitioned into development through a full-stack bootcamp at the Athens
                            University of Economics and Business with hands-on, production-style projects from
                            day one. Now based in Gothenburg, I'm focused on building a portfolio that
                            reflects real engineering thinking, not just tutorials.
                        </p>
                    </div>

                    {/* Stack block */}
                    <div>
                        <p className="font-mono text-xs text-orange-400 tracking-[0.15em] uppercase mb-3">What I work with</p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Java", "Spring Boot", "Node.js", "TypeScript",
                                "React", "REST APIs", "MongoDB", "MySQL", "PostgreSQL", "Docker"
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg border border-gray-700 bg-gray-800 px-2.5 py-1 text-xs text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-row gap-3 pt-2">
                        <a href="https://anastdev.github.io/my-cv/" target="_blank">
                            <Button
                                variant="outline"
                                className="cursor-pointer rounded-lg border border-gray-200 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-transform hover:-translate-y-0.5 hover:bg-transparent hover:text-orange-400 hover:border-orange-500"
                            >
                                View CV
                            </Button>
                        </a>
                        <a href={`${import.meta.env.BASE_URL}/cv.pdf`} download="Mourouzidou_CV">
                            <Button className="cursor-pointer rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-gray-900 transition-transform hover:-translate-y-0.5 hover:bg-orange-400">
                                Download CV
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutMainContent;