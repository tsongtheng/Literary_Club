import pdfIcon from "../../assets/icons/pdf-icon.svg";

const pdfFiles = [
  {
    id: 1,
    title: "A",
    file: "/assets/pdf.pdf",
  },
  {
    id: 2,
    title: "B",
    file: "/assets/pdf.pdf",
  },
  {
    id: 3,
    title: "C",
    file: "/assets/pdf.pdf",
  },
  {
    id: 4,
    title: "D",
    file: "/assets/pdf.pdf",
  },
  {
    id: 5,
    title: "E",
    file: "/assets/pdf.pdf",
  },
];

const DocumentsPage = () => {
  const handleViewPdf = (pdfFileUrl: string): void => {
    window.open(pdfFileUrl, "_blank");
  };

  return (
    <main className="lg:mt-24 sm:mt-[88px] mt-[72px] ">
      <div className="h-[85vh] flex flex-col items-center gap-14 2xl:px-52 lg:py-24 xl:px-24 lg:px-16 py-16 px-8">
        <h2 className="lg:text-4xl text-3xl text-center font-bold text-gray-700">
          Documents
        </h2>

        <div className="w-auto lg:max-w-3/4 md:max-w-5/6 sm:max-w-11/12 max-w-full max-h-full rounded bg-gray-300 p-8 flex justify-center items-center gap-16 flex-wrap overflow-auto ">
          {pdfFiles.map((pdf) => (
            <div
              key={pdf.id}
              className="w-16 flex flex-col gap-2 items-center cursor-pointer hover:scale-105 transition"
              onClick={() => handleViewPdf(pdf.file)}
            >
              <img src={pdfIcon} alt="pdf-icon" />
              <p className="max-w-16 overflow-hidden  whitespace-nowrap text-overflow-ellipsis text-sm text-gray-500 font-light">
                {pdf.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DocumentsPage;
