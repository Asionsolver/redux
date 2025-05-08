import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { useEffect } from "react";
import { fetchTags } from "../../features/tags/tagsSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

export default function Tags() {
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // decided what to show based on the state
  let tagContent;

  // if the videos are loading, show the loading spinner
  if (isLoading) {
    tagContent = <Loading />;
  }

  // if there is an error, show the error message
  if (!isLoading && isError) {
    tagContent = <Error error={error} />;
  }

  // if no tags are found, show a message
  if (!isLoading && !isError && tags?.length === 0) {
    tagContent = <div className="col-span-12">No tags found</div>;
  }

  // if tags are found, show the tag grid
  if (!isLoading && !isError && tags?.length > 0) {
    tagContent = tags.map((tag) => <Tag key={tag.id} tag={tag} />);
  }

  // console.log(tagContent);

  return !isLoading && !isError && tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tagContent}
      </div>
    </section>
  ) : null;
}
