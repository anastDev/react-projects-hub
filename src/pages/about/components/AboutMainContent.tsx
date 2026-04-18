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
        <main className="min-h-screen bg-gray-900 text-gray-100 px-6">
            <div className="container mx-auto pt-20">
                <Breadcrumb >
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
            <section className="container mx-auto flex flex-col lg:flex-row gap-8 pt-10 pb-12">
                {/* Left Column - Image */}
                <div className="lg:w-1/3 flex-shrink-0">
                    <div className="w-full h-100 lg:h-84 bg-gray-800 rounded-lg overflow-hidden">
                        <img
                            src={`${import.meta.env.BASE_URL}profile-img.jpg`}
                            alt="img"
                            className="w-full h-full object-cover rounded-lg text-center"
                        />
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:w-2/3">
                    <h1 className="lg:text-4xl text-2xl font-semibold text-gray-100 mb-4">
                        Hi again, I'm Anastasia!
                    </h1>

                    <div className="space-y-4">
                        <p className="text-gray-300 text-sm lg:text-base">
                            A Junior Software Engineer with a background in Translation and Foreign Languages,
                            now focused on building clean, reliable full-stack applications.
                        </p>

                        <p className="text-gray-300 text-sm lg:text-base">
                            I transitioned into software development through a full-stack coding seminar at the
                            Athens University of Economics and Business, where I worked on hands-on, production-style
                            projects that mirror real-world development workflows.
                        </p>

                        <p className="text-gray-300 text-sm lg:text-base">
                            This portfolio showcases projects where I've designed and implemented end-to-end systems:
                        </p>

                        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm lg:text-base">
                            <li>A Node.js & Express backend deployed on Render</li>
                            <li>MongoDB with a domain-model–driven schema design</li>
                            <li>RESTful APIs documented with Swagger</li>
                            <li>Authentication & Role-based authorization</li>
                            <li>A React frontend that integrates seamlessly with the backend</li>
                        </ul>

                        <p className="text-gray-300 text-sm lg:text-base">
                            I enjoy working across the stack, with a strong focus on clear APIs, maintainable code,
                            and smooth user experience.
                        </p>

                        {/* Languages */}
                        <div className="mt-4 text-sm lg:text-base">
                            <div className="font-medium text-gray-100">Languages:</div>
                            <div className="text-gray-300">
                                Greek (native), English, German, Russian.
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 flex flex-row space-x-4">
                            <div>
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto border-2 border-orange-500 text-orange-400 bg-gray-800 hover:bg-orange-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                                >
                                    <a href="https://anastdev.github.io/my-cv/">View CV</a>
                                </Button>
                            </div>
                            <div>
                                <a href="/cv.pdf" download="Mourouzidou_CV">
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto border-2 border-orange-500 text-gray-900 bg-orange-500  hover:bg-gray-800 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                                    >
                                        Download CV
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutMainContent;