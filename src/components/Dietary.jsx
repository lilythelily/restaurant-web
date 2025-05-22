import { useState } from "react";

const Dietary = () => {
  const menuOptions = [
    {
      id: 1,
      option: "Please select",
    },
    {
      id: 2,
      option: "Vegetarian",
    },
    {
      id: 3,
      option: "Vegan",
    },
    {
      id: 4,
      option: "Dairy Free",
    },
    {
      id: 5,
      option: "Kosher",
    },
    {
      id: 6,
      option: "Halal",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0].option);

  const handleMenuChange = (e) => {
    setSelectedMenu(e.target.value);
  };

  return (
    <>
      <select
        id="dietary-option"
        value={selectedMenu}
        onChange={handleMenuChange}
      >
        {menuOptions.map((menu) => (
          <option key={menu.id} value={menu.option}>
            {menu.option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dietary;
