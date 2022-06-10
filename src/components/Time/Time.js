import React from "react";

/*function Time() {

    const [time, setTime] = React.useState(``);
    //setTime(new Date().toLocaleTimeString());
    //setInterval(setTime(new Date().toLocaleTimeString()), 100000);
    //const time = `${new Date().getHours()}:${new Date().getUTCMinutes()}`;

    React.useEffect(() => {
        setTime(`${new Date().getHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}`);
    }, [new Date().getHours(), new Date().getUTCMinutes(), new Date().getSeconds()])

    return (
        <>
            <span className='top-line__time'>{time}</span>
        </>
    );
}*/

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
  
    render() {
      return (
        <>
          <span className='top-line__time'>{this.state.date.toLocaleTimeString()}</span>
        </>
      );
    }
  }

export default Time;