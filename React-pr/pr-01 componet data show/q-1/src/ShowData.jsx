



import React, { Component } from 'react';

class ShowData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alluser: props.userList,
    };
  }

  render() {
    const styles = {
      table: {
        width: '100%',
        borderCollapse: 'collapse',
      },
      header: {
        backgroundColor: 'gray',
        color: 'white',
        padding: '12px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        borderRight: '1px solid #ddd',
        letterSpacing: '1px',
      },
      cell: {
        padding: '17px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        borderRight: '1px solid #ddd',
        background: 'linear-gradient(to bottom, #ffffff, #f2f2f2)',
        letterSpacing: '1px',
      },

    };

    return (
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>GRID</th>
            <th style={styles.header}>NAME</th>
            <th style={styles.header}>E-MAIL</th>
            <th style={styles.header}>PASSWORD</th>
            <th style={styles.header}>COURSE</th>
            <th style={styles.header}>CITY</th>
          </tr>
        </thead>
        <tbody>
          {this.state.alluser.map((val, index) => {
            const rowStyle = index % 2 === 0 ? {} : {};
            return (
              <tr key={val.grid} style={{ ...styles.row, ...rowStyle }}>
                <td style={styles.cell}>{val.grid}</td>
                <td style={styles.cell}>{val.name}</td>
                <td style={styles.cell}>{val.email}</td>
                <td style={styles.cell}>{val.password}</td>
                <td style={styles.cell}>{val.course.join(', ')}</td>
                <td style={{ ...styles.cell, borderRight: 'none' }}>{val.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ShowData;


