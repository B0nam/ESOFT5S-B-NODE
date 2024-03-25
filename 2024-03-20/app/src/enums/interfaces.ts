// Interface para os dados do usuário
export interface UserData {
    username: string;
    peso: number;
    senha: string;
    email: string;
}

// Interface para um usuário
export interface Usuario {
    id: number;
    username: string;
    peso: number;
    senha: string;
    email: string;
}

// Inteface para dados de categoria
export interface CategoriaData {
    nome: string
    cor: number
}
