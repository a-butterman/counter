import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './ButtonCounter.module.css';

// тип пропсов обычной кнопки
// здесь мы говорим что у нашей кнопки будут такие же пропсы как у обычной кнопки
// (чтоб не писать children, disabled, href и т.д.; они уже все описаны в DefaultButtonPropsType)
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonCounterPropsType = DefaultButtonPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onClickHandler: () => void
}

export const ButtonCounter: React.FC<ButtonCounterPropsType> = (
    {
        children,
        onClickHandler,
        disabled,
     }
) => {
    return (
        <button
            className={s.counter__button}
            onClick={onClickHandler}
            disabled={disabled}
        >{children}</button>
    );
};
