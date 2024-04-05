import ListLink from "./ListLink";
import { list } from "@/utils/list";

const ListLinks = () => {
  return (
    <>
    {list.map((item, index) => {
      return (
        <ListLink
          key={index}
          href={item.href}
          icon={item.icon}>
            {item.label}
            </ListLink>)
    })}
    </>
  );
};

export default ListLinks;
