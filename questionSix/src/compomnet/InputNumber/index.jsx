import React from 'react';
import './index.css';

class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.value || props.defaultValue
        }
    }
    render() {
        const { inputValue } = this.state;
        const { onChange } = this.props;
        return (
            <input className='input-number' type='text' value={inputValue} onChange={e => {
                this.setState({ inputValue: e.target.value });
                onChange(e.target.value);
            }} />
        )
    }
}
export default InputNumber;