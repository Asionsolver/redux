const Error = ({ error }) => {
  return (
    <div className="col-span-12 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
      <span className="block sm:inline">
        {error || "Something went wrong!"}
      </span>
    </div>
  );
};

export default Error;
