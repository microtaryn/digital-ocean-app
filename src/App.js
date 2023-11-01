import React, { useState, useEffect } from "react";
import './App.css';

function App() {
   const [results, setResults] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch("http://localhost:8000/students");
         if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
         }
         const data = await response.json();
         setResults(data);
         JSON.stringify(results);
      }
      fetchData();
   }, [results]);

   return (
      <div className="App">
         <table border="1">
            <thead>
            <tr>
               <th>first name</th>
               <th>last name</th>
            </tr>
            </thead>
            <tbody>
            {results.map((student) => (
               <tr key={student.id}>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
               </tr>
            ))}
            </tbody>
         </table>
      </div>
   );
}

export default App;
