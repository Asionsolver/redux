import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ videoId, tags }) {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <RelatedVideoListItem videoId={videoId} tags={tags} />
    </div>
  );
}
