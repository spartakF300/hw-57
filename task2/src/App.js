import React, {Component} from 'react';
import './App.css'
import Form from "./components/Form/Form";
import List from "./components/List/List";

class App extends Component {
    state = {

        list: [],
        total: 0
    };
    SubmitHandler = (e) => {
        e.preventDefault();
        const list = [...this.state.list];
        list.push({text: e.target.elements.text.value, cost: e.target.elements.number.value});
        let total = this.state.total;
        total += parseInt(e.target.elements.number.value);
        this.setState({list, total});
    };
   remove =(index)=>{
       let total = this.state.total;
       total -= this.state.list[index].cost;
       const list = this.state.list;
       list.splice(index,1);
       this.setState({list, total})
   };

    render() {
        return (
            <div className={'container'}>
                    <Form name={'text'} number={'number'} change={this.SubmitHandler}/>
                <div className={'list-wrap'} >
                    {this.state.list.map((item, index) => {
                        return <List
                            text={item.text}
                            cost={item.cost}
                            key={index}
                            remove={()=> this.remove(index)}
                                                    />
                    })}
                    <p className={'total'}>Total:  {this.state.total}</p>
                </div>
            </div>
        );
    }
}

export default App;