import { useDispatch } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

export default function VideGrid() {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  // decided what to show based on the state
  let content;
  // if the videos are loading, show the loading spinner
  if (isLoading) {
    content = <Loading />;
  }

  // if there is an error, show the error message
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }

  // if no videos are found, show a message
  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12">No videos found</div>;
  }
  // if videos are found, show the video grid
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
