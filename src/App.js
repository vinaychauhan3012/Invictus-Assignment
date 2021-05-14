import React, { Component } from 'react'
import axios from "axios"
import TableList from "./tableList";

export default class App extends Component {
  state = {
    number : 0,
    result: new Map(),
    isSubmit:false
  }
  async componentDidMount(){
    const res = await axios.get("https://raw.githubusercontent.com/invictustech/test/main/README.md")
    let words = res.data.split(/[-:;,— .\r\n|\r|\n]+/);
    let dataToRender = new Map();
    for(let i=0;i<words.length;i++){
      if(dataToRender.has(words[i])){
        dataToRender.set(words[i],dataToRender.get(words[i])+1);
      }
      else{
        dataToRender.set(words[i],1);
      }
    }
    let dataToRender1 = new Map([...dataToRender].sort((a, b) => String(b[1]).localeCompare(a[1])));
    this.setState({
      result: dataToRender1
    })
  }


  handleChange = (e)=>{
    this.setState({
      number:e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({
      isSubmit:true
    })
  
  }
  
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="number" value={this.state.number} onChange={this.handleChange}/>
            <button type="submit" >Submit</button>
        </form>
      {this.state.isSubmit && <TableList number={this.state.number} result={this.state.result}/>}
      </div>
    )
  }
}

//export default App;
