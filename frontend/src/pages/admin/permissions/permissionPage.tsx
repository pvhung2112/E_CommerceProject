import { useEffect, useState } from "react";
type roleType ={
    id: string;
    name: string;
    permissionIds: string[];
}
type permissionType ={
    id : string;
    name : string;
    group : string;
     slug : string;
}
function PermissionPage(){
    const [roles,setRoles] = useState<roleType[] | null>(null);
    const [permissions,setPermissions] = useState<permissionType[] | null>(null);
        const fetchData = async () => {
            const [permRes, roleRes] = await Promise.all([
                fetch("http://localhost:5000/admin/api/v1/permissions"),
                fetch("http://localhost:5000/admin/api/v1/roles")
            ]);
            const permData = await permRes.json();
            const roleData = await roleRes.json();
            if (permData.status) setPermissions(permData.data);
            if (roleData.status) setRoles(roleData.data);
        console.log(permData.data);
        console.log(roleData.data);
    };

    useEffect(()=>{
        fetchData();
    },[])
    const grouped: { [key: string]: permissionType[] } = {};
    permissions?.forEach((item)=>{
        if(!grouped[item.group]){
            grouped[item.group] = []
        }
        grouped[item.group].push(item);
       
    })
     console.log(grouped);
    return (
        <>
            <div className="table-permission">
                <div className="table-permissionTitle">
                <strong>Permission</strong>

                {roles && roles.map((role) => (
                    <strong key={role.id}>
                    {role.name}
                    </strong>
                ))}
                </div>

                {Object.entries(grouped).map(([groupName,permissions])=>{
                return (
                    <div key={groupName} className="table-permissionGroup">
                        <h3 className="table-permissionName">{groupName}</h3>
                        {
                            permissions.map((per)=>{
                                return(
                                    <div key={per.id} >
                                        <span>{per.name}</span>
                                        {roles?.map(role => (
                                    <input
                                    key={role.id}
                                        type="checkbox"
                                    />
                    ))}
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                )
            
            })}
            </div>
        
        </>
    )
}
export default PermissionPage;