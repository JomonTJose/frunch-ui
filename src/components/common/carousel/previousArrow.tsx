import React from 'react'

interface PreviousArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const PreviousArrow = ({ className, style, onClick }: PreviousArrowProps) => {

    return (
        <div
            className={className}
            style={{ ...style, background: "white", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", padding: "4px" }}
            onClick={onClick}
        >

        </div>
    )
}

export default PreviousArrow