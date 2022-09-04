import React, { useEffect, useState} from "react";
import './Header.css'
import {Button} from "../Button/Button";
import {SunIcon} from "../Icons/Icons";
import {DropdownSwitcher} from "../Dropdowns/Dropdowns";

function Header() {
    const [show, setModal] = useState(false);

    useEffect(() => {
        const onClickOutside = () => setModal(false);

        if (show) {
            window.addEventListener("click", onClickOutside)
        }

        return () => window.removeEventListener('click', onClickOutside);
    }, [show]);

    const toggleModal = (e) => {
        e.stopPropagation();
        setModal(!show);
    }

    return (
        <header className="header">
            <h1 className="header__title">Список заказов</h1>
            <Button className='button_size_middle button_transparent' icon={<SunIcon className='button__icon'/>}
                    text='Светлая тема' onClick={toggleModal}/>
            {show && <DropdownSwitcher/>}
        </header>
    );
}

export default Header;