import { NavLink } from "react-router-dom";
import RoleTable from "../../../features/roles/components/roleTable";
import { useEffect, useState } from "react";
export type roleType = {
    id: string;
    name: string;
    permissionIds: string[];
}
function RolesPage() {
    const [data, setdata] = useState<roleType[] | null>(null);
    useEffect(() => {
        fetch("http://localhost:5000/admin/api/v1/roles").then((res) => res.json())
            .then((role) => {
                console.log(role);
                setdata(role.data);
            })
    }, [])
    return (
        <>
            <NavLink to="/admin/role/create">thêm</NavLink>
            <RoleTable data={data} />
        </>
    )
}
export default RolesPage;