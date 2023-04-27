
const ExcelTool = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Excel Tool</h1>
      <div style={{ margin: '1rem' }}>
        <input type='file' accept='.xls,.xlsx' id='file-import' />
      </div>
      <div id='display-area'>

      </div>
    </>
  )
}

export default ExcelTool
