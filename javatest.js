function init() {
 Tabletop.init( { key: ‘1qCEL0QwQP8tYbf5LtYuwuMTb6KQWnlMWO2zjWZEGMrQ',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
