function sum(a: number, b: number): number {
    return a + b;
}

// document.write(sum(4, 5).toString()); /* как в видосе не отработало по причине невозможности писать в документ, выводимый асинхронно, или что-то типа того */
console.log(sum(4, 5).toString());