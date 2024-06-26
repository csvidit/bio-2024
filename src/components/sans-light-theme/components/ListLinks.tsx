import ListLink from "./ListLink";
import { listLinks } from "@/utils/list";

const ListLinks = () => {
  return (
    <>
      {listLinks.map((item, index) => {
        return (
          <ListLink key={`listLink-${index}`} href={item.href} icon={item.icon}>
            {item.label}
          </ListLink>
        );
      })}
    </>
  );
};

export default ListLinks;
