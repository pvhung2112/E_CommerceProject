import { roleType } from "../../../pages/admin/roles/rolesPage";

type props = {
    data: roleType[] | null
}
export function RoleTable({ data }: props) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>tên</th>
                        <th>permission</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.permissionIds}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default RoleTable;