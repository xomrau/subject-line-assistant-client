import React from 'react';

const DecodedForm = function(props) {
    return <div>
        <label for="decode">UTF-8-decoded subject line</label>
        <input type="text" id="decode" name="decode" value={props.value} onChange={props.onChange}/>
    </div>;
}
const EncodedForm = function(props) {
    return <div>
        <label for="encode">UTF-8-encoded subject line</label>
        <input type="text" id="encode" name="encode" value={props.value} readOnly/>
    </div>;
}
export default class Form extends React.Component {
    render() {
        return <div className="form">
            <p>A tool to encode subject line with emojis!</p>
            <form onSubmit={this.props.submit}>
                <DecodedForm onChange={this.props.change} 
                value={this.props.userInput} />
                <input type="submit" value="Encode It!"/>
                <EncodedForm value={this.props.submitValue}/>
            </form>
        </div>;
    }
}