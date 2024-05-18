// import { useState } from "react";
// import styles from "./Buttons.module.css";

// const Buttons = () => {
//   let i = 0;

//   let [initialValue, setInitialValue] = useState(i);

//   const handleClickUp = () => {
//     setInitialValue(initialValue++);
//   };

//   const handleClickDown = () => {
//     initialValue >= 0 ? setInitialValue(initialValue--) : initialValue;
//   };

//   const handleClickReset = () => {
//     setInitialValue(i);
//   };

//   return (
//     <>
//       <input
//         className={styles.inputClass}
//         type="number"
//         name=""
//         id=""
//         value={initialValue}
//       />
//       <button type="button" className="bg-red-600 m-10" onClick={handleClickUp}>
//         Increment
//       </button>
//       <button
//         type="submit"
//         className="bg-red-600 m-10"
//         onClick={handleClickDown}
//       >
//         Decreament
//       </button>
//       <button
//         type="submit"
//         className="bg-red-600 m-10"
//         onClick={handleClickReset}
//       >
//         Reset
//       </button>
//     </>
//   );
// };

// export default Buttons;

import { useState } from "react";
import styles from "./Buttons.module.css";

const Buttons = () => {
  const [initialValue, setInitialValue] = useState(0);

  const handleClickUp = () => {
    setInitialValue((prevValue) => prevValue + 1);
  };

  const handleClickDown = () => {
    initialValue > 0 && setInitialValue((prevValue) => prevValue - 1);
  };

  const handleClickReset = () => {
    setInitialValue(0);
  };

  return (
    <div>
      <div className={styles.buttonMainClass}>
        <input
          className={styles.inputClass}
          type="number"
          name=""
          id=""
          value={initialValue}
        />
        <button
          type="button"
          className="text-[#aeff2c] m-10 mx-auto md:text-[40px]"
          onClick={handleClickUp}
        >
          Increment
        </button>
        <button
          type="button"
          className="text-[#ffd643] m-10 mx-auto md:text-[40px]"
          onClick={handleClickDown}
        >
          Decrement
        </button>
        <button
          type="button"
          className="text-[#ff3f3f] m-10 mx-auto md:text-[40px]"
          onClick={handleClickReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Buttons;

// dont pass the state variable directly
