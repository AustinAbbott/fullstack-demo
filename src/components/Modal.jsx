import React from 'react';

let Modal = function () {

    return (
        <div id='modal'>
        <h2>Submit Bug</h2>
        <form>
            <label for="atm">Assigned Team Member</label>
            <input type="text" id="atm"></input><br></br>
            <label for="threat">Threat Level</label>
            <input type="text" id="threat"></input><br></br>
            <label for="desp">Description</label>
            <input type="text" id="desp"></input><br></br>
            <label for="rept">Reporter</label>
            <input type="text" id="rept"></input><br></br>
            <button>Send Bug Report</button>
        </form>


        </div>
    );
}

export default Modal;