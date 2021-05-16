
import React, { Component} from 'react'

export default class tableList extends Component {
        
     renderTable = (r,no,n)=>
     // map function to render data from array to table in html
        r.map((keys,Index)=>{
            if(n<no && Index<r.length-1){
                n++
                return (
                    <tr key={keys[0]} >
                        <td style={{border:"1px solid black"}}>{keys[0]}</td>
                        <td style={{border:"1px solid black"}}>{keys[1]}</td>
                    </tr>
                )
                }
                return null;
            
        })
        
     
    render() {
        const {result,number} = this.props;
        //converting map to array to render data as html
        let r= Array.from(result);
        let n=0;
        
        return (
            <section>
                <table style={{border:"1px solid black"}}>
                    <thead>
                        <tr>
                            <th style={{border:"1px solid black"}}>Words</th>
                            <th style={{border:"1px solid black"}}>Frequency</th>
                        </tr>
                    </thead>
                    <thead>
                        {this.renderTable(r,number,n)}
                    </thead>
                </table>
                
            </section>
        )
    }
}
