import React,{Component} from 'react';
import './App.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent : false,
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.update = this.update.bind(this);
    }

    onButtonClick() {
        this.setState({
            showComponent : true,
        });
    }

    update(detail) {
        this.props.update(detail);
    }
        render() {
        const details = this.props.details ;
        return (

            <div id = "Table">
                <table>

                    <thead>
                    <tr>

                        <th>Sno</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Doj</th>


                    </tr>

                    </thead>
                    <tbody>
                    {
                        details.map((detail,id) => {
                            return (
                                <tr key={detail.Id}>
                                <td>{id+1}</td>
                                <td>{detail.FirstName}</td>
                                <td>{detail.LastName}</td>
                                <td>{detail.Age}</td>
                                <td>{detail.Gender}</td>
                                <td>{detail.Doj}</td>
                                    <th><button onClick={this.update}>Update</button>

                                        </th>

                                    <th><button onClick={this.props.handleremove}>Delete</button></th>

                            </tr>);


                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}



export default Table;
