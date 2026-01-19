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
            <div className="h-screen relative">
                <main className="container mx-auto mt-30">
                    <h1 className="text-3xl mb-4">Hi!</h1>
                    <div className="flex flex-row w-full space-x-6 h-full">
                        <div className="w-xs h-80 flex-1">
                            <div className="w-xs">
                                <img src="../../../../public/doodle.jpg" alt="doodle of working on the computer"/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col flex-wrap">
                                <h1 className="text-xl ">My name is Anastasia :)</h1>
                                <p className="mt-4">
                                    This project hub was developed as part of a full-stack coding seminar at the Athens University of Economics and Business and brings together small projects that demonstrate the skills and concepts covered during the program.
                                    The project is designed to grow further, with planned additions such as backend functionality, user authentication, database integration, and REST API documentation using Swagger.
                                </p>
                                <p className="mt-2">
                                    With a Bachelor’s degree in Translation and Foreign Languages, I transitioned into software development after discovering a strong interest in coding and problem-solving.
                                    I enjoy working through complex challenges, learning new technologies, and turning ideas into functional applications.
                                    While the process can be demanding, I find that it can also be highly rewarding.
                                </p>
                                <p className="mt-2">
                                    Languages I work with: {codingLanguages.map((language) => (
                                    <span className={language.style + "mr-2"}>{language.language}</span>
                                ))}
                                </p>
                                <p className="mt-2">Bonus fact: My native language is Greek, but I also know English, German and Russian.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AboutMainContent;