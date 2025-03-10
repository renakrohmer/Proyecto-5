import React, { Component } from "react";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  
  static getDerivedStateFromError(error) {
   
    return { hasError: true };
  }

  
  componentDidCatch(error, info) {
  
    console.error("Error:", error);
    console.error("Error info:", info);
  }

 
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children; 
  }
}
  
export default Error;
