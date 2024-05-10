import galleryImg from "../../../assets/images/gallery_image.jpg";
import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section
      className={`${classes.gallery_container} xl:gap-4 sm:gap-3 gap-2  xl:p-4 sm:p-3 p-2`}
    >
      <figure className={`${classes.gallery__img_1} relative cursor-pointer`}>
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-1"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure className={`${classes.gallery__img_2} relative cursor-pointer`}>
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-2"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure className={`${classes.gallery__img_3} relative cursor-pointer`}>
        <img
          className="object-cover w-full h-full w-full h-full block"
          src={galleryImg}
          alt="gallery-image-3"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure className={`${classes.gallery__img_4} relative cursor-pointer`}>
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-4"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure className={`${classes.gallery__img_5} relative cursor-pointer`}>
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-5"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure className={`${classes.gallery__img_6} relative cursor-pointer`}>
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-6"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure className={`${classes.gallery__img_7} relative cursor-pointer`}>
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-7"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure
        className={`${classes.gallery__img_8} relative cursor-pointer lg:block hidden`}
      >
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-8"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure
        className={`${classes.gallery__img_9} relative cursor-pointer lg:block hidden`}
      >
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-9"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure
        className={`${classes.gallery__img_10} relative cursor-pointer lg:block hidden`}
      >
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-10"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure
        className={`${classes.gallery__img_11} relative cursor-pointer lg:block hidden`}
      >
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-11"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure
        className={`${classes.gallery__img_12} relative cursor-pointer lg:block hidden`}
      >
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-12"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure
        className={`${classes.gallery__img_13} relative cursor-pointer lg:block hidden`}
      >
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-13"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
      <figure
        className={`${classes.gallery__img_14} relative cursor-pointer lg:block hidden`}
      >
        <img
          className="object-cover w-full h-full block"
          src={galleryImg}
          alt="gallery-image-14"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition duration-200"></div>
      </figure>
    </section>
  );
};

export default Gallery;
