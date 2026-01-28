import {Button} from "@/components/ui/button.tsx";

const AboutMainContent = () => {

    const codingLanguages = [
        { language: "React" },
        { language: "JavaScript" },
        { language: "HTML" },
        { language: "CSS" },
        { language: "TypeScript" },
        { language: "Python" },
        { language: "Java" },
        { language: "Node.js" },
        { language: "MongoDB" },
        { language: "SQL" },
    ];

    return (
        <>
            <div className="h-full bg-gray-900 text-gray-100">
                <main className="container mx-auto">
                    <div className="flex flex-col w-full">
                        {/* Image */}
                        <div className="w-xs h-80 flex-1 mx-auto">
                            <img
                                src="../../../../public/doodle.jpg"
                                alt="Doodle of working on the computer"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-wrap">
                            <h1 className="mt-2 text-xl font-semibold text-gray-100">
                                Hi, I’m Anastasia!
                            </h1>

                            <p className="mt-4 text-gray-300">
                                I’m a Junior Software Engineer with a background in Translation and Foreign Languages,
                                now focused on building clean, reliable full-stack applications.
                            </p>

                            <p className="mt-1 text-gray-300">
                                I transitioned into software development through a full-stack coding seminar at the
                                Athens University of Economics and Business, where I worked on hands-on, production-style
                                projects that mirror real-world development workflows.
                            </p>

                            <p className="mt-2 text-gray-300">
                                This portfolio showcases projects where I’ve designed and implemented end-to-end systems:
                            </p>

                            <ul className="list-disc list-inside text-gray-300">
                                <li>A Node.js & Express backend deployed on Render</li>
                                <li>MongoDB with a domain-model–driven schema design</li>
                                <li>RESTful APIs documented with Swagger</li>
                                <li>Authentication & role-based authorization</li>
                                <li>A React frontend that integrates seamlessly with the backend</li>
                            </ul>

                            <p className="mt-2 text-gray-300">
                                I enjoy working across the stack, with a strong focus on clear APIs, maintainable code,
                                and smooth user experience.
                            </p>

                            {/* Tech stack */}
                            <div className="my-4">
                                <div className="mb-2 font-medium text-gray-100">Tech stack:</div>
                                {codingLanguages.map((language) => (
                                    <span
                                        key={language.language}
                                        className="inline-block rounded-md px-2 py-1 mr-2 mb-2 bg-gray-800 text-gray-200 border border-gray-700 hover:border-orange-400 hover:text-orange-400 transition-colors"
                                    >
                                        {language.language}
                                    </span>
                                ))}
                            </div>

                            {/* Languages */}
                            <div className="mt-2">
                                <div className="font-medium text-gray-100">Languages:</div>
                                <div className="text-gray-300">
                                    Greek (native), English, German, Russian.
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-4">
                                <Button
                                    variant="outline"
                                    className="border-2 border-orange-500 text-orange-400 bg-gray-800 hover:bg-orange-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                                >
                                    View CV
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default AboutMainContent;