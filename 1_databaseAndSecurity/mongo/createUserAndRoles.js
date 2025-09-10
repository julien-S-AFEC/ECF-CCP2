db.createRole({
  role: "coursesReadWrite",
  privileges: [
    {
      resource: { db: "ecf_ccp2", collection: "courses" },
      actions: ["find", "insert", "update", "remove"]
    }
  ],
  roles: []
})
db.createRole({
  role: "usersReadWrite",
  privileges: [
    {
      resource: { db: "ecf_ccp2", collection: "users" },
      actions: ["find", "insert", "update", "remove"]
    }
  ],
  roles: []
})

db.createUser({
  user: "app_user",
  pwd: "AppUser123!",
  roles: [{ role: "coursesReadWrite", db: "ecf_ccp2" }, { role: "usersReadWrite", db: "ecf_ccp2" }]
})
