import { Link } from "react-router";

export default function VideoGridItem({ video = {} }) {
  // console.log(video);
  const { id, title, thumbnail, author, views, date, duration, avatar } = video;
  // console.log(id);

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`/videos/${id}`}>
            <img src={thumbnail} className="w-full h-auto" alt={title} />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Link to={`/videos/${id}`} className="shrink-0">
            <img src={avatar} className="rounded-full h-6 w-6" alt={author} />
          </Link>

          <div className="flex flex-col">
            <Link to={`/videos/${id}`}>
              <p className="text-slate-900 text-sm font-semibold">
                {title.length > 50 ? title.slice(0, 50) + "..." : title}
              </p>
            </Link>
            <Link
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              to="/"
            >
              {author.length > 30 ? author.slice(0, 30) + "..." : author}
            </Link>
            <p className="text-gray-400 text-xs mt-1">
              {views} views • {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// author
// :
// "Learn with Sumit"
// avatar
// :
// "https://avatars.githubusercontent.com/u/73503432?v=4"
// date
// :
// "Oct 15, 2021"
// description
// :
// "Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I have explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways."
// duration
// :
// "10:12"
// id
// :
// 7
// likes
// :
// 0
// link
// :
// "https://www.youtube-nocookie.com/embed/smDa6hoxLKI"
// tags
// :
// (3) ['tailwind', 'css', 'ui']
// thumbnail
// :
// "https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg"
// title
// :
// "Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS"
// unlikes
// :
// 0
// views
// :
// "2.1k"
