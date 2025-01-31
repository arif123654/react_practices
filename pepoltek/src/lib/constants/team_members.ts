import { TeamMemberProps } from './../services/TeamMemberProps';
import CEO from"./../../assets/team/CEO.jpeg";
import CTO from"./../../assets/team/CTO.jpeg";
import CFO from"./../../assets/team/CFO.jpeg";
import COO from"./../../assets/team/COO.jpeg";

export let members:TeamMemberProps[]  = [
    
    {
        id: 1,
        name: "Larry F. Burnett(CEO)",
        title: "CEO",
        imageUrl: CEO
    },
    {
        id: 2,
        name: "Meghan J. Webb",
        title: "CTO",
        imageUrl: CTO
    },
    {
        id: 3,
        name: "Yvonne J. Cullum",
        title: "CFO",
        imageUrl: CFO
    },
    {
        id: 4,
        name: "Diana H. Williams",
        title: "COO",
        imageUrl: COO
    },

]