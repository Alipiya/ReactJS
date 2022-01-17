import React from 'react';
import styles from './Message.module.css';

export const Message = ({ messageProps }) => {

    return (<ol className={styles.text}>
        <li>Развернуть новый проект с использованием create-react-app.</li>
        <li>Создать компонент Message, отображающий переданный ему пропсом текст.</li>
        <li>Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст (константу).</li>
        <li>Стилизовать компоненты через css (при желании можно использовать less или sass, однако для sass нужно дополнительно установить node-sass: документация CRA).</li>
        <li>Установить расширение React Devtools.</li>
        <br></br>
        <br></br>
        <br></br>
        <p className={styles.textProps}>{messageProps}</p>
    </ol>
    )
}