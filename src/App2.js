import  React,{Component} from 'react';
import Form2 from "./Form2";
import Table from "./Table";
import './App.css';


class App2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            FirstName: "",

            LastName: "",

            Age: "",

            Gender: "",

            Doj: "",

            isEdit : 0,

            details: [
                {
                    Id: 1,
                    FirstName: "XXXX",
                    LastName: "YYYY",
                    Age: "24",
                    Gender: "Male",
                    Doj: "10-12-2018"
                },
                {
                    Id: 2,
                    FirstName: "ZZZZ",
                    LastName: "QQQQ ",
                    Age: "24",
                    Gender:"Female",
                    Doj: "01-12-2018"
                }
            ],
        }

        this.edit = this.edit.bind(this);

    };

    edit(detail)  {

        let details = this.state.details;
        for (var i = 0; i<details.length ; i++)
        {
            if(details[i].Id == detail.id)
            {
                details.splice(i,1);
            }
        }
        this.setState({
            FirstName: detail.FirstName,

            LastName: detail.LastName,

            Age: detail.Age,

            Gender: detail.Gender,

            Doj: detail.Doj,

            isEdit : detail.Id,
        });
    }

    handleremove = (rowId) => {

        var index = -1;
        var clength = this.state.details.length;
        for( var i = 0; i < clength; i++ ) {
            if( this.state.details[i].Id === rowId.Id ) {
                index = i;
                break;
            }
        }
        this.state.details.splice( index, 1 );
        this.setState( {details: this.state.details} );
    };

    handleSubmit =(e)=> {
        e.preventDefault();


            let details = [...this.state.details];

            details.push({
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Age: this.state.Age,
                Gender:this.state.Gender,
                Doj: this.state.Doj
            });

            this.setState({
                details,
                FirstName: "",
                LastName: "",
                Age: "",
                Gender: "",
                Doj: ""
            });

    };



    update(detail) {
        let details = this.state.details;
        for (var i = 0; i < details.length; i++) {
            if (details[i].id == detail.id) {
                details.splice(i, 1);
            }
        }
        details.push(detail);
        this.setState({
            details: details,
            FirstName: "",

            LastName: "",

            Age: "",

            Gender: "",

            Doj: "",

            isEdit : 0,
        });
    }

    handleChange =(e)=> {

        let input = e.target;
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name] : value
        });
    };

    render() {
        return (
            <div className= "App2">
                <Form2 handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} update = {this.update}
                       newFirstName = {this.state.FirstName}
                       newLastName = {this.state.LastName}
                       newAge = {this.state.Age}
                       newGender = {this.state.Gender}
                       newDoj = {this.state.Doj}/>
                <Table details={this.state.details}
                       handleremove = {this.handleremove}
                        update = {this.edit}/>

            </div>
        );

    }

}

export default App2;