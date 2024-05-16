import BlogsCard from "../../Cards/BlogsCard";
import cardImg from "../../../assets/images/blogs_card_image.jpg";
import authorImg from "../../../assets/images/author_image.jpg";
import ViewAllButton from "../../Buttons/ViewAllButton";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    topic: "Sociology",
    time: "3 min",
    blogImage: cardImg,
    heading: "Social Movements and Activism",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    authorImage: authorImg,
    authorName: "Emily Chang",
  },
  {
    id: 2,
    topic: "technology",
    time: "5 min",
    blogImage: cardImg,
    heading: "What's New in 2024 Tech",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    authorImage: authorImg,
    authorName: "Benjamin Patel",
  },
  {
    id: 3,
    topic: "History",
    time: "8 min",
    blogImage: cardImg,
    heading: "The Industrial Revolution",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    authorImage: authorImg,
    authorName: "Jessica Rodriguez",
  },
];

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Blogs = () => {
  // const data: blogsCardProps = await getData();

  const cardDataHome = cardsData.slice(0, 3);

  return (
    <section className="w-full 2xl:px-52 lg:py-24 xl:px-24 lg:px-16 py-16 px-8 flex flex-col gap-16 bg-gray-200">
      <h2 className="lg:text-4xl text-3xl font-bold lg:mb-6 mb-0 text-gray-700">
        Our latest Blogs
      </h2>
      <div className="w-full flex justify-evenly gap-8 items-center flex-wrap">
        {cardDataHome.map((data) => (
          <BlogsCard key={data.id} {...data} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/blogs">
          <ViewAllButton />
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
