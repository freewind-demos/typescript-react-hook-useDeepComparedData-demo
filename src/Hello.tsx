import React, {FC, useEffect, useState} from 'react';
import './Hello.pcss';
import {useOriginByDeepCompared} from "./useOriginByDeepCompared";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [_text, setText] = useState<string>('')
    const text = useOriginByDeepCompared({value: _text})

    useEffect(() => {
        console.log("### text", text);
    }, [text])

    return <div className={'Hello'}>
        <h1>
            Hello <button onClick={() => setText('react')}>React</button>
        </h1>
        <h2>{text.value}</h2>
    </div>;
}
