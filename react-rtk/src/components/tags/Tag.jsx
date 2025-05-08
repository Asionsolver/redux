export default function Tag({ tag = {} }) {
  const { title } = tag;
  // console.log(tag);

  return (
    <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
      <p className="text-sm font-semibold">{title}</p>
    </div>
  );
}
