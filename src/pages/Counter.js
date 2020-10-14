import React, { Component } from "react";

// componente
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 5,
    };

    this.aumentar = this.aumentar.bind(this);
  }

  componentDidMount() {
    console.log("holi");
  }

  componentWillUnmount() {
    console.log("adios");
  }

  aumentar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <p
          style={{
            color: "white",
            fontSize: "32px",
          }}
        >
          {this.state.contador}
        </p>
        <p></p>
        <button onClick={this.aumentar}>Aumentar</button>
        <button onClick={this.restar}>Decrementar</button>
      </div>
    );
  }
}

// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [contador, guardarContador] = useState(5);

//   useEffect(() => {
//     console.log("apareci! :)");
//     return () => {
//       console.log("me fui");
//     };
//   }, []);

//   const aumentar = () => {
//     guardarContador(contador + 1);
//   };

//   const restar = () => {
//     guardarContador(contador - 1);
//   };

//   return (
//     <div>
//       <p
//         style={{
//           color: "white",
//           fontSize: "32px",
//         }}
//       >
//         {contador}
//       </p>
//       <button onClick={aumentar}>Aumentar</button>
//       <button onClick={() => restar()}>Decrementar</button>
//     </div>
//   );
// };

// export default Counter;
