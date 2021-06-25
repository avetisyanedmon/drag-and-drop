import './App.css';
import { useState } from 'react';
 
function App() {


  const [containerItems, setContainersItems] = useState([])

  const items = [<button>Button</button>,
                 <input></input>,
                 <textarea className='textarea'></textarea>,
                 <select></select>,
                 <input type='radio'></input>,
                 <input type='checkbox'></input>];


  function dragOverHandler(e, item){
        e.preventDefault()
        if(e.target.className = 'item'){
          e.target.style.boxShadow = '0 2px 3px gray';
        }
  }

  function dragLeaveHandler(e){
    e.target.style.boxShadow = 'none'
  }

  function dragStartHandler(e, item){


  }

  function dragEndHandler(e, item){
    e.target.style.boxShadow = 'none';
    setContainersItems((state) =>[
      ...state,
      item
    ])
  }

  function dropHandler(e, item){
        e.preventDefault()
  }

  return (
    <div className="App">
      <div className='sidebar'>
          {items.map((item) => {
            return (
              <div className='item'
                   draggable='true'
                   onDragOver={(e) => dragOverHandler(e, item)}
                   onDragLeave={(e) => dragLeaveHandler(e)}
                   onDragStart={(e) => dragStartHandler(e, item)}
                   onDragEnd={(e) => dragEndHandler(e, item)}
                   onDrop={(e) => dropHandler(e, item)}>
                     {item}
              </div>
            )
          })}

      </div>
      <div className='container'>
          {containerItems.map((item) => item)}
      </div>
    </div>
  );
}

export default App;
