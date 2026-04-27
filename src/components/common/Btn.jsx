import React from 'react'

function Btn({ variant = "solid", size = "md", children, className, ...props }) {
    
    // 1. Your Custom Color Types
    const variantStyle = {
        blue: "bg-[#2196F3] text-white border-blue-600 hover:bg-blue-500",
        white: "bg-white text-blue-600 border-blue-600 hover:bg-blue-50",
        black: "bg-black text-white border-white"
    }

    // 2. Size now only controls text, since padding is global
    const sizeStyle = {
        sm: "text-[12px]",
        md: "text-[16px]",
        lg: "text-[20px]"
    }

    // 3. BASE STYLE: Added your specific padding here
    // p-2 = top/bottom | px-6 = left/right (shorthand for pr-6 pl-6)
    const baseStyle = "inline-flex items-center justify-center font-semibold rounded-lg border transition-all duration-200 p-2 px-6 active:scale-95"

    return (
        <button 
            className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Btn