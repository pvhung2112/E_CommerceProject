
import { permissionModel } from "../database/models/permission.model";
import { roleModel } from "../database/models/role.model";


const seedPermissions = [
  // Category Management
  {
    name: "View Categories",
    group: "Category",
    slug: "category.view"
  },
  {
    name: "Create Category",
    group: "Category",
    slug: "category.create"
  },
  {
    name: "Edit Category",
    group: "Category",
    slug: "category.edit"
  },
  {
    name: "Delete Category",
    group: "Category",
    slug: "category.delete"
  },
  
  // Product Management
  {
    name: "View Products",
    group: "Product",
    slug: "product.view"
  },
  {
    name: "Create Product",
    group: "Product",
    slug: "product.create"
  },
  {
    name: "Edit Product",
    group: "Product",
    slug: "product.edit"
  },
  {
    name: "Delete Product",
    group: "Product",
    slug: "product.delete"
  },
  
  // Account Management
  {
    name: "View Accounts",
    group: "Account",
    slug: "account.view"
  },
  {
    name: "Create Account",
    group: "Account",
    slug: "account.create"
  },
  {
    name: "Edit Account",
    group: "Account",
    slug: "account.edit"
  },
  {
    name: "Delete Account",
    group: "Account",
    slug: "account.delete"
  },
];

const seedRolesWithPermissions = [
  {
    name: "Administrator",
    slugPermissions: [
      "category.view", "category.create", "category.edit", "category.delete",
      "product.view", "product.create", "product.edit", "product.delete",
      "account.view", "account.create", "account.edit", "account.delete"
    ]
  },
  {
    name: "Seller",
    slugPermissions: [
      "product.view", "product.create", "product.edit",
      "category.view"
    ]
  },
  {
    name: "Customer",
    slugPermissions: [
      "product.view", "category.view"
    ]
  }
];

export const seedPermissionsAndRoles = async () => {
  try {
    // Xóa permissions cũ
    await permissionModel.deleteMany({});
    console.log("✓ Cleaned permissions");

    // Tạo permissions
    const createdPermissions = await permissionModel.insertMany(seedPermissions);
    console.log(`✓ Created ${createdPermissions.length} permissions`);

    // Xóa roles cũ
    await roleModel.deleteMany({});
    console.log("✓ Cleaned roles");

    // Tạo roles với permissions
    for (const roleData of seedRolesWithPermissions) {
      const permissionIds = createdPermissions
        .filter(p => roleData.slugPermissions.includes(p.slug))
        .map(p => p._id);

      await roleModel.create({
        name: roleData.name,
        permissionIds: permissionIds
      });
    }

    console.log(`✓ Created ${seedRolesWithPermissions.length} roles with permissions`);
    console.log("✓ Seeding permissions and roles completed!");

  } catch (error) {
    console.error("✗ Error seeding permissions and roles:", error);
    throw error;
  }
};
