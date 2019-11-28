import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <div className={'formBox'}>
            <form onSubmit={props.change}>
                <input className='inputOne formElem'  name={props.name} required   type="text" placeholder={'Item name'}/>
                <input className='inputTwo formElem' name={props.number} required type="number"  placeholder={'Cost'}/>
                <span>kgs</span>
                <button className='btnOne formElem' type='submit'>Add</button>
            </form>
        </div>
    );
};

export default Form;