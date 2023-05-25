import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop: () => void = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm ">
            {" "}
            {showTopBtn && (
                <div className="fixed bottom-14 right-4 bg-darkblue p-1 rounded text-white shadow-xl z-50 cursor-pointer">
                    <ArrowUpwardIcon
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                </div>
            )}{" "}
        </div>
    );
};
export default ScrollToTop;