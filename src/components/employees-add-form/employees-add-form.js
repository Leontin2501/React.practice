import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }


    // handleSubmit(e) {
    //     e.preventDefault();
    //     const
    //     { contacts } = 
    //     this.state.name = this.name.value,
    //     e = this.refs.email.value,
    //     phone = this.refs.phone.value;
    //     this.setState({
    //       contacts: [...contacts, {
    //         name: '',
    //         salary: ''
    //       }]
    //     }, () => {
    //       this.refs.name.value = '';
    //       this.refs.email.value = '';
    //       this.refs.phone.value = '';
    //     });
    //   }

    render () {
        const {name, salary} = this.state


        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;