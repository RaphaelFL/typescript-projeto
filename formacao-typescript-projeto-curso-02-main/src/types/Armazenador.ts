export class Armazenador {
    private constructor() { }

    static salvar(chave: string, valor: any): void {
        const ValorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, ValorComoString)
    }

    static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
        const valor = localStorage.getitem(chave);

        if (valor === null) {
            return null
        }

        if (reviver) {
            return JSON.parse(valor, reviver)
        }

        return JSON.parse(valor);
    }
}