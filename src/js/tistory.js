

async function tistory () {
    const tistoryFetchData = await fetch("")
    const tistoryObject = await tistoryFetchData.json()
    const tistoryNode = document.querySelector('.show-tistory')
    const jsNote = tistoryObject.tistory.item.categories[0]
    const nodejsNote = tistoryObject.tistory.item.categories[5]
    const htmlNote = tistoryObject.tistory.item.categories[6]
    const algoNote = tistoryObject.tistory.item.categories[9]
    // name, entries
    const tistoryArray = []
    tistoryArray.push(jsNote, nodejsNote, htmlNote, algoNote)
    console.log(tistoryNode);
    console.log(tistoryArray[0].name);
    const htmlString = tistoryArray.reduce((acc, e) => {
        acc = acc + `<p>${e.name} : ${e.entries}</p>`
        return acc
    }, '<strong>TISTORY (API)</strong>')

    console.log(htmlString);
    tistoryNode.innerHTML = htmlString
}

export default tistory