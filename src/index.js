//ran npm install, npm install --save react-router-dom
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


ReactDOM.render(<BrowserRouter> 
	<App/> 
	</BrowserRouter>,
	document.getElementById('root'))