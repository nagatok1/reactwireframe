import React, { Component } from 'react';

class TableData extends Component{
    render(){
        return(
            <tr>
                <td align="center">{this.props.trainee.id}</td>
                <td align="center">{this.props.trainee.name}</td>
                <td align="center">{this.props.trainee.courses}</td>
            </tr>
        );
    }
}

export default TableData;