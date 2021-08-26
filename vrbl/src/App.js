import logo from './logo.svg';
import './App.scss';
import {Switch, Route} from 'react-router-dom' 
import Home from './components/Home/home';
import About from './components/about/about';
import {useEffect} from 'react'
import $ from 'jquery'

function App() {
  useEffect(() => {
    updateZoom()
    $(window).resize(()=>{
      updateZoom()
    })
  })
  const updateZoom = ()=>{
    let zoom = 1;
    if($(window).width()<768){
      zoom = 768 / window.innerWidth;
      let scale = 1 / zoom
      $(".vrblApp,#root").css({zoom:scale})
    } else {
      $(".vrblApp,#root").css({zoom:1})
    }
  }
  return (
    <div className="vrblApp">
    <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route exact path="/about" component={About}></Route>
       <Route exact path="/privacy" component={About}></Route>
       <Route exact path="/terms" component={About}></Route>
    </Switch>
    </div>
  );
}

export default App;
