const toggleTopicListVisibility = () => {
    let topicList = document.getElementById('topicList')
    let topicListDisplayStyle = topicList.style.display
    
    let dispTopicButton = document.getElementById('topicDisplayBtn')

    if (topicListDisplayStyle === 'flex') {
        topicList.style.display = 'none'
        dispTopicButton.innerText = 'Display topics'
        dispTopicButton.textContent = 'Display topics'
        return
    }

    if (topicListDisplayStyle === '' || topicListDisplayStyle === 'none') {
        topicList.style.display = 'flex'
        dispTopicButton.innerText = 'Hide topics'
        dispTopicButton.textContent = 'Hide topics'
        return
    }
}

const revertSelectionsCSS = () => {
    let topicElements = document.getElementsByClassName('topicBtn')
    for (let i = 0; i < topicElements.length; i++) {
        let itor = topicElements[i]
        if (itor.classList.contains('topicBtnSelected')) {
            itor.classList.remove('topicBtnSelected')
        }
    }
}

const changeSelectionCSS = (selectedTopic) => {
    let topicElements = document.getElementsByClassName('topicBtn')
    for (let i = 0; i < topicElements.length; i++) {
        let itor = topicElements[i]
        if (itor === selectedTopic) {
            itor.classList.add('topicBtnSelected')
            break
        }
    }
}

const showTopicClearer = (bool) => {
    bool ? 
        document.getElementById('topicClearBtn').style.display = 'inline-block'
        :
        document.getElementById('topicClearBtn').style.display = 'none'    
}

const forceShowList = () => {
    document.getElementById('topicRefreshBtn').style.display = 'none'
    if (document.getElementById('topicList').style.display === 'none') {
        document.getElementById('topicList').style.display = 'flex'
        document.getElementById('topicDisplayBtn').innerText = 'Hide topics'
        document.getElementById('topicDisplayBtn').textContent = 'Hide topics'
    }
}

const showRefreshButton = () => {
    document.getElementById('topicRefreshBtn').style.display = 'inline-block'
}

export { toggleTopicListVisibility, showRefreshButton, revertSelectionsCSS, changeSelectionCSS, showTopicClearer, forceShowList}