document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".tituloPequenoDetalhe", {
        speed: 200
    })
        .type('BlueTups', { dlay: 200 })
        .move(-2).pause(100)
        .delete(1).pause(500)
        .type('i')
        .move(2)
        .type(" - Inicio")
        .go()
})
