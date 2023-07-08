import { useState } from 'react'

function App() {
  const myCustomLabel = <label htmlFor="inputID">請輸入數字</label>

  return (
    <div className="large" id="largerDiv">
      {myCustomLabel}
      <input type="number" id="inputID" defaultValue={3} />
    </div>
  )
}

export default App