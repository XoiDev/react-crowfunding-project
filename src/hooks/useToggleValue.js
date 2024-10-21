import { useState } from "react";

export default function useToggleValue(inititalValue = false) {
  const [value, setValue] = useState(inititalValue);
  const handleToggle = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggle,
  };
}
