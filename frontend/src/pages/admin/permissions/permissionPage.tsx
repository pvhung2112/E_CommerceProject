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
    const getdata = async (api: string) => {
        return fetch(api).then((res) => res.json()).then((data) => {
            return data;
        })
    }
    const loadData = async () => {
        const roles = await getdata("http://localhost:5000/admin/api/v1/roles");
        const permiss = await getdata("http://localhost:5000/admin/api/v1/permissions");
        setRoles(roles.data);
        setPermissions(permiss.data);
    }


    useEffect(() => {
        loadData();
    }, [])
    const dataGrouped: {
        [key: string]: permissionType[]
    } = {};
    if (permissions) {
        permissions.forEach((item) => {
            // console.log(item);
            if (!dataGrouped[item.group]) {
                dataGrouped[item.group] = [];
            }
            dataGrouped[item.group].push(item);
        })
    }
    // console.log(roles);
    //    console.log(permissions);
    // console.log(dataGrouped);
    //    const dataGrouped = {
    //         "sản phẩm" : [],
    //         "tên" : []
    //    }
    const handleCheckedchange = (roleId: string, permissionId: string) => {
        // console.log(roleId);
        // console.log(permissionId);
        if (!roles) return;
        const updatedRoles: roleType[] = roles.map((item) => {
            if (item.id == roleId) {
                const hasPer = item.permissionIds.includes(permissionId);
                const newPers = hasPer ? item.permissionIds.filter((id) => { return id !== permissionId; }) :
                    [...item.permissionIds, permissionId];
                const role = {
                    ...item,
                    permissionIds: newPers
                }
                // console.log(role)
                return role;
            }
            return item;
        })
        setRoles(updatedRoles);
    }
    const handleSave = async () => {
        if (!roles) return;
        const payLoad = roles.map((item) => {
            return {
                id: item.id,
                permissionIds: item.permissionIds
            }
        })
        fetch("http://localhost:5000/admin/api/v1/roles/permissions/update", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payLoad)
        }).then((res) => res.json());

    }

    return (
        <>

            <table>
                <thead>

                    <tr>
                        <th>quyền</th>
                        {roles && roles.map((item) => {
                            return (
                                <th key={item.id}>{item.name}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {permissions && Object.entries(dataGrouped).map(([key, permissions]) => {
                        return (
                            <React.Fragment key={key}>
                                <tr>
                                    <td>{key}</td>
                                </tr>
                                <>
                                    {permissions.map((per) => {
                                        return (
                                            <tr key={per.id}>
                                                <td>{per.name}</td>
                                                {roles && roles?.map((item) => {
                                                    return (
                                                        <td key={item.id}>
                                                            <input type="checkbox" id={item.id}
                                                                checked={item.permissionIds.includes(per.id)}
                                                                onChange={() => handleCheckedchange(item.id, per.id)} />
                                                        </td>
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
            <button onClick={handleSave}>lưu thay đổi</button>
        </>
    )
}
export default PermissionPage;