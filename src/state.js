import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            header: "Hello World",
            content: "Wheres the Fish?",
            header2: "Goodbye World",
            content2: "and thanks for all the fish"
        }
    }

    onClickButton1 = () => {
        this.setState({
          header: 'Goodbye World'
        });
    }

    onClickButton2 = () => {
        this.setState({
          content: 'and thanks for all the fish'
        });
    }

    render(){
        return(
            <div>
            <Header headerProp={ this.state.header } />
            <Content contentProp={ this.state.content} />
            <Button1 func = {this.onClickButton1}/>
            <Button2 func = {this.onClickButton2}/>
            </div>
        );
    }
}

class Header extends Component {
    render(){
        return(
            <div>
                <h1>{ this.props.headerProp }</h1>
            </div>
        );
    }
}

class Content extends Component {
    render(){
        return(
            <div>
                <h1>{ this.props.contentProp }</h1>
            </div>
        )
    }
}

class Button1 extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.func}>BUTTON 1</button><br></br>
            </div>
        )
    }

}

class Button2 extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.func}>BUTTON 2</button><br></br>
            </div>
        )
    }

}

export default App;