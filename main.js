let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio Ingenieria Química en el 7to cuatrimestre, y te voy a hablar un poco más sobre mi.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
