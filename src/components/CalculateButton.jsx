export default function CalculateButton(){
    function onClickButton() {
        alert("Calculating the calculations!");
        //TODO implement actual calculation logic
    }

    return(
        <div>
            <button onClick={onClickButton} >Calculate</button>
        </div>
    );
}