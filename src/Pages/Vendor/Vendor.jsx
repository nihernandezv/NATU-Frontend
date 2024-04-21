import React, {useEffect, useState} from "react";
import "./Vendor.css";

export default function Vendor() {    
    const [subWindow1, setSubWindow1] = useState(false);
    const [subWindow2, setSubWindow2] = useState(false);
    const [subWindow3, setSubWindow3] = useState(false);
    const [subWindow4, setSubWindow4] = useState(false);

    const handleSubWindowClick = (subWindow) => {
        switch (subWindow) {
            case 1:
                setSubWindow1(!subWindow1);
                break;
            case 2:
                setSubWindow2(!subWindow2);
                break;
            case 3:
                setSubWindow3(!subWindow3);
                break;
            case 4:
                setSubWindow4(!subWindow4);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h1>Vendor</h1>;
        </div>
    );
}