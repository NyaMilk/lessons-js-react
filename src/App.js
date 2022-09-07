import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import Header from "./components/Header/Header";
import { SunIcon, AbortIcon } from "./components/Icons/Icons";
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <div className='wrap'>
      <Header />
      <SearchFilter />
      <Button
        className='button_size_middle button_color_primary'
        icon={<AbortIcon className='button__icon' />}
        text='Text here'
      />
      <Button
        className='button_size_middle button_color_primary'
        text='Text here'
      />
      <Button
        className='button_without-text_middle button_color_primary'
        icon={<SunIcon className='button__icon' />}
      />
    </div>
  );
}

export default App;
