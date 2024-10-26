import Link from "next/link";
import { FC } from "react";

/**
 * ==> props interface
 */
interface LinkItem {
  id: number;
  href: string;
  title: string;
}

interface IProps {
  title: string;
  links: LinkItem[];
}

/**
 * ==> Component
 */
const FooterLinks: FC<IProps> = ({ title, links }) => {
  return (
    <div className="space-y-3 max-sm:w-full ">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="text-xl font-medium space-y-2">
        {links.map((link) => (
          <li key={link.id} className="text-secondary-100 duration-300 hover:text-primary hover:translate-x-2">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
