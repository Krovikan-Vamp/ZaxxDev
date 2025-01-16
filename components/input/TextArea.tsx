'use client';
import React from 'react';

const TextArea = ({
    mainLabel = "\u00A0", // &nbsp;
    mainAltLabel = "\u00A0", // &nbsp;
    bottomLabel = "\u00A0", // &nbsp;
    maxLength = 2500, // default max length
    className = "",
    inputClassName = "",
    placeholder = "Type your message here...",
    ...props
}) => {
    return (
        <label className={`form-control ${className}`} {...props}>
            <div className={`${!mainLabel && !mainAltLabel ? "" : "hidden"} label`}>
                <span className="label-text">{mainLabel}</span>
                <span className="label-text-alt">{mainAltLabel}</span>
            </div>
            <textarea
                name='message'
                className={"textarea textarea-bordered " + inputClassName}
                placeholder={placeholder}
                maxLength={maxLength}
                {...props}
                required
            />
            <div className="label">
                <span className="label-text-alt">{bottomLabel}</span>
                <span className="label-text-alt">{maxLength} characters max</span>
            </div>
        </label>
    );
};

export default TextArea;
