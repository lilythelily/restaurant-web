import { useState } from "react";

const Dietary = () => {
  const menuOptions = [
    {
      id: 1,
      option: "Vegetarian",
    },
    {
      id: 2,
      option: "Vegan",
    },
    {
      id: 3,
      option: "Dairy Free",
    },
    {
      id: 4,
      option: "Kosher",
    },
    {
      id: 5,
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
