export interface LoginDtoInput {
  email: string;
  password: string;
}
export interface LoginDtoOutput {
  accessToken: string;
  refreshToken: string; 
  user: { 
    id: string; 
    name: string; 
    email: string; 
    rolesId: string | null;
  };
}