import {useEffect, useState} from "react";
import isEqual from "lodash/isEqual"

export function useOriginByDeepCompared<T>(newData: T) {
    const [data, setData] = useState<T>(newData);
    useEffect(() => {
        if (!isEqual(data, newData)) {
            setData(newData);
        }
    }, [newData])
    return data;
}