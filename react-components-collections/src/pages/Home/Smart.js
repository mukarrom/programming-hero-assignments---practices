import React, { Component } from "react";
import Dumb from "./Dumb";

const messages = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Pariatur alias nisi ex maiores commodi dolorum delectus magnam mollitia eum!",
  "Aspernatur eius amet est rerum voluptatibus quisquam enim,",
  "Corporis omnis deleniti ipsum nulla rem nihil dignissimos quas itaque voluptatibus sapiente.",
  "natus dolor deleniti pariatur blanditiis quas soluta numquam quasi nihil animi doloremque perferendis, autem possimus commodi praesentium ab.",
  "Debitis quos doloremque, ea laboriosam, qui doloribus ",
  "quidem accusantium eveniet blanditiis eligendi voluptatibus laudantium quas eius,",
  "veniam deserunt itaque? Ex velit enim, cupiditate vel ipsa nam sit quod atque ",
  "eos error odio eaque delectus corporis maiores sed illo ea blanditiis aut, molestiae culpa.",
];

class Smart extends Component {
  state = {
    msg: messages[0],
  };

  componentDidMount() {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      this.setState({
        msg: messages[randomIndex],
      });
    }, 2 * 1000);
  }
  render() {
    return (
      <div>
        <div className="h1">I am Smart</div>
        <Dumb msg={this.state.msg} />
      </div>
    );
  }
}

export default Smart;
