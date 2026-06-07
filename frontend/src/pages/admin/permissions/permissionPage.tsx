import { useEffect, useState } from "react";
import React from "react";
type roleType = {
    id: string;
    name: string;
    permissionIds: string[];
}
type permissionType = {
    id: string;
    name: string;
    group: string;
    slug: string;
}
function PermissionPage() {
   const [roles, setRoles] = useState<roleType[] | null>(null);
   const [permissions, setPermissions] = useState<permissionType[] | null>(null);
   const getdata = async (api : string)=>{
    return fetch(api).then((res)=>res.json()).then((data)=>{
        return data;
    })
   }
   const loadData = async () =>{
    const roles = await getdata("http://localhost:5000/admin/api/v1/roles");
    const permiss = await getdata("http://localhost:5000/admin/api/v1/permissions");
    setRoles(roles.data);
    setPermissions(permiss.data);
   }
  

   useEffect(()=>{
    loadData();
   },[])
    const dataGrouped : {
    [key : string] : permissionType[]
    } = {};
   if(permissions){
     permissions.forEach((item)=>{
        console.log(item);
        if(!dataGrouped[item.group]){
            dataGrouped[item.group] = [];
        }
        dataGrouped[item.group].push(item);
       })
   }
//    console.log(roles);
//    console.log(permissions);
console.log(dataGrouped);
//    const dataGrouped = {
//         "sản phẩm" : [],
//         "tên" : []
//    }

    return (
       <>
       
       <table>
            <thead>
               
                <tr>
                    <th>quyền</th>
                    {roles && roles.map((item)=>{
                        return(
                            <th key={item.id}>{item.name}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
               {permissions && Object.entries(dataGrouped).map(([key,items])=>{
                return (
                    <React.Fragment key={key}>
                    <tr>
                        <td>{key}</td>
                    </tr>
                    <>
                        {items.map((item)=>{
                            return(
                            <tr key={item.id}>
                            <td>{item.name}</td>
                            {roles &&roles?.map((item)=>{
                                return(
                                   <td><input type="checkbox"  id={item.id} /></td> 
                                )
                            })}
                            </tr>
                            )
                        })}
                    </>
                   </React.Fragment>
                )
                 })}
            </tbody>
       </table>
     <button>lưu</button>
        </>
    )
}
export default PermissionPage;