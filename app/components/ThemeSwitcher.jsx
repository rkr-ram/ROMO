import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { switchThemeDuration } from "../constants";
import { GiMoonBats } from "react-icons/gi";
import { BsFillCloudSunFill } from "react-icons/bs";

const themes = {
  dark: { name: "light", icon: () => <GiMoonBats /> },
  light: { name: "dark", icon: () => <BsFillCloudSunFill /> },
};

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  };
  
  const Icon = themes[theme].icon;

  return (
    <button
      className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 ${switchThemeDuration} bg-[#212933]`}
      onClick={() => setTheme(themes[theme].name)}
    >
      <Icon />
    </button>
  );
};

export default ThemeSwitcher;
