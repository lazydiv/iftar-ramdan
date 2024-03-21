import { Order } from "@prisma/client";
import {create} from "zustand"



export type ModalType = "placeOrder" 


interface ModalData {
    order?: Order
}

interface ModelStore {
    type: ModalType | null;
    data: ModalData
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}


export const useModal = create<ModelStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({type, isOpen: true, data}),
    onClose: () => set({type: null, isOpen: false})
}))