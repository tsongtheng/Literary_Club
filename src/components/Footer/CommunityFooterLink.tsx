import { Link } from "react-router-dom";

type communityLinkObj = {
  id: number;
  link: string;
  to?: string;
};

const communityLinks: communityLinkObj[] = [
  { id: 2, link: "Support Us" },
  { id: 3, link: "Opportunities" },
  { id: 4, link: "Contact Us" },
  { id: 5, link: "Privacy Policy" },
];

const CommunityFooterLink = () => {
  return (
    <>
      {communityLinks.map((link) => (
        <li key={link.id}>
          <Link to="#">{link.link}</Link>
        </li>
      ))}
    </>
  );
};

export default CommunityFooterLink;
