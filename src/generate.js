import React from 'react';
import './App.css';
import { connect } from 'react-redux';

export class Generate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pin: [],
            msg: '',

        }
    };
    handleChange() {

        var newArray = [];
        for (var i = 0; i < 5; ++i) {
            var val = Math.floor(1000 + Math.random() * 9001);

            newArray.push(val);
        }
        this.setState({ pin: newArray });


        this.setState({
            msg: 'Name',
        });

    };
    render() {

        console.log("zzz", this.state.pin);
        return (

            <React.Fragment>
                <div className="Generate">
                    <div>
                        <table className="TableStyle"><tbody><tr>{this.state.pin.length > 0 ? this.state.pin.map(item => <td className="tablecellstyle" key={item}>{item}</td>) : <td></td>}</tr></tbody></table>
                    </div>
                    <div style={{ marginTop: '40px' }}>
                        <button type="submit" className="button" onClick={this.handleChange.bind(this)}> GENERATE </button>
                        <button type="submit" onClick={() => this.props.onStoreCredentials(this.state)} className="savebutton"> SAVE </button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    console.log("inside mapdispatch ");
    return {
        onStoreCredentials: (response) => dispatch({

            type: "pin",
            result: response
        })

    }
}

export default connect(null, mapDispatchToProps)(Generate);




