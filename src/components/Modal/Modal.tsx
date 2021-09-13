import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
export interface ModalProps {
    className?: string;
    style?: React.CSSProperties;

    children?: React.ReactNode;
    visible: boolean;
    closeModal: any;
}
export const Modal = (props: ModalProps) => {
    const { children, visible, closeModal } = props;

    // 在第一次渲染时取 body 原始的 overflow 值
    const bodyOverflow = useRef(window.getComputedStyle(document.body).overflow);

    useEffect(() => { // 根据 visible 来动态修改 body 的 overflow 值
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = bodyOverflow.current;
        }
    }, [visible]);

    function handleClick(event: any) {
        // 点击蒙层本身时关闭模态框，点击模态框的内容时不关闭
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }
    // Portal 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。
    const modal = createPortal(
        <div className="modal" onClick={handleClick}>
            {children}
        </div>,
        document.body
    );

    return <div>{visible && modal}</div>;
}