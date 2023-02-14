import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PasajeroDTO{
    @IsNotEmpty()
    @IsString()
    readonly nombre:string;
    @IsNotEmpty()
    @IsString()
    readonly asiento:string;
    @IsEmail()
    @IsNotEmpty()
    readonly vuelo:string;
    @IsNotEmpty()
    @IsString()
    readonly horario:string;
}