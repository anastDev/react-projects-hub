import {Link} from "react-router";
import type {ElementType} from "react";

export const NavDesktop = ({ routes }: { routes: Array<{title: string, path: string,  Icon: ElementType}> }) => {
    return (
        <ul className="hidden lg:flex lg:flex-row gap-5 mt-2">
            {routes.map((route) => {
                const {title, path, Icon} = route;
                return (
                    <li key={title} className="flex item-center gap-5">
                        <Link to={path}
                              className="flex items-center gap-2 hover:text-orange-400 transition-all">
                            <Icon/>
                            {title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}