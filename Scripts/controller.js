import * as modal from './modal.js'
import View from './view.js'



(async function(){
await modal.getData()
View.renderData(modal.pagesData())
})();
