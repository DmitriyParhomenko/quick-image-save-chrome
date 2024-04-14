import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Test images
import testImage1 from './assets/test_images/1.jpeg'
import testImage2 from './assets/test_images/2.jpeg'

function App() {
  const [color, setColor] = useState('red');

  const onclick = async () => {
    // let [tab] = await chrome.tabs.query({ active: true });
    // chrome.scripting.executeScript<string[], void>({
    //   target: { tabId: tab.id! },
    //   args: [color],
    //   func: (color) => {
    //     document.body.style.backgroundColor = color;
    //   }
    // });


    // Test
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">

        <input type="color" onChange={(e) => setColor(e.currentTarget.value) } value={color} />
        <button onClick={() => onclick()}>
          Click Me
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="test-imgs">
        <img style={{maxWidth: 200}} src={testImage1} className="test" alt="Test Img" />
        <img src={testImage2} className="test" alt="Test Img" />
      </div>
    </>
  )
}

export default App
