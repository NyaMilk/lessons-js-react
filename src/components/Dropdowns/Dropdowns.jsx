import React from "react";
import './Dropdowns.css'
import {Button} from "../Button/Button";
import {MoonIcon, SunIcon} from "../Icons/Icons";

export const DropdownSwitcher = () => {
    return (
        <div className='custom-dropdown custom-dropdown_switcher'>
            Выберите тему
            <Button className='button_size_small button_transparent' icon={<SunIcon className='button__icon'/>}
                    text='Светлая'/>
            <Button className='button_size_small button_color_primary' icon={<MoonIcon className='button__icon'/>}
                    text='Темная'/>
        </div>
    );
}