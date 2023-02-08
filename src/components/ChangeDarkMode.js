const root = [
  '--primary',
  '--primary-darker',
  '--title-color',
  '--text',
  '--body-background',
  '--container-background',
  '--subtitle-color',
]

// const components = [
//   {
//     name: 
//     adress:
//   },
// ]

function ChangeToDarkMode(toggle) {
  
  if (toggle) {
    document.body.style.setProperty(root[0], '#fafafa');
    document.body.style.setProperty(root[1], '#f3f3f3');
    document.body.style.setProperty(root[2], '#fff');
    document.body.style.setProperty(root[3], '#cacaca');
    document.body.style.setProperty(root[4], '#363940');
    document.body.style.setProperty(root[5], '#40454b');
    document.body.style.setProperty(root[6], '#d7d7d7');
  } else {
    document.body.style.setProperty(root[0], '#4d4d4d');
    document.body.style.setProperty(root[1], '#252425');
    document.body.style.setProperty(root[2], '#000000');
    document.body.style.setProperty(root[3], '#757575');
    document.body.style.setProperty(root[4], '#fafafa');
    document.body.style.setProperty(root[5], '#f3f3f3');
    document.body.style.setProperty(root[6], '#565656');
  }
}

export default ChangeToDarkMode;