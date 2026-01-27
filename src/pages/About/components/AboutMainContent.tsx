import {Button} from "@/components/ui/button.tsx";

const AboutMainContent = () => {

    const codingLanguages  = [
        {language: "React", style: "rounded-md px-2 py-1 bg-cyan-300 "},
        {language: "JavaScript", style: "rounded-md px-2 py-1 bg-yellow-400 "},
        {language: "HTML", style: "rounded-md px-2 py-1 bg-orange-300 "},
        {language: "CSS", style: "rounded-md px-2 py-1 bg-blue-400 "},
        {language: "TypeScript", style: "rounded-md px-2 py-1 bg-blue-300 "},
        {language: "Python", style: "rounded-md px-2 py-1 bg-yellow-500 "},
        {language: "Java", style: "rounded-md px-2 py-1 bg-red-500 text-white "},
        {language: "Node.js", style: "rounded-md px-2 py-1 bg-green-300 "},
        {language: "MongoDB", style: "rounded-md px-2 py-1 bg-green-500 "},
        {language: "SQL", style: "rounded-md px-2 py-1 bg-gray-500 text-white "},
    ]

    return (
        <>
            <div className="h-full">
                <main className="container mx-auto">
                    <div className="flex flex-col w-full">
                        <div className="w-xs h-80 flex-1 mx-auto">
                            <img src="../../../../public/doodle.jpg" alt="doodle of working on the computer"/>
                        </div>
                        <div className="flex flex-col flex-wrap">
                            <h1 className="mt-2 text-xl">Hi, I’m Anastasia!</h1>

                            <p className="mt-4">
                                I’m a Junior Software Engineer with a background in Translation and Foreign Languages, now focused on building clean, reliable full-stack applications.
                            </p>
                            <p className="mt-1">
                                I transitioned into software development through a full-stack coding seminar at the Athens University of Economics and Business, where I worked on hands-on, production-style projects that mirror real-world development workflows.
                            </p>

                            <p className="mt-2">
                                This portfolio showcases projects where I’ve designed and implemented end-to-end systems:
                            </p>

                            <ul className="list-disc list-inside">
                                <li>A Node.js & Express backend deployed on Render</li>
                                <li>MongoDB with a domain-model–driven schema design</li>
                                <li>RESTful APIs documented with Swagger</li>
                                <li>Authentication & role-based authorization</li>
                                <li>A React frontend that integrates seamlessly with the backend</li>
                            </ul>
                            <p>I enjoy working across the stack, with a strong focus on clear APIs, maintainable code, and smooth user experience.</p>

                            <div className="my-2">
                                <div className="mb-2 font-medium">Tech stack:</div>
                                {codingLanguages.map((language) => (
                                    <span
                                        key={language.language}
                                        className={language.style + " mr-2"}
                                    >
        {language.language}
      </span>
                                ))}
                            </div>

                            <div className="mt-2">
                                <div className="font-medium"> Languages:</div>
                               <div> Greek (native), English, German, Russian.</div>
                            </div>

                            <div className="mt-4">
                               <Button variant="outline">View CV</Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AboutMainContent;