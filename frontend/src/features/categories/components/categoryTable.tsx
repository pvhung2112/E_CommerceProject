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
            {data && data.map((item)=>{
                return(
                     <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
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