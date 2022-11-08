import '../css/datapanefields.css'

const DataPaneFields = () => {
    return(
        <div id = 'dataPaneFields'>
            <h3 class = 'dataPaneField' id = 'selectField'>Select</h3>
            <h3 class = 'dataPaneField' id = 'keyField'>Key</h3>
            <h3 class = 'dataPaneField' id = 'offsetField'>Off.</h3>
            <h3 class = 'dataPaneField' id = 'partitionField'>Part#</h3>
            <h3 class = 'dataPaneField' id = 'topicField'>Topic</h3>
            <h3 class = 'dataPaneField' id = 'valueField'>Value</h3>
        </div>
    )
}

export default DataPaneFields