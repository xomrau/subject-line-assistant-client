import React from 'react';

const DecodedForm = function() {
    return <div>
        <label for="decode">UTF-8-decoded subject line</label>
        <input type="text" id="decode" name="decode" />
    </div>;
}
const EncodedForm = function() {
    return <div>
        <label for="encode">UTF-8-encoded subject line</label>
        <input type="text" id="encode" name="encode" readOnly/>
    </div>;
}
const Form = function() {
    return <div className="form">
        <p>A tool to encode subject line with emojis!</p>
        <form>
            <DecodedForm />
            <input type="submit" value="Encode It!" />
            <EncodedForm />
        </form>
    </div>;
}

export default Form;