import {Link} from "react-router";
import type {ElementType} from "react";
import {Separator } from "@/components/ui/separator";

export const NavDesktop = ({ routes }: { routes: Array<{title: string, path: string,  Icon: ElementType}> }) => {
    return (
        <ul className="hidden lg:flex lg:ml-3 flex-row space-x-6 mt-2">
            {routes.map((route , index) => {
                const {title, path, Icon} = route;
                return (
                    <>
                        <li key={title} className="flex item-center">
                            <Link to={path}
                                  className="flex flex-row items-center gap-2 hover:text-orange-400 group transition-all">
                                <Icon/>
                                <div className="relative overflow-hidden inline-block h-6">
                                    <div className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                        {title}
                                    </div>
                                    <div className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-orange-400">
                                        {title}
                                    </div>
                                </div>
                            </Link>
                            {index  < routes.length -1  && (
                                <Separator orientation="vertical" className="ml-4"/>
                            )}
                        </li>
                    </>
                )
            })}
        </ul>
    )
}