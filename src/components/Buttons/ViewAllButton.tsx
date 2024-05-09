"use client";

interface ViewAllButtonProps {
  children: React.ReactNode;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = (props) => {
  return (
    <>
      <button className="flex justify-center items-center gap-3 border border-red-800 hover:border-red-700 rounded-3xl text-red-800 text-lg px-8 py-1.5 hover:bg-red-700 hover:text-gray-100 tracking-wider transition duration-200 ease-in-out group">
        {props.children}
      </button>
    </>
  );
};

export default ViewAllButton;
