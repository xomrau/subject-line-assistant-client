import React from 'react';

const DecodedForm = function(props) {
    return <div className="flex col">
        <label className="pb-10 pt-20" htmlFor="decode">UTF-8-decoded subject line</label>
        <input type="text" id="decode" name="decode" value={props.value} onChange={props.onChange}/>
    </div>;
}
const EncodedForm = function(props) {
    return <div className="flex col">
        <label className="pb-10" htmlFor="encode">UTF-8-encoded subject line</label>
        <input type="text" id="encode" name="encode" value={props.value} onClick={props.copy} readOnly/>
    </div>;
}
export default class Form extends React.Component {
    render() {
        return <div className="form view pt-20 pb-20">
            <form onSubmit={this.props.submit} className="flex col">
                <DecodedForm onChange={this.props.change} 
                value={this.props.userInput} />
                <input className="submitButton mt-10 mb-10" type="submit" value="Encode It!"/>
                <EncodedForm value={this.props.submitValue} copy={this.props.copy}/>
            </form>
        </div>;
    }
}