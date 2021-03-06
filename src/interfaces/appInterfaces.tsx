// Generated by https://quicktype.io

import { useFecha } from "../hooks/useFecha";

export interface LoginResponse {
    data: Data;
    token: string;
    msg: Msg;
}

export interface Data {
    user: User;
}

export interface User {
    id: number;
    dni: string;
    name: string;
    phone: string;
    password: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    pivot: Pivot;
}

export interface Pivot {
    model_id: number;
    role_id: number;
    model_type: string;
}

export interface Msg {
    summary: string;
    detail: string;
    code: string;
}

// Generated by https://quicktype.io

export interface LoginData {
    dni: string;
    password: string;
}


// Generated by https://quicktype.io

export interface RegisterResponse {
    data: Data;
    token: string;
    msg: Msg;
}

export interface Data {
    user: User;
}

export interface User {
    id: number;
    dni: string;
    name: string;
    phone: string;
    password: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    pivot: Pivot;
}

export interface Pivot {
    model_id: number;
    role_id: number;
    model_type: string;
}

export interface Msg {
    summary: string;
    detail: string;
    code: string;
}


// Generated by https://quicktype.io

export interface RegisterData {
    dni: string;
    name: string;
    phone: string;
    password: string;
    role: string;
}


// Generated by https://quicktype.io

export interface UsersResponse {
    data: Usuarios[];
    summary: string;
    detail: string;
    code: string;
}

export interface Usuarios {
    id: string;
    created_at?: string;
    updated_at?: string;
    dni: string;
    name: string;
    phone: string;
}

// Generated by https://quicktype.io

export interface UsuarioResponse {
    data: Data;
    msg: Msg;
}

export interface Data {
    id: string;
    dni: string;
    name: string;
    phone: string;
    password: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    pivot: Pivot;
}

export interface Pivot {
    model_id: number;
    role_id: number;
    model_type: string;
}

export interface Msg {
    summary: string;
    detail: string;
    code: string;

}

// Generated by https://quicktype.io

export interface RolesResponse {
    data: InfoRol[];
    summary: string;
    detail: string;
    code: string;
}

export interface InfoRol {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
}


// Generated by https://quicktype.io

export interface RegisterResponse {
    data: Data;
    token: string;
    msg: Msg;
}

export interface Data {
    user: User;
}

export interface User {
    id: number;
    dni: string;
    name: string;
    phone: string;
    password: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    pivot: Pivot;
}

export interface Pivot {
    model_id: number;
    role_id: number;
    model_type: string;
}

export interface Msg {
    summary: string;
    detail: string;
    code: string;
}


// Generated by https://quicktype.io

export interface PaperResponse {
    data: Paper[];
    summary: string;
    detail: string;
    code: string;
}

export interface Paper {
    id?: number;
    user_id?: number;
    dia?: string;
    name?: string;
    ayunas?: string;
    nph_lantus?: string;
    rapida_ultra_rap?: string;
    media_manana?: string;
    rapida_ultra_rap_m?: string;
    almuerzo?: string;
    rapida_ultra_rap_a?: string;
    media_tarde?: string;
    rapida_ultra_rap_t?: string;
    merienda?: string;
    rapida_ultra_rap_md?: string;
    nph_lantus_md?: string;
    dormir?: string;
    correcion_total?: string;
    observaciones?: string;
}


// Generated by https://quicktype.io

export interface PaperStoreResponse {
    data: StorePaper;
    msg: Msg;
}

export interface StorePaper {
    id: number;
    user_id: number;
    dia: string;
    ayunas: string;
    nph_lantus: string;
    rapida_ultra_rap: string;
    media_manana: string;
    rapida_ultra_rap_m: string;
    almuerzo: string;
    rapida_ultra_rap_a: string;
    media_tarde: string;
    rapida_ultra_rap_t: string;
    merienda: string;
    rapida_ultra_rap_md: string;
    nph_lantus_md: string;
    dormir: string;
    madrugada: null;
    correcion_total: string;
}

export interface Msg {
    summary: string;
    detail: string;
    code: string;
}

const { fechaActualSimple, dia } = useFecha();

export const inicialState = {
    dia: fechaActualSimple,
    ayunas: '0',
    nph_lantus: '0',
    rapida_ultra_rap: '0',
    media_manana: '0',
    rapida_ultra_rap_m: '0',
    almuerzo: '0',
    rapida_ultra_rap_a: '0',
    media_tarde: '0',
    rapida_ultra_rap_t: '0',
    merienda: '0',
    rapida_ultra_rap_md: '0',
    nph_lantus_md: '0',
    dormir: '0',
    correcion_total: '0',
    observaciones: '0',
}