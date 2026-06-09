export interface roleDtoinput {
    name: string;
    permissionIds: string[];
}
export interface roleDtooutput {
    id: string;
    name: string;
    permissionIds: string[];
}
export interface updatePersinputdto{
    id: string;
    permissionIds: string[];
}