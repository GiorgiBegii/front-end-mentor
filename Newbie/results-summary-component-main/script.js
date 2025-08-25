const summaries = document.querySelector('.summaries')

fetch('data.json')
    .then(response => response.json())
    .then(data => {

    data.map((e) => {
        //Creating summaryItem (Div where will summary info)
        const summaryItems = document.createElement('div')
        summaryItems.setAttribute('class', "summaryItems")
        summaryItems.style.background = e.background
        summaries.appendChild(summaryItems)
        const summaryItem = document.createElement('div')
        summaryItem.setAttribute('class', "summaryItem")
        summaryItem.style.display = "flex"
        summaryItem.style.alignItems = "center"
        summaryItem.style.gap = "10px"
        summaryItems.appendChild(summaryItem)
        //Adding summaryItem icon
        const summaryItemIcon = document.createElement('img')
        summaryItemIcon.setAttribute('class', "summaryItemIcon")
        summaryItemIcon.setAttribute('src', e.icon)
        summaryItem.appendChild(summaryItemIcon)
        //Adding SummartyItem category
        const summaryItemCategory = document.createElement('h1')
        summaryItemCategory.innerText = e.category
        summaryItemCategory.setAttribute('class', "summaryItemCategory")
        summaryItem.appendChild(summaryItemCategory)
        //Adding SummartyItem score
        const summaryItemScore = document.createElement('h2')
        summaryItemScore.innerText = `${e.score} / 100`
        summaryItemScore.setAttribute('class', "summaryItemScore")
        summaryItems.appendChild(summaryItemScore)
    })

})
    .catch(error => {
    console.error('Error loading JSON:', error);
});
