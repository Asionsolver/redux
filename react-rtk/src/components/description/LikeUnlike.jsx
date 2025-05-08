import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function LikeUnlike({ like, unlike }) {
  // if the like and unlike are not numbers, return 0
  if (isNaN(like) || isNaN(unlike)) {
    return (
      <div className="flex gap-10 w-48">
        <div className="flex gap-1">
          <div className="shrink-0">
            <ThumbsUp />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">0</div>
        </div>
        <div className="flex gap-1">
          <div className="shrink-0">
            <ThumbsDown />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">0</div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <ThumbsUp />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {like}K
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <ThumbsDown />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlike}K
        </div>
      </div>
    </div>
  );
}
