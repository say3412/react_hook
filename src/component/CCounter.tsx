import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  count: number;
};

type State = {
  count: number;
};

export default class CCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  handleClick = (): void => {
    this.setState((prevState) => {
      return {count: prevState.count + 1};
    });
  };

  render(): ReactNode {
    console.log("call render!");

    return (
      <div>
        <p>{this.state.count} 번 클릭했습니다.</p>
        <button onClick={this.handleClick}>클릭!</button>
      </div>
    );
  }

  componentDidMount(): void {
    console.log("call componentDidMount");
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any,
  ): void {
    console.log("call componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("call componentWillUnmount");
  }
}
