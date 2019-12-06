import React from 'react';
import confirm from './compomnet/Confirm';

import './App.css';

class App extends React.Component {
    confirmTestFun(){
        (async function () {
            let res = await confirm("确定删除吗");
            console.log('res', res);
            if (res) {
                console.log("是")
            } else {
                console.log("否")
            }
        })()
    }
    render() {
        return (
            <div className='App'>
                <h3>App</h3>
               <button className='test-btn' onClick={() => {
                   this.confirmTestFun();
                }}>点击</button>
            </div>
        )
    }
    async componentDidMount() {
        this.confirmTestFun();
    }

}

export default App;

/*
请写一个满足以下要求的confirm方法组件：

（1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；

（2）能通过该promise返回的结果判断confirm组件是否成功挂载。
async componentDidMount(){
    let res = await confirm("确定删除吗")
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
}
*/