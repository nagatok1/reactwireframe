import React, { Component } from 'react';
import './App.css';
import TableData from './TableData';

class TableMethod extends Component {
    constructor(){
        super();
        this.state={
            trainees : [
                {
                    id : "1",
                    name : "John Doe",
                    courses : "Java C++"
                },
                {
                    id : "0",
                    name : "Jez Sully",
                    courses : "Nothing"  
                },
                {
                    id : "over 8000",
                    name : "John Doe Senior",
                    courses : "Everything"
                },
                {
                    id : "72",
                    name : "Quality Guy",
                    courses : "C Sharp C++"
                },
                {
                    id : "19",
                    name : "Lucas Espinosa",
                    courses : "Python"
                },
                {
                    id : "8",
                    name : "john jova",
                    courses : "Perl"
                }
            ]
        }
    }
  render(){
    return(
      <div name="table">
            <table width = "100%" border="10px" bordercolor="black" cellspacing="0" bgcolor="pink">
                <tr>
                    <th>Trainee ID</th>
                    <th>Trainee name</th>
                    <th>Courses Completed</th>
                </tr>
                {
                    this.state.trainees.map((trainee) => (
                        <TableData key={trainee.id.toString()} trainee={trainee}/>
                    ))
                }
            </table>
        </div>
    )
  }
}

  export default TableMethod;