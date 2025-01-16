import { IconType } from "react-icons";
import { IconMap, NavLink } from "./types";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiPython, SiGo, SiNginx, SiSwagger, SiSupabase, SiMongodb, SiPostgresql, SiDocker, SiGit } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrStatusUnknown } from "react-icons/gr";

export const NavLinks: NavLink[] = [
    // {
    //     "active": false,
    //     "href": `/about`,
    //     "linkText": `About`
    // },
    {
        "active": true,
        "href": `/contact`,
        "linkText": `Contact`
    },
    // {
    //     "active": false,
    //     "href": `/services`,
    //     "linkText": `Services`
    // },
    // {
    //     "active": false,
    //     "href": `/portfolio`,
    //     "linkText": `Success`
    // }
];

export const FadeInSpeed = 0.35;
export const StaggerDuration = 0.35;

export const icons: IconMap = {
    'nextjs': SiNextdotjs,
    'react': SiReact,
    'typescript': SiTypescript,
    'tailwind': SiNextdotjs,
    'python': SiPython,
    'go': SiGo,
    'nginx': SiNginx,
    'swagger': SiSwagger, 
    'supabase': SiSupabase, 
    'mongodb': SiMongodb, 
    'postgres': SiPostgresql, 
    'firebase': IoLogoFirebase,
    'docker': SiDocker,
    'git': SiGit,
};

export const reactIconFromName = (name: string): IconType => {    
    if (!icons[name]) {
        console.error(`Icon not found for ${name}`);
        return GrStatusUnknown;
    }

    return icons[name];
};