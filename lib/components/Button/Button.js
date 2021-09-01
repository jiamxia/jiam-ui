import React from 'react';
import classNames from 'classnames';
/** 按钮 */
export var Button = function (props) {
    var tempClassName = props.className, style = props.style, onClick = props.onClick, children = props.children, primary = props.primary, secondary = props.secondary, outline = props.outline, dashed = props.dashed, link = props.link, text = props.text, round = props.round, noRadius = props.noRadius, fat = props.fat, xLarge = props.xLarge, large = props.large, small = props.small, xSmall = props.xSmall, xxSmall = props.xxSmall, long = props.long, short = props.short, href = props.href, success = props.success, danger = props.danger, warn = props.warn, disabled = props.disabled;
    var className = classNames({
        'br-button': true,
        'br-button-primary': primary,
        'br-button-secondary': secondary && !text,
        'br-button-outline': outline,
        'br-button-dashed': dashed,
        'br-button-link': link,
        'br-button-text': text && !secondary,
        'br-button-text-secondary': secondary && text,
        'br-button-round': round,
        'br-button-rectangle': noRadius,
        'br-button-fat': fat,
        'br-button-xl': xLarge,
        'br-button-lg': large,
        'br-button-sm': small,
        'br-button-xs': xSmall,
        'br-button-xxs': xxSmall,
        'br-button-long': long,
        'br-button-short': short,
        'br-button-success': success,
        'br-button-warn': warn,
        'br-button-danger': danger,
        'br-button-disabled': disabled,
    }, tempClassName);
    if (href) {
        return (React.createElement("a", { className: className, style: style, onClick: onClick, href: href }, children));
    }
    else {
        return (React.createElement("button", { type: "button", className: className, style: style, onClick: onClick, disabled: disabled },
            React.createElement("span", { className: "jiam-button__content" }, children)));
    }
};
//# sourceMappingURL=Button.js.map