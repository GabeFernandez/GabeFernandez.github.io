function init() {
 Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRyuMLyS-k-quMz6OumVLMHChGTmjB923LzqY9qoJ6e8yaCWIeAN3LnVfifiE0pey-A7g-zMH4PcQBC/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
