import { title } from "process";
import { File, Tag, FileText, BarChart, UserCheck, Table, Edit, UserMinus, ShoppingCart, ShoppingBag, User, Bookmark } from "react-feather";

export default [
  {
    id: "adiministrados",
    title: "Administrados",
    icon: <User size={20} />,
    navLink: "/administrados",
  },
  {
    id: "categorias",
    title: "Categorias",
    icon:<Bookmark size={20}/>,
    navLink: "/categorias",
  },
  {
    id: "negocios",
    title:"Negocios",
    icon:<ShoppingBag size={20}/>,
    navLink:"/negocios",
  },
  {
    id: "subcategorias",
    title:"SubCategorias",
    icon:<Tag size={20}/>,
    navLink:"/subcategorias"
  }
];

