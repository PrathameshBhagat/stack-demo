import './App.css';
import { UserButton } from "@stackframe/react";
import Projects from './components/projects/Projects';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import {useState, useEffect} from 'react';

function MyApp() {
  const [movies, setMovies] = useState();

  const getMovies = async () =>{
    const response = [{
                        title:"Java",
                        trailerLink:"https://www.youtube.com/",
                        poster:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"},
                      { 
                        title:"Java Script",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/JavaScript.png"},
                      {
                        title:"Python",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/python.png"},
                      {
                        title:"HTML5",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/html5.png"},
                      {
                        title:"PHP",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/php.png"},
                      {
                        title:"CSS",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/css.png"},
                      {
                        title:"SQL",
                        trailerLink:"https://www.youtube.com/",                        
                        poster:"/SQL.png"}];

      setMovies(response);
  }

  useEffect(() => {getMovies();},[])

  return (<> <div  style={{backgroundColor:"black", display:"flex"}}> <div  style={{marginLeft:"80%"}}>


<UserButton />
  </div>   </div>
    <div className="App">
      <Hero movies={movies} /><Projects/> <Header/>
    </div></>
  );
}

export default MyApp;
