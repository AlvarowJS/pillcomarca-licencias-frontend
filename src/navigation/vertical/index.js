import { File, Tag, ShoppingCart, ShoppingBag, User, Bookmark, Users } from "react-feather";

export default [
  {
    id: "administrados",
    title: "Administrados",
    icon: <Users size={20} />,
    navLink: "/administrados",
  },
  {
    id: "categorias",
    title: "Categorias",
    icon: <Tag size={20} />,
    navLink: "/categorias",
  },
  {
    id: "negocios",
    title: "Negocios",
    icon: <ShoppingCart size={20} />, 
    navLink: "/negocios",
  },
  {
    id: "subcategorias",
    title: "SubCategorías",
    icon: <Bookmark size={20} />, 
    navLink: "/subcategorias",
  },
  {
    id: "usuarios",
    title: "Usuarios",
    icon: <User size={20} />, 
    navLink: "/usuarios",
  }
]