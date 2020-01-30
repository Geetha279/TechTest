const initialState = {

    pinArray: [],
    

}
const rootReducer = (state = initialState, action) => {

    console.log("action values are ", action)
    if (action.type === "pin") {

        return {
            ...state,
            pinArray: state.pinArray.concat({ id: new Date(), value: action.result.pin, name: "" }),
            
        };

    }
    if (action.type === "delete") {

        console.log("fffffff", action.index);
        console.log("pinsss ", state.pinArray);

        const updatedArray = state.pinArray.filter(pins => pins.id !== action.id)
        console.log("updated array   ", updatedArray)

        return {
            ...state,
            pinArray: state.pinArray.filter(pins => pins.id !== action.id)
        }
    }

    if (action.type === "updatename") {

        console.log("updatename", action);
        console.log("state value for name ",state);
        var foundIndex = state.pinArray.findIndex(pin => pin.id == action.id);
console.log("found index", foundIndex);
let someArray = state.pinArray;
someArray.forEach((pin, index) => {
    if(pin.id === action.id) {
        someArray[index] = {id:pin.id,value:pin.value,name:action.name};
    }
});
console.log("found someArray", someArray);

return {
            ...state,
             pinArray: someArray
        }
    }
    return state;

}
export default rootReducer;