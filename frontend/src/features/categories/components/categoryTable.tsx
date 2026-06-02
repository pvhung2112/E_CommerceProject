export type categoryType ={
 id: string;
  title: string;
  description?: string;
    parentId?: string;
    status: string;
}
type props = {
  data: categoryType[] | null
}
function CategoryTable({data} : props){
    const items : (categoryType & {level : number})[] = [];
   const tree=(parentId : string | undefined,level : number)=>{
    data!.forEach((item)=>{
        if(item.parentId == parentId){
          items.push({
            ...item,
            level
          })
          tree(item.id,level + 1);
        }
        
    })
   }
   if (data) {
    tree(undefined,0);
}
    return (
        <>
        <table>
             <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>parentId</th>
                <th>status</th>
                <th>hành động</th>
            </tr>
            
         </thead>
         <tbody>
            {data && items.map((item)=>{
                return(
                     <tr key={item.id}>
                <td>{item.id}</td>
                <td>{"-".repeat(item.level)} {item.title}</td>
                <td>{item.description}</td>
                <td>{item.parentId}</td>
                <td>{item.status}</td>
                 <td>
                    <button>sửa</button>
                    <button>xóa</button>
                 </td>
                </tr>
                )
                
            })}
         </tbody>
        </table>
        
        </>
    )
}
export default CategoryTable;