import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {Divider} from "@/pages/home/components/Divider.tsx";
import {SkillsBadge} from "@/pages/home/components/SkillsBadge.tsx";
import {stagger} from "motion";
import {FaGithub, FaJava, FaNodeJs, FaPython, FaReact, FaShieldAlt} from "react-icons/fa";
import {BsTypescript} from "react-icons/bs";
import {RiTailwindCssFill} from "react-icons/ri";
import {
    SiFastapi, SiFirebase,
    SiGithubpages,
    SiPostman,
    SiRailway,
    SiRender,
    SiSwagger,
    SiWebauthn
} from "react-icons/si";
import {DiMongodb, DiMysql} from "react-icons/di";
import {BiLogoSpringBoot} from "react-icons/bi";

export const TechnicalSkillsSection = () =>  {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="px-6 py-12 lg:px-[1.6rem] lg:py-20"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { delayChildren: stagger(0.15) } } }}
        >
            <div className="container mx-auto">
                <motion.div variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                }} className="mb-10">
                    <h2 className="font-mono text-xs text-orange-400 tracking-[0.15em] uppercase mb-2">Technical Skills</h2>
                    <p className="text-sm text-gray-500 mt-2">Highlighted are what I reach for first.</p>
                </motion.div>

                <div className="flex flex-col gap-10">

                    {/* Frontend */}
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                    }}>
                        <Divider label="Frontend" />
                        <div className="flex flex-wrap gap-2.5">
                            {/* Frontend */}
                            <SkillsBadge icon={<FaReact />} name="React" primary />
                            <SkillsBadge icon={<BsTypescript />} name="TypeScript" primary />
                            <SkillsBadge icon={<RiTailwindCssFill />} name="Tailwind CSS" />
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                    }}>
                        <Divider label="Backend" />
                        <div className="flex flex-wrap gap-2.5">
                            <SkillsBadge icon={<FaNodeJs />} name="Node.js" primary />
                            <SkillsBadge icon={<FaPython />} name="Python" primary />
                            <SkillsBadge icon={<SiFastapi />} name="FastAPI" primary />
                            <SkillsBadge icon={<DiMongodb />} name="MongoDB" />
                            <SkillsBadge icon={<DiMysql />} name="MySQL" />
                            <SkillsBadge icon={<FaJava />} name="Java" />
                            <SkillsBadge icon={<BiLogoSpringBoot />} name="Spring Boot" />
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                    }}>
                        <Divider label="Tools & DevOps" />
                        <div className="flex flex-wrap gap-2.5">
                            <SkillsBadge icon={<FaGithub />} name="Git & GitHub" />
                            <SkillsBadge icon={<SiWebauthn />} name="JWT Auth" />
                            <SkillsBadge icon={<FaShieldAlt />} name="Zod" />
                            <SkillsBadge icon={<SiFirebase />} name="Firebase Storage" />
                            <SkillsBadge icon={<SiPostman />} name="Postman" />
                            <SkillsBadge icon={<SiSwagger />} name="Swagger" />
                            <SkillsBadge icon={<SiRailway />} name="Railway" />
                            <SkillsBadge icon={<SiRender />} name="Render"/>
                            <SkillsBadge icon={<SiGithubpages />} name="Github Pages" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}