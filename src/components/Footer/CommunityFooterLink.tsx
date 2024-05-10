import { useRef } from "react";
import { Link } from "react-router-dom";

import ComingSoonModal from "../PopupModal/ComingSoonModal";

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
  /*************POPUP MODAL******************/
  const dialog = useRef<HTMLDialogElement>(null);

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (dialog.current) {
      dialog.current.showModal();
      document.body.style.overflowY = "hidden";
    }
  };
  /*************POPUP MODAL******************/

  return (
    <>
      <ComingSoonModal ref={dialog} />

      {communityLinks.map((link) => (
        <li key={link.id}>
          <Link to="#" onClick={handleOpenModal}>
            {link.link}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CommunityFooterLink;
