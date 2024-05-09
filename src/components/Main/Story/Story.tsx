const Story = () => {
  return (
    <section className="w-full flex lg:flex-row flex-col text-white text-center">
      <div className="w-full p-8 flex flex-col justify-center items-center bg-red-800 gap-2">
        <h2 className="lg:text-4xl text-3xl font-bold">Our Mission</h2>
        <p>Promoting literacy through literature</p>
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-center bg-blue-600 gap-2">
        <h2 className="lg:text-4xl text-3xl font-bold">
          Participate in Events
        </h2>
        <p>Register & Help Make change</p>
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-center bg-blue-900 gap-2">
        <h2 className="lg:text-4xl text-3xl font-bold">Get Involved</h2>
        <p>Volunteer, Participate, or Donate</p>
      </div>
    </section>
  );
};

export default Story;
