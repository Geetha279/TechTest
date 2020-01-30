import React from 'react';
import './App.css';
import { connect } from 'react-redux';

export class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

    };
    // handleChange = (e) => {
    //    this.addName(e.target.value)
    // };

    render() {

        const { pin } = this.props;
        console.log("this.props", this.props);
        return (

            <React.Fragment>
                <div className="Display">
                    {pin.length > 0 ? "" : <p className="pStyle"> Pins are empty </p>}
                    <div><table><tbody>{pin.length > 0 ? pin.map((item, index) => <tr key={index} style={{ height: '29px' }}><td key={index + 1}><input className="inputStyle" placeholder={item.name} type="text" onChange={(e) => this.props.addName(e.target.value, item.id)} /></td>{item.value.map((item, index) => <td className="tableDisplayStyle" key={index + 3}>{item}</td>)}<td key={index + 5}><button onClick={() => this.props.deletePin(this.state, item.id)} className="DeleteButton">DELETE</button></td></tr>) : <tr></tr>}</tbody></table></div></div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    console.log("Display  dispatch methods");
    return {
        addName:(name,id)=>dispatch({
            type:"updatename",
             name:name,
             id:id
            }),
        deletePin: (response, id) => dispatch({
            type: "delete",
            id: id,
            result: response
        })

    }
}


const mapStateToProps = state => {
    console.log("home page mapstatetoprops ", state.pinArray);

    return {

        pin: state.pinArray,
        msg: state.name,
        id: state.id

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);



