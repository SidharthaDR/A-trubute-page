let currentStylesheet = 'styles/index_style.css';

const toggleStylesheet = () => {
  const newStylesheet = currentStylesheet === 'styles/index_style.css' ? 'styles/index_style2.css' : 'styles/index_style.css';

//   const body = document.body;
//   body.classList.add('fade');

  const existingLink = document.querySelector(`link[href="${currentStylesheet}"]`);
  if (existingLink) {
    existingLink.remove();
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = newStylesheet;
  document.head.appendChild(link);

  currentStylesheet = newStylesheet;

//   setTimeout(() => {
//     body.classList.remove('fade');
//   }, 500);
};

document.getElementById('loadCSSBtn').addEventListener('click', toggleStylesheet);