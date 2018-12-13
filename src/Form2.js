import React, {Component} from 'react';

class Form2 extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit =(e)=> {
        e.preventDefault();

        let text = this.refs.text.value.trim();
        let text2 = this.refs.text2.value.trim();
        let text3 = this.refs.text3.value.trim();
        let number = this.refs.number.value.trim();
        let date = this.refs.date.value.trim();

        if(!text)
        {
            alert("Please Enter FirstName");
            return;

        }
        if(!text2)
        {
            alert("Please Enter LastName");
            return;

        }
        if(!text3)
        {
            alert("Please Enter Age");
            return;

        }
        if(!number)
        {
            alert("Please Enter Gender");
            return;

        }
        if(!date)
        {
            alert("Please Enter Doj");
            return;
        }

        if(this.props.isEdit) {
            let updateDetail = {
                Id : this.props.isEdit,
                FirstName : text,
                LastName : text2,
            Age : number ,
            Gender : text3,
            Doj : date
            };
            this.props.update(updateDetail);
        }
        else
        {
            this.props.handleSubmit(e);
        }

    };

    handleChange =(e)=> {

        this.props.handleChange(e.target.value);
    };
        render() {
        return (
            <div id = "Form">
                <h3>Create a New Record</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>FirstName :
                        <input type="text" ref = "text" value={this.props.newFirstName} name="FirstName" onChange={this.props.handleChange} required/>
                    </label>
                    <label>LastName :
                        <input type="text" ref = "text2" value={this.props.newLastName} name="LastName" onChange={this.props.handleChange}required/>
                    </label>
                    <label>Age :
                        <input type="number" ref = "number" value={this.props.newAge} name="Age" onChange={this.props.handleChange} required/>
                    </label>
                    <label>Gender :
                        <input type="text" ref = "text3" value={this.props.newGender} name="Gender" onChange={this.props.handleChange} required/>

                    </label>
                    <label>Date of Joining :
                        <input type="date" ref ="date" value={this.props.newwDoj} name="Doj" onChange={this.props.handleChange}/>
                    </label>
                    <button type= "submit" value= "Create">Create Record</button>
                </form>
            </div>
        );
    }
}

export default Form2 ;