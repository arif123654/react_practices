import { ProcessCardProps } from "../services/ProcessesCardProps";

import research from "../../assets/icons/research.png";
import design from "../../assets/icons/design.png";
import dev from "../../assets/icons/dev.png";
import test from "../../assets/icons/test.png";

export let processes: ProcessCardProps[] = [ 
    { 
        icon: research, 
        title: "Research", 
        description: "Fast load times and lag free interaction, my highest priority.", 
        number: "01", 
    }, 
    { 
        icon: design, 
        title: "Design", 
        description: "We build solutions that lead your business to success.", 
        number: "02", 
    }, 
    { 
        icon: dev, 
        title: "Develop", 
        description: "We develop mobile first applications for a seamless experience.", 
        number: "03", 
    }, 
    { 
        icon: test, 
        title: "Test", 
        description: "We develop custom solutions to cater to your needs.", 
        number: "04", 
    }, 
];