import React from 'react'
function App () {
  return (
    <div>
      <h1>You're live!</h1>
      <h4>Add the following to a Resource Override js file:</h4>
      <code>
        {`(()=>{ const s = document.createElement('script'); s.src = 'http://localhost:3000/dist/bundle.js'; document.head.appendChild(s) })();`}
      </code>
      <p>then replace all this in src/App.js and change your entry selector in index.js</p>
      <h4>Add to Target</h4>
      <p>Once you're done developing, do 'npm run build' and copy the contents of dist/bundle.js to paste in a script tag</p>
    </div>
  )
}
export default App
