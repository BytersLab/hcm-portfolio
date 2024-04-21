const greetings = document.querySelector("#greetings");

const greetingsTypewriter = new Typewriter(greetings, {
  loop: true,
});

greetingsTypewriter
  .typeString("Hello")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Bonjour")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Holla")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Ciao")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Привет")
  .pauseFor(2500)
  .deleteAll()
  .typeString("你好")
  .pauseFor(2500)
  .deleteAll()
  .typeString("こんにちは")
  .pauseFor(2500)
  .deleteAll()
  .typeString("مرحبا")
  .pauseFor(2500)
  .deleteAll()
  .typeString("नमस्ते")
  .pauseFor(2500)
  .deleteAll()
  .typeString(" Olá")
  .pauseFor(2500)
  .start();
