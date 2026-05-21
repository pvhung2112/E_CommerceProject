import { adminRouter } from "../admin.route"
import { ClientRouter } from "../clients.route"



export const router = [
    ...ClientRouter,
    ...adminRouter
]
