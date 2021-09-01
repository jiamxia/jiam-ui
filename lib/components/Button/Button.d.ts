import React from 'react';
export interface IButtonProps {
    onClick?: React.MouseEventHandler;
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    dashed?: boolean;
    link?: boolean;
    text?: boolean;
    round?: boolean;
    noRadius?: boolean;
    fat?: boolean;
    xLarge?: boolean;
    large?: boolean;
    small?: boolean;
    xSmall?: boolean;
    xxSmall?: boolean;
    long?: boolean;
    short?: boolean;
    success?: boolean;
    warn?: boolean;
    danger?: boolean;
    disabled?: boolean;
    href?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
/** 按钮 */
export declare const Button: (props: IButtonProps) => JSX.Element;
