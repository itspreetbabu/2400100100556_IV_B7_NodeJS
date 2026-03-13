import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './components/Welcome.jsx'
import Student from './components/Student.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome name='Priyam Singh'></Welcome>
    <Welcome greet='Vansh Singh'></Welcome>
    <Student name="Utkarsh Singh" course="B.Tech" rollno="02"></Student>
  </StrictMode>,
)
