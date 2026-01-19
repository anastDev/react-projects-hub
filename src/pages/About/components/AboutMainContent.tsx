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
            <div className="h-1vh">
                <main className=" container mx-auto mt-20">
                    <div className="flex flex-col w-full">
                        <div className="w-xs h-80 flex-1 mx-auto">
                            <img src="../../../../public/doodle.jpg" alt="doodle of working on the computer"/>
                        </div>
                        <div className="flex flex-col flex-wrap">
                            <h1 className="mt-2 text-xl">Hi, I’m Anastasia!</h1>

                            <p className="mt-4">
                                A Junior Software Engineer with a background in Translation and Foreign Languages.
                                I transitioned into software development through a full-stack coding seminar at the
                                Athens University of Economics and Business, focusing on practical, hands-on projects.
                            </p>

                            <p className="mt-2">
                                This hub features projects that demonstrate my full-stack development skills.
                                I have built and deployed a complete backend using Node.js, Express and MongoDB on Render
                                with a Domain Model-driven database, REST APIs, Swagger documentation and a full authentication & role-based authorization system.
                                The frontend is built with React to interact seamlessly with the backend.
                            </p>

                            <p className="mt-2">
                                Tech stack:
                                {codingLanguages.map((language) => (
                                    <span
                                        key={language.language}
                                        className={language.style + " mr-2"}
                                    >
        {language.language}
      </span>
                                ))}
                            </p>

                            <p className="mt-2">
                                Languages: Greek (native), English, German, Russian.
                            </p>

                            <div className="mt-2 space-x-2 flex flex-row gap-4">
                                <a href="">View CV</a>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default AboutMainContent;