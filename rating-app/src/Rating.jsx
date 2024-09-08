import { useState } from "react";

function Rating() {
  const [selectedRating, setSelectedRating] = useState(null);
  console.log(selectedRating);
  const ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleRatingClick = (value) => {
    setSelectedRating(value);
  };

  return (
    <div className="rating-container">
      {ratings.map((item, index) => (
        <div
          key={index}
          className="circle"
          style={{
            backgroundColor:
              selectedRating !== null && item <= selectedRating
                ? "lightgray"
                : "white",
          }}
          onClick={() => handleRatingClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Rating;
