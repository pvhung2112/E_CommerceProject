export interface CategoryDtoOutput {
  id: string;
  title: string;
  description?: string;
    parentId?: string;
    status: string;
}
   
export interface categoryDtoinput {
  title: string;
  description?: string;
  parentId?: string;
  status: string;
}