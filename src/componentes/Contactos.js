// import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
const Swal1 = require('sweetalert2')

Swal1.fire({
    title: 'upss... Estamos cargando la pagina,estas listo para interactuar ?',
    width: 600,
    marginTop:'10%',
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://raw.githubusercontent.com/gist/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif")
      left top -10rem
      no-repeat
    `
  })
  