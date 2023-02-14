import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UsuarioDTO{
    @IsNotEmpty()
    @IsString()
    readonly vuelo:string;
    @IsNotEmpty()
    @IsString()
    readonly horario:string;
    @IsEmail()
    @IsNotEmpty()
    readonly fecha:string;
    @IsNotEmpty()
    @IsString()
    readonly destino:string;
}