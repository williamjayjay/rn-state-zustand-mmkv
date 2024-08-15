
interface IProduct {
    id:string;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
};


interface IRating {
    rate: number;
    count: number;
}

interface ICartState {
    products: Array<IProduct & {quantity:number}>;
    addProduct: (product: IProduct & {quantity?:number}) => void;
    reduceProduct: (product: IProduct & {quantity?:number}) => void;
    clearCart: () => void;
    items:number;
}



export { IProduct, IRating, ICartState }