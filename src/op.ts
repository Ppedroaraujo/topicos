import { Matemagica } from "./matemagica";
import { Erro } from "./erro"

export class Operacoes{
    
    sum(a, b){    
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return Erro.PARAM_ERROR_TYPE
        } 
        return matemagica.getSum(a,b);
    }

    sub(a, b){
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return Erro.PARAM_ERROR_TYPE
        } 
        return matemagica.getSub(a,b);
    
    }

    div(a,b){
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return Erro.PARAM_ERROR_TYPE
        }
        if(b == 0){
            return Erro.PARAM_ERROR_DIV_ZERO
        }
        return matemagica.getDiv(a,b);
    }

    mult(a,b){
        let matemagica = new Matemagica(a, b); 
        if(typeof a !== "number" || typeof b !== "number"){
            return Erro.PARAM_ERROR_TYPE
        } 
        return matemagica.getMult(a,b);
    }

    
}