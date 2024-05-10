import { forwardRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

import underConstructionGif from "../../assets/images/under-construction.gif";

interface ModalProps {}

const ComingSoonModal = forwardRef<HTMLDialogElement, ModalProps>((_, ref) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [modalElement, setModalElement] = useState<Element | null>(null);

  useEffect(() => {
    setMounted(true);
    const element = document.getElementById("modal");
    if (element) {
      setModalElement(element);
    }
  }, []);

  const handleCloseModal = () => {
    if (ref && "current" in ref && ref.current) {
      ref.current.close();
      document.body.style.overflowY = "auto";
    }
  };

  const handleCloseBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    e.preventDefault();
    if (ref && "current" in ref && ref.current && e.target === ref.current) {
      handleCloseModal();
    }
  };

  //For createPortal second argument
  if (!mounted) {
    return null;
  }

  return createPortal(
    <dialog
      ref={ref}
      className="rounded-lg  bg-yellow-400"
      onClick={handleCloseBackdrop}
    >
      <div className="flex justify-end px-3 pt-3">
        <button
          autoFocus
          onClick={handleCloseModal}
          className="text-3xl hover:text-red-800 border-2 rounded border-black hover:border-red-800 px-2 py-2 w-7 h-7 flex  justify-center items-center focus:outline-none"
        >
          &times;
        </button>
      </div>
      <div className="flex flex-col justify-center items-center z-50 2xl:w-[30vw] lg:w-[20] sm:w-[10] w-[5] rounded-lg text-center 2xl:gap-10 lg:gap-8 sm:gap-5 gap-2 p-8">
        <h1 className="sm:text-4xl text-xl font-bold">COMING SOON</h1>
        <p className="sm:text-lg text-base text-wrap">
          This Page is Under Construnction
        </p>
        <div className="sm:w-48 sm:h-32 w-32 h-24 rounded-md">
          <img
            src={underConstructionGif}
            alt="cat-typing"
            className="rounded-md object-cover w-full h-full"
          />
        </div>
      </div>
    </dialog>,
    modalElement as Element
  );
});

// Setting displayName for Modal component
ComingSoonModal.displayName = "Modal";

export default ComingSoonModal;
