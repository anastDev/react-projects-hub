import {routes} from "@/components/layout/Header/routes.ts";
import {Link} from "react-router";

export const NavDesktop = () => {
    return (
        <ul className="hidden lg:flex lg:flex-row gap-5">
            {routes.map((route) => {
                const {title, path, Icon} = route;
                return (
                    <li className="flex item-center gap-5">
                        <Link to={path}
                           className="flex items-center gap-2 hover:text-neutral-400 transition-all">
                            <Icon/>
                            {title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}