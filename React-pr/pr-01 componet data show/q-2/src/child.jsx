



import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {

      allComRecord: this.props.company
    }
  }
  render() {
    console.log(this.state.allUserRecord);
    return (
      <div className="tbl" align="center">

        <h1 align="center">All Company record</h1>

        <table className="table table-secondary table-striped" border={1}>
          <thead>
            <tr>
              <th scope="col">empid</th>
              <th scope="col">empname</th>
              <th scope="col">empemail</th>
              <th scope="col">empphone</th>
              <th scope="col"> empaddress</th>
              <th scope="col">empdeg</th>
              <th scope="col">empsalary</th>
              <th scope="col">empdepartment</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.allComRecord.map((val) => {
                return (
                  <tr key={val.empid}>
                    <td>{val.empid}</td>
                    <td>{val.empname}</td>
                    <td>{val.empemail}</td>
                    <td>{val.empphone}</td>

                    <td>{val.empaddress.area} , {val.empaddress.city} , {val.empaddress.state} , {val.empaddress.country}</td>

                    <td>{val.empdeg}</td>
                    <td>{val.empsalary}</td>
                    <td>{val.empdepartment}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    )
  }
}


export default Child;


