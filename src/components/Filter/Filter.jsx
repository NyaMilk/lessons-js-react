import React, {useEffect, useState} from "react";
import './Filter.css'
import {Button} from "../Button/Button";
import {SearchIcon, XMefiumIcon} from "../Icons/Icons";
import {InputSearchbar} from "../Inputs/Inputs";

function Filter() {
    const [text, setText] = useState('');
    const inputChange = (e) => {
        setText(e.target.value);
    }

    const clearInput = () => {
        setText('');
    }

    return (
        <section className="filters">
            <div className="searchbar__groups">
                <InputSearchbar icon={<SearchIcon className='custom-searchbar__icon'/>} type='text'
                                placeholder='Номер заказа или ФИО' onChange={inputChange} value={text}/>
                <Button className='button_without-text_small button_transparent custom-input__button'
                        icon={<XMefiumIcon className='button__icon custom-searchbar__icon'/>}
                        onClick={clearInput}/>
            </div>
        </section>
    );
}

export default Filter;