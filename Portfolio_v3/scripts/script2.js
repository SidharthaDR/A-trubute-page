let currentStylesheet = 'styles/index_style.css';

function removeCss(currentStylesheet){
    const existingLink = document.querySelector(`link[href="${currentStylesheet}"]`);
  if (existingLink) {
    existingLink.remove();
  }
}

function addCss(newStylesheet){
    const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = newStylesheet;
  document.head.appendChild(link);
  currentStylesheet = newStylesheet;
}

const selectElement = document.getElementById('Themes');
selectElement.addEventListener('change', function() {
    console.log('Selected value:', this.value);
    if(this.value == 'prof') { 
        removeCss(currentStylesheet)
        addCss('styles/index_style.css')
        currentStylesheet = 'styles/index_style.css'
    }

    if(this.value == 'purple_sky') {
        removeCss(currentStylesheet)
        addCss('styles/index_style2.css')
        currentStylesheet = 'styles/index_style2.css'
    }
});


