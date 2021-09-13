## Checkbox

```jsx
/**
 * title: 普通配置
 * desc: 参考 antd
 */
import React from 'react';
import {Checkbox} from 'jiam-ui';
export default () => <Checkbox/>;
```

## Triangle

```jsx
/**
 * title: 普通配置
 * desc: 参考 antd
 */
import React from 'react';
import {Triangle} from 'jiam-ui';
export default () => <Triangle/>;
```

```jsx
/**
 * title: 普通配置
 * desc: 参考 antd
 */
import React,{useState} from 'react';
import {Modal} from 'jiam-ui';
export default () => {
    const [modalVisible, setModalVisible] = useState(false);
    const modalConfig = {
        visible: modalVisible,
        closeModal: () => {
            setModalVisible(false);
        }
    };
    // /* App.css */
    const openBtn = {
        marginTop: "240px",
        border: "1px solid dodgerblue",
    }

    const dialogStyle = {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        padding: "30px 30px",
        width: "200px",
        height: "200px",
        backgroundColor: "#fff",
        borderRadius: "8px",
    }

    const closeBtn = {
        position: "absolute",
        right: "10px",
        top: "4px",
        fontSize: "21px",
    }
    
    const modalChildren = (
        <div className="dialog" style={{...dialogStyle}}>
            <span onClick={() => setModalVisible(false)} className="closeBtn" style={{...closeBtn}}>x</span>
            <div>这是内容</div>
        </div>
    );
    return  <div className="App">
            <button onClick={() => setModalVisible(true)} className="openBtn" style={{...openBtn}}>open modal</button>
            <Modal {...modalConfig}>{modalChildren}</Modal>
        </div>
};
```
