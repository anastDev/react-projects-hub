import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {Divider} from "@/pages/home/components/Divider.tsx";
import {SkillsBadge} from "@/pages/home/components/SkillsBadge.tsx";
import {stagger} from "motion";
import {FaGithub, FaJava, FaNodeJs, FaReact, FaShieldAlt} from "react-icons/fa";
import {BsTypescript} from "react-icons/bs";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiExpressdotcom, SiGithubpages, SiPostman, SiRailway, SiRender, SiSwagger, SiWebauthn} from "react-icons/si";
import {DiMongodb, DiMysql} from "react-icons/di";
import {BiLogoSpringBoot} from "react-icons/bi";


export const TechnicalSkillsSection = () =>  {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="bg-gray-900 px-6 py-12 lg:px-[1.6rem] lg:py-20"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { delayChildren: stagger(0.15) } } }}
        >
            <div className="container mx-auto">
                <motion.div variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                }} className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-100">Technical Skills</h2>
                    <p className="mt-1 text-sm text-gray-500">Technologies I build with from UI to API to database.</p>
                </motion.div>

                <div className="flex flex-col gap-10">

                    {/* Frontend */}
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                    }}>
                        <Divider label="Frontend" />
                        <div className="flex flex-wrap gap-2.5">
                            <SkillsBadge icon={<FaReact />} name="React" />
                            <SkillsBadge icon={<BsTypescript />} name="TypeScript" />
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
                            <SkillsBadge icon={<FaNodeJs />} name="Node.js" />
                            <SkillsBadge icon={<SiExpressdotcom />} name="Express" />
                            <SkillsBadge icon={<DiMongodb />} name="MongoDB" />
                            <SkillsBadge icon={<FaJava />} name="Java" />
                            <SkillsBadge icon={<BiLogoSpringBoot />} name="Spring Boot" />
                            <SkillsBadge icon={<DiMysql />} name="MySQL"/>
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