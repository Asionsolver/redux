import { useDispatch } from "react-redux";
import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";

import RelatedVideoList from "../components/list/RelatedVideoList";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchVideo } from "../features/video/videoSlice";
import { useSelector } from "react-redux";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";

export default function Video() {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();

  const { id, link, title, tags } = video || {};

  // Fetch video data when the component mounts
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let videoContent;

  //decide what to render based on the state
  if (isLoading) {
    videoContent = <Loading />;
  }

  if (!isLoading && isError) {
    videoContent = <Error error={error} />;
  }

  if (Object.keys(video).length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl text-red-500">No video found</h1>
      </div>
    );
  }

  // if video is found, show the video player and description
  if (!isLoading && !isError && Object.keys(video).length > 0) {
    videoContent = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />

          <VideoDescription video={video} />
        </div>

        <RelatedVideoList videoId={id} tags={tags} />
      </div>
    );
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {videoContent}
        </div>
      </section>
    </>
  );
}
