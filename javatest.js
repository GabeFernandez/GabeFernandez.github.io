function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1qCEL0QwQP8tYbf5LtYuwuMTb6KQWnlMWO2zjWZEGMrQ/edit#gid=0',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
