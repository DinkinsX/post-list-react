import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';




//const elem = <h2>Hello World</h2> //движок JSX
//const elem = React.createElement('h2', null, 'Hello'); для преобразования занимается бабель


const Header = () => {
  const scr = "<script>alert()</script>" //забота реакта
  return <h2>{scr}</h2>
}

const Field = () => {
  const holder = "Enter here"
  const styledField = {
    width: '300px'
  }
  return <input style={styledField} type="text" placeholder={holder} autoComplete="" className="first" htmlFor=""/>
}

const Button = () => {
  const text = "Log in";
  const res = () => {
    return "Log in pls"
  }
  const logged = false;
  const p = <p>Log in</p> //объекты поместить не сможем
  return <button>{logged ? null : text}</button>
}

const App = () => {
  return (
    <div>
    <Header/>
    <Field/>
    <Button/>
    </div>
  ) 
}
// function WhoAmI({name, surname, link}) {
//   return (
//     <React.Fragment>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </React.Fragment>
//   )
// }

//в ооп
class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      nation: 'rus'
    }
    //this.nextYear = this.nextYear.bind(this);
    this.nextYear = () => {
        this.setState(state => ({
          years: ++state.years
        }))
    }
  }

  // nextYear() {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state

    return(
      <React.Fragment>
        <button onClick={this.nextYear}>++</button>
      <h1>My name is {name}, surname - {surname}, {years}</h1>
      <a href={link}>My profile</a>
    </React.Fragment>
    )
  }
}

const All = () => {

  return (
    <>
      <WhoAmI name="Daniil" surname="JJ" link="fsb.ru"/>
      <WhoAmI name="abs" surname="JJ" link="fsb.ru"/>
      <WhoAmI name="bsd" surname="JJ" link="fsb.ru"/>
    </>
  )

}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);