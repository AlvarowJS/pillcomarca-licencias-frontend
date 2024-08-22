import { title } from "process";
import { File, Tag, FileText, BarChart, UserCheck, Table, Edit, UserMinus } from "react-feather";

export default [
  {
    id: "adiministrados",
    title: "Administrados",
    icon: <Tag size={20} />,
    navLink: "/administrados",
  },
  {
    id: "categorias",
    title: "Categorias",
    icon:<Tag size={20}/>,
    navLink: "/categorias",
  },
  {
    id: "negocios",
    title:"Negocios",
    icon:<Tag size={20}/>,
    navLink:"/negocios",
  },
  {
    id: "subcategorias",
    title:"SubCategorias",
    icon:<Tag size={20}/>,
    navLink:"/subcategorias"
  }
];

