import { useState } from "react";

const Occasion = () => {
  const occasionOptions = [
    {
      id: 1,
      option: "Please select",
    },
    {
      id: 2,
      option: "Birthday",
    },
    {
      id: 3,
      option: "Engagement",
    },
    {
      id: 4,
      option: "Promotion",
    },
    {
      id: 5,
      option: "Anniversary",
    },
    {
      id: 6,
      option: "Surprise",
    },
  ];

  const [occasion, setOccation] = useState(occasionOptions[0].option);
  const handleOccasion = (e) => {
    setOccation(e.target.value);
  };

  return (
    <>
      <select id="occasion" value={occasion} onChange={handleOccasion}>
        {occasionOptions.map((item) => (
          <option key={item.id} value={item.option}>
            {item.option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Occasion;
