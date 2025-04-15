import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = (count: {star: number, count: number}) => {
  const colors = {
    orange: "#F2C265",
    grey: "#a9a9a9",
  };

  const stars = Array(5).fill(0);
  const rating = count.star;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      {stars.map((_, index) => {
        const full = index + 1 <= Math.floor(rating);
        const half = rating > index && rating < index + 1;

        return (
          <span key={index}>
            {full ? (
              <FaStar size={18} color={colors.orange} />
            ) : half ? (
              <FaStarHalfAlt size={18} color={colors.orange} />
            ) : (
              <FaRegStar size={18} color={colors.grey} />
            )}
          </span>
        );
      })}
      <span style={{ marginLeft: "5px", fontSize: "14px" }}>({count.count})</span>
    </div>
  );
};

export default Rating;
