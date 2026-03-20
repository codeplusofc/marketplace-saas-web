// src/data/mockAdminData.ts

export type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
};

export type Order = {
    id: number;
    customer: string;
    total: number;
    date: string;
    status: 'Pendente' | 'Enviado' | 'Entregue';
};

export const mockProducts: Product[] = [
    { id: 1, name: 'Notebook Gamer X', price: 5200, stock: 15, category: 'Eletrônicos' },
    { id: 2, name: 'Fone Bluetooth Pro', price: 299, stock: 40, category: 'Acessórios' },
    { id: 3, name: 'Camiseta Estampada', price: 89, stock: 100, category: 'Roupas' },
    { id: 4, name: 'Smartwatch Fit', price: 799, stock: 25, category: 'Eletrônicos' },
    { id: 5, name: 'Mochila Resistente', price: 199, stock: 60, category: 'Acessórios' },
];

export const mockOrders: Order[] = [
    { id: 1001, customer: 'Ana Silva', total: 5289, date: '2026-03-18', status: 'Pendente' },
    { id: 1002, customer: 'Pedro Santos', total: 1087, date: '2026-03-17', status: 'Enviado' },
    { id: 1003, customer: 'Julia Costa', total: 299, date: '2026-03-16', status: 'Entregue' },
];

export const adminStats = {
    totalProducts: mockProducts.length,
    ordersToday: 7,
    monthlyRevenue: 84320,
    newUsers: 34,
};