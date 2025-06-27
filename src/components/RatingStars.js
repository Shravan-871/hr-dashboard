import { useMemo } from "react";

export default function RatingStars() {
  // Generate a random rating between 3 and 4.5 (inclusive), in 0.5 steps
  const rating = useMemo(() => {
    const steps = [3, 3.5, 4, 4.5];
    return steps[Math.floor(Math.random() * steps.length)];
  }, []);

  return (
    <div className="text-center text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-2xl text-align-middle">
          {rating >= i + 1
            ? "★"
            : rating >= i + 0.5
            ? "☆"
            : "☆"}
        </span>
      ))}
    </div>
  );
}
  