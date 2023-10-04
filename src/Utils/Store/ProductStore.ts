import { create } from "zustand";
type ProductState ={
    id:string , 
    title : string , 
    price : string , 
}

type CartState = {
    cartState: ProductState[]; 
}

type ProductActions = {
    addProduct : (product:ProductState) => void
    addToCart : (product:ProductState) => void 
    deleteCart : (productId:ProductState['id']) => void 
}

const useProductsStore = create<CartState & ProductActions>((set) => ({
    id:'',
    title: '',
    price : '',
    cartState:[],
    addProduct : (product) => set((state)=>({cartState:[...state.cartState , product]})),
    addToCart : (product) => set((state) => ({cartState: [...state.cartState , product]})), 
    deleteCart : (productId) => set((state) => ({cartState: state.cartState.filter(product => product.id !== productId)})) 
}))

export default useProductsStore;
