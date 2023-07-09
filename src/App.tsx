import * as React from 'react';
import { useState } from 'react';

let nextId = 0;

export default function App() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState([]);
  const [completeMarks, setCompleteMarks] = useState([]);

  const list_item = {
    display: 'flex', 
    flexDirection: "column", 
    justifyContent: 'center', 
    alignItems: "center", 
    color: "white", 
    fontFamily: "Arial"
  }
  const home_button = {
    color: "white",
    backgroundColor: "transparent",
    padding: "10px",
    fontFamily: "Arial",
    fontSize: "18px",
    fontWeight: "bold",
    margin: 5,
    borderRadius: 10,
    borderColor: "white",
  }
  const add_button = {
    height: "60px",
    width: "235.2px",
    position: "relative",
    padding: "0px 16px",
    borderRadius: "4px",
    borderColor: "white",
    fontSize: "16px",
    fontWeight: "400",
    color: "white",
    background: "linear-gradient(to right bottom, #4169e1, #afeeee)"
  }
  const check_button = {
    height: "27px",
    position: "relative",
    padding: "0px 16px",
    borderRadius: "4px",
    borderColor: "white",
    fontSize: "16px",
    fontWeight: "400",
    color: "white",
    backgroundColor: "transparent",
  }
  const delete_button = {
    height: "25px",
    position: "relative",
    padding: "0px 16px",
    borderRadius: "4px",
    borderColor: "white",
    fontSize: "16px",
    fontWeight: "400",
    color: "white",
    backgroundColor: "transparent",
  }

  return (
    <>
      <div style={{ height: '100vh' }}>
        <style>{'body { background: linear-gradient(to right bottom, #191970, #9932CC); }'}</style>


        <h1 style={{ display: 'flex', justifyContent: 'center', color: "white", fontFamily: "Arial", }} >MARK-IT</h1>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input placeholder={"New mark..."} style={{
            height: "56px",
            width: "200px",
            padding: "0px 16px",
            borderRadius: "4px",
            borderColor: "white",
            fontSize: "16px",
            fontWeight: "400",
            color: "white",
            background: "transparent"
          }}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={add_button}
            onClick={() => {
              setMarks([...marks, { id: nextId++, name: name }]);
            }}>Add
          </button>
        </div>

        <h3 style={{
          display: 'flex', flexDirection: "row", justifyContent: 'center', color: "white", fontFamily: "Arial"
        }}>Active:</h3>
        <ul style={list_item}>
          {marks.map(mark => (
            <div key={mark.id}>
              {mark.name}{' '}
              <button style={check_button} onClick={() => {
                setMarks(marks.filter(a => a.id !== mark.id));
                setCompleteMarks([...completeMarks, { id: mark.id, name: mark.name }]);
              }}>Check
              </button>
            </div>
          ))}
        </ul>

        <h3 style={{
          display: 'flex', flexDirection: "row", justifyContent: 'center', color: "white", fontFamily: "Arial"
        }}>Completed:</h3>
        <ul style={list_item}>
          {completeMarks.map(completeMark => (
            <div key={completeMark.id}>
              {completeMark.name}{' '}
              <button style={delete_button} onClick={() => {
                setCompleteMarks(completeMarks.filter(a => a.id !== completeMark.id));
              }}>Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}