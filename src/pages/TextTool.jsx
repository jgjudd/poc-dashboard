import { useState, useEffect } from 'react'

const TextTool = () => {
  const [text, setText] = useState('')
  const [wordTuples, setWordTuples] = useState([])

  const handleTextInput = () => {
    const file = document.getElementById("text-file-upload-input").files[0];
  
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        setText(textFromFileLoaded)
    };
  
    fileReader.readAsText(file, "UTF-8");
  }

  useEffect(() => {
    const wordArray = text.split(' ')
    const wordObject = {}

    for (let word of wordArray) {
      // clear empties
      word = word.trim()
      if (word) {
        // strip periods and commas
        word = word.replace('.', '')
        word = word.replace(',', '')
        // build object
        wordObject[word] = wordObject[word] + 1 || 1
      }
    }

    const x = Object.entries(wordObject)
    setWordTuples(x)

  }, [text])

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Text Tool</h1>
      <div style={{ margin: '1rem' }}>
        <input 
          type='file' 
          accept='.txt' 
          id='text-file-upload-input' 
          onChange={e => handleTextInput(e.target.value)} 
        />
      </div>
      <div id='display-area'>
        <div style={{ marginLeft: '1rem' }}>
          { 
            wordTuples.length > 0 && (
              <>
                <h3 style={{ fontSize: '1.5rem'}}><b>Word Count</b>:</h3>
                {
                  wordTuples.map((tup, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '1rem' }}><b>{ tup[0] }</b>: { tup[1] }</p>
                    </div>
                  ))
                }
                <div>
                  <h3 style={{ fontSize: '1.5rem'}}>Original Text: </h3>
                  { text && <p style={{ fontSize: '1rem'}}>{text}</p> }
                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default TextTool
