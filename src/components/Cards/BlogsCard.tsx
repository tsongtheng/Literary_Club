import { blogsCardProps } from "../../types/types";

const BlogsCard = (props: blogsCardProps) => {
  return (
    <div
      key={props.id}
      className="w-80 flex flex-col justify-between gap-3 hover:-translate-y-2 hover:scale-105 hover:drop-shadow-lg transition duration-400 ease-in-out  cursor-pointer bg-white rounded-lg group"
    >
      <figure className="relative w-full h-[215px]">
        <img src={props.blogImage} alt="props Image" className="rounded-t-lg" />
      </figure>

      <div className="p-3 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-red-700">{props.topic}</p>
          <p className="text-sm text-gray-500">{`· ${props.time} read`}</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-700">{props.heading}</h3>
        <p className="text-sm text-justify text-gray-500 tracking-tight">
          {props.description}
        </p>
      </div>

      <div className="p-3 flex gap-2">
        <figure className="w-8 h-8 rounded-full">
          <img
            src={props.authorImage}
            alt="author-image"
            className="rounded-full"
          />
        </figure>

        <div>
          <p className="font-semibold text-xs">{props.authorName}</p>
          <p className="text-sm text-gray-500">Date</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
