import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Confirm = (props) => {
    return (
        <div className='confirm'>
            <div className="confirm_container">
                <i className="confirm_close" onClick={()=> {props.clickFun(false)}}></i>
                <div className="confirm_tittle">确认</div>
                <div className="confirm_context">{props.title}</div>
                <div className="confirm_btns">
                    <button className="btn-cancel" onClick={e => { props.clickFun(false) }}>取消</button>
                    <button className="btn-confirm" onClick={e => { props.clickFun(true) }}>确认</button>
                </div>

            </div>
        </div>
    )
}
let node = null;
const confirm = (title) => {
    let resolveFun;
    
    const closeConfirm = () => {
        if (node) {
            ReactDOM.unmountComponentAtNode(node)
            document.body.removeChild(node)
        }
    }
    function clickFun(value) {
        closeConfirm();
        resolveFun(value);
    }
    node = document.createElement('div');
    document.body.appendChild(node);
    ReactDOM.render(<Confirm title={title} clickFun={clickFun} />, node);
    return new Promise((resolve) => {
        resolveFun = resolve;
    })
}
export default confirm;