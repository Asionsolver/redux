import VideGrid from "../components/grid/VideoGrid";

import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

export default function Home() {
  return (
    <>
      <Tags />
      <VideGrid />
      <Pagination />
    </>
  );
}
