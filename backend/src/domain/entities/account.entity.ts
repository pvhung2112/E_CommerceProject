export class accountEntity{
    private readonly id : string;
    private name  : string;
    private email : string;
    private password : string
    private rolesId : string;
    private address? : string;
    private phone? : string;
    private refreshToken : string | null;
    constructor(id: string, name: string, email: string, password: string, rolesId: string, address: string | undefined, phone: string | undefined, refreshToken: string | null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.rolesId = rolesId;
        this.address = address;
        this.phone = phone;
        this.refreshToken = refreshToken;
    }
    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getEmail(): string{
        return this.email;
    }
    getPassword(): string {
        return this.password;
    }
    getRolesId(): string {
        return this.rolesId;
    }
    getAddress(): string | undefined {
        return this.address;
    }
    getPhone(): string | undefined {
        return this.phone;
    }
    getRefreshToken(): string | null {
        return this.refreshToken;
    }
    setName(name: string): void {
        this.name = name;
    }
    setEmail(email: string): void {
        this.email = email;
    }
    setPassword(password: string): void {
        this.password = password;
    }
    setRolesId(rolesId: string): void {
        this.rolesId = rolesId;
    }
    setAddress(address: string): void {
        this.address = address;
    }
    setPhone(phone: string): void {
        this.phone = phone;
    }
    setRefreshToken(refreshToken: string | null): void {
        this.refreshToken = refreshToken;
    }

}