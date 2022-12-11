import React from 'react';

class FormInput extends React.Component {

    state = {inputData: ''};

    handleChange = (event) => {
        this.setState({inputData: event.target.value});
        this.props.onChange(this.state.inputData);
    }

    render() {
        return (
            <div className="mb-3">
                <label for={this.props.id} className="form-label">{this.props.title}</label>
                <input onChange={this.handleChange} defaultValue={this.props.value} type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
            </div>
        );
    }

}

export default FormInput;