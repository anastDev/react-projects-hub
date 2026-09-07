import {Button} from "@/components/ui/button.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const STACK = [
    { name: "Node.js", primary: true },
    { name: "Express", primary: true },
    { name: "Python", primary: true },
    { name: "FastAPI", primary: true },
    { name: "React", primary: true },
    { name: "TypeScript", primary: true },
    { name: "Java" },
    { name: "Spring Boot" },
    {name: "MongoDB" },
    {name: "Firebase Storage"},
    { name: "REST APIs" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Docker" },
];

const LANGUAGES = ["Greek", "English", "German", "Russian"];

const AboutMainContent = () => {
    return (
        <main className="min-h-screen text-gray-100">

            <div className="container mx-auto px-6 pt-20 lg:px-[1.6rem]">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-gray-400 hover:text-orange-300">
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-gray-500" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-gray-400">About</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <section className="container mx-auto flex flex-col gap-12 px-6 pb-16 pt-10 lg:flex-row lg:px-[1.6rem]">

                {/* ---------- Left column ---------- */}
                <div className="flex flex-shrink-0 flex-col gap-6 lg:w-1/3">
                    <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 lg:aspect-auto lg:h-80">
                        <img
                            src={`${import.meta.env.BASE_URL}/profile-cat.jpeg`}
                            alt="Anastasia"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="space-y-4 rounded-2xl border border-white/10 bg-gray-900/50 p-5 backdrop-blur">
                        <div>
                            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-orange-300">
                                Based in
                            </p>
                            <p className="text-sm text-gray-300">Gothenburg, Sweden</p>
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <div>
                            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-orange-300">
                                Background
                            </p>
                            <p className="text-sm text-gray-300">
                                Translation &amp; Interpreting → Software Engineering
                            </p>
                        </div>

                        <div className="h-px w-full bg-white/10" />

                        <div>
                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-orange-300">
                                Languages
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {LANGUAGES.map((lang) => (
                                    <span
                                        key={lang}
                                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                                    >
                                        {lang}
                                    </span>
                                ))}
                                <span className="rounded-full border border-orange-300/40 bg-orange-400/10 px-2.5 py-1 text-xs text-orange-300">
                                    Swedish (SFI learning)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- Right column ---------- */}
                <div className="flex flex-col gap-8 lg:w-2/3">

                    <div>
                        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.15em] text-orange-300">
                            About me
                        </span>

                        <h1
                            className="mb-4 text-3xl font-medium leading-tight text-gray-100 lg:text-4xl"
                            style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                            Curious by nature,{" "}
                            <em className="not-italic text-orange-300">building to learn.</em>
                        </h1>

                        <p className="text-sm leading-relaxed text-gray-300 lg:text-base">
                            I came to software through languages — literally. My background is in
                            Translation and Interpreting, which turned out to be better preparation
                            than I expected: both are about understanding systems, finding the right
                            structure, and making things make sense to someone else.
                        </p>
                    </div>

                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-orange-300">
                            How I got here
                        </p>
                        <p className="text-sm leading-relaxed text-gray-300 lg:text-base">
                            I moved into development through a full-stack bootcamp at the Athens
                            University of Economics and Business, with production-style projects from
                            day one. Since then I&apos;ve been building on my own — including a web app
                            for a car dealership in Coventry that&apos;s live and handling real
                            bookings.
                        </p>
                    </div>

                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-orange-300">
                            What I work with
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {STACK.map((tech) => (
                                <span
                                    key={tech.name}
                                    className={
                                        tech.primary
                                            ? "rounded-full border border-orange-300/40 bg-orange-400/10 px-2.5 py-1 text-xs text-orange-300"
                                            : "rounded-full border border-white/10 bg-gray-900/50 px-2.5 py-1 text-xs text-gray-300 backdrop-blur"
                                    }
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                            Highlighted are what I reach for first.
                        </p>
                    </div>

                    <div className="flex flex-row gap-3 pt-2">
                        <a
                            href="https://anastdev.github.io/my-cv/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-200 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:bg-transparent hover:text-orange-300"
                            >
                                View CV
                            </Button>
                        </a>

                        <a href={`${import.meta.env.BASE_URL}/cv.pdf`} download="Mourouzidou_CV">
                            <Button className="cursor-pointer rounded-full bg-orange-400 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-orange-300">
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