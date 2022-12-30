
/*
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true
  })
  .type('Javascript', { dlay: 900 })
  .delete(10)
  .type('C++', { delay: 500 }).delete(3).type('ReactNa', {delay: 500})
  .pause(1000).delete(2).type('Js')
    .go()
})*/

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".ola", {
    speed: 200
  })
  .type('Olá, My name é <em><strong class="font-semibold">Mayck</strong></em>')
  .pause(200)
  .delete(15)
  .type('eu nome é <em><strong class="font-semibold">Maycon</strong></em>', {dlay: 100})
  .go()
})

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".title", {
    speed: 200
  })
  .type('BlueTups', { dlay: 100 })
  .move(-2)
  .delete(1)
  .type('i')
  .move(2)
  .type(" - Inicio")
  .go()
})

