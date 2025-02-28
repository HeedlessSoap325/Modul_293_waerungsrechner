import {useState} from "react";

export default function Waehrungsumrechner(){
    const [input_value, setInput_value] = useState(0);
    const [output_value, setOutput_value] = useState(0);

    function onClickCalculate(){
        setOutput_value(input_value * 1.1);
        //document.getElementById("output_area").value = out;
    }

    return(
        <div>
            <input type={"number"} onChange={(e) => setInput_value(Number(e.target.value))}/>

            <button onClick={onClickCalculate}>Calculate</button>

            <textarea id={"output_area"} disabled={true} value={
                "CHF " + input_value + " sind " + output_value + " in EURO"
            } />
        </div>
    );
}