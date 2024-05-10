import { Link } from "react-router-dom";

type learnMoreLinkObj = {
  id: number;
  link: string;
  to: string;
};

const learnMoreLinks: learnMoreLinkObj[] = [
  { id: 2, link: "About", to: "/about" },
  { id: 3, link: "Team", to: "/team" },
  { id: 4, link: "Events", to: "/events" },
  { id: 5, link: "Blogs", to: "/blogs" },
  { id: 6, link: "Gallery", to: "/gallery" },
  { id: 7, link: "Docs", to: "/documents" },
];

const LearnMoreFooterLinks = () => {
  return (
    <>
      {learnMoreLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.to}>{link.link}</Link>
        </li>
      ))}
    </>
  );
};

export default LearnMoreFooterLinks;
